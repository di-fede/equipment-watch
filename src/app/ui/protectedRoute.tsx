"use client";

import { ReactNode, useEffect } from "react";
import { useUser } from "../authentication/useUser";
import { useRouter, usePathname } from "next/navigation";

function ProtectedRoute({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    // 1. Load the authenticated user
    const { isLoading, isAuthenticated } = useUser();

    // 2. If no authenticated user, redirect to the /login
    useEffect(
        function () {
            if (!isAuthenticated && !isLoading && pathname !== "/login") {
                router.push("/login");
            }
        },
        [isAuthenticated, isLoading, router, pathname],
    );

    // If we are on the login page, just render the login page without protection
    if (pathname === "/login") return children;

    // 3. Show loading spinner
    if (isLoading) return <h1 className="loading"> Loading</h1>;

    if (isAuthenticated) return children;
}
export default ProtectedRoute;
