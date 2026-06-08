// Middleware for protecting routes
// NOTE: Admin route protection is handled client-side by AdminProtectedRoute
// because Supabase sessions are stored in localStorage (not cookies),
// which is not accessible from middleware.

export function middleware(request) {
    // No-op for now — add Supabase SSR cookie-based auth logic here
    // if you switch to @supabase/ssr's createServerClient in the future.
}

export const config = {
    matcher: ["/treadmill", "/"],
};
