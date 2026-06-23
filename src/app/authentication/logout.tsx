"use client";
import { useLogout } from "./useLogout";
export default function Logout({ showLogout }: { showLogout: boolean }) {
    const { logout, isLoading } = useLogout();
    return (
        <button
            className={`logout__button ${showLogout ? "logout__button-show" : ""}`}
            disabled={isLoading}
            onClick={() => logout()}
        >
            Logout
        </button>
    );
}
