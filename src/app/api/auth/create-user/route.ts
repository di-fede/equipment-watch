import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/services/supabaseServer";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
    try {
        // 1. Verify the requesting user is an admin by reading their access token
        const authHeader = request.headers.get("authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return NextResponse.json(
                { error: "Missing authorization header" },
                { status: 401 },
            );
        }

        const token = authHeader.split(" ")[1];

        // Create a temporary client to verify the caller's identity
        const supabaseUrl = "https://oxdvxwhishvrgakggupj.supabase.co";
        const supabaseAnonKey = "sb_publishable_dwLGi1UFCwsSQ-sjxjjXlw_4B0vOYJ1";
        const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

        const {
            data: { user: callerUser },
            error: authError,
        } = await supabaseClient.auth.getUser(token);

        if (authError || !callerUser) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 },
            );
        }

        // Check that the caller is an admin
        if (callerUser.user_metadata?.role !== "admin") {
            return NextResponse.json(
                { error: "Forbidden: Admin access required" },
                { status: 403 },
            );
        }

        // 2. Parse the request body
        const { name, email, password, role = "user" } = await request.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Name, email, and password are required" },
                { status: 400 },
            );
        }

        // 3. Create the user using the admin API (no session side-effects)
        const supabaseAdmin = getSupabaseAdmin();
        const { data, error } = await supabaseAdmin.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
            user_metadata: {
                name,
                role,
                avatar: "",
            },
        });

        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 400 },
            );
        }

        return NextResponse.json({ user: data.user }, { status: 201 });
    } catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 },
        );
    }
}
