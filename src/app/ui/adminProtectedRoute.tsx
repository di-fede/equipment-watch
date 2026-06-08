"use client";

import { ReactNode, useEffect } from "react";
import { useAdmin } from "../authentication/useAdmin";
import { useRouter, usePathname } from "next/navigation";

function AdminProtectedRoute({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const { isLoading, isAuthenticated, isAdmin } = useAdmin();

    useEffect(
        function () {
            if (!isLoading && (!isAuthenticated || !isAdmin)) {
                // Non-admin users get redirected to the homepage
                router.push("/");
            }
        },
        [isAuthenticated, isAdmin, isLoading, router],
    );

    // Show loading state while checking auth
    if (isLoading) return <h1 className="loading">Loading</h1>;

    // Only render children if user is an admin
    if (isAdmin) return children;

    // Return null while redirect is in progress
    return null;
}

export default AdminProtectedRoute;
