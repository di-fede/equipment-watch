"use client";
import { useUser } from "../authentication/useUser";
import NavAdmin from "./nav-admin";

export default function BottomNavAdmin() {
    const { isAuthenticated } = useUser();
    return (
        <div className="bottomNavContainer">
            {isAuthenticated && <NavAdmin />}
        </div>
    );
}
