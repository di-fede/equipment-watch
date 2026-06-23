"use client";
import { useUser } from "../authentication/useUser";
import NavAdmin from "../_components-admin/nav-admin";
import NavDash from "./nav-dash";
import { usePathname } from "next/navigation";
import { useAdmin } from "../authentication/useAdmin";
import { useState } from "react";

export default function BottomNavContainer() {
    const { isAuthenticated } = useUser();
    const pathname = usePathname();
    const { isAdmin } = useAdmin();
    const [showLogout, setShowLogout] = useState(Boolean(false));

    function handleShowLogout() {
        setShowLogout(!showLogout);
    }

    const showNavAdmin = pathname?.startsWith("/admin");

    return (
        <>
            {isAuthenticated && (
                <>
                    <div
                        onClick={() => setShowLogout(false)}
                        className={`logout__button-background ${showLogout ? "logout__button-background-show" : ""}`}
                    ></div>
                    <div className="bottomNavContainer">
                        {showNavAdmin ? (
                            <NavAdmin />
                        ) : (
                            <NavDash
                                showLogout={showLogout}
                                handleShowLogout={handleShowLogout}
                            />
                        )}
                    </div>
                </>
            )}{" "}
        </>
    );
}
