// Middleware for protecting routes
// TODO: Add Supabase auth session checking here

export function middleware(request) {
    // No-op for now — add Supabase auth logic here
}

export const config = {
    matcher: ["/treadmill", "/"],
};
