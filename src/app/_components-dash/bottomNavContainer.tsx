"use client";
import { useUser } from "../authentication/useUser";
import NavAdmin from "../_components-admin/nav-admin";
import NavDash from "./nav-dash";
import { usePathname } from "next/navigation";
import { useAdmin } from "../authentication/useAdmin";

export default function BottomNavContainer() {
    const { isAuthenticated } = useUser();
    const pathname = usePathname();
    const { isAdmin } = useAdmin();

    const showNavAdmin = pathname?.startsWith("/admin");

    return (
        <>
            {isAuthenticated && (
                <div className="bottomNavContainer">
                    {showNavAdmin ? <NavAdmin /> : <NavDash />}
                </div>
            )}{" "}
        </>
    );
}
