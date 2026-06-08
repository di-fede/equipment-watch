import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oxdvxwhishvrgakggupj.supabase.co";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Server-side Supabase client with service role key for admin operations.
// NEVER import this in client components — it bypasses Row Level Security.
//
// The client is created lazily to avoid build-time errors when the env var
// is not yet configured. If the key is missing at runtime, createUser will
// throw a clear error message.
function getSupabaseAdmin() {
    if (!supabaseServiceRoleKey) {
        throw new Error(
            "SUPABASE_SERVICE_ROLE_KEY is not set. Add it to your .env.local file.",
        );
    }
    return createClient(supabaseUrl, supabaseServiceRoleKey);
}

export { getSupabaseAdmin };
