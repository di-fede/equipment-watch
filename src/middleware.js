import { auth } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    if (!req.auth) {
        return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }
});

export const config = {
    matcher: ["/treadmill"],
};
