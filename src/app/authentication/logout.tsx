"use client";
import { useLogout } from "./useLogout";
export default function Logout() {
    const { logout, isLoading } = useLogout();
    return (
        <button disabled={isLoading} onClick={() => logout()}>
            Logout
        </button>
    );
}
