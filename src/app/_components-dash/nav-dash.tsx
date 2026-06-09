import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { useAdmin } from "../authentication/useAdmin";

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
export default function NavDash() {
    const [scanSelected, setScanSelected] = useState(Boolean(true));
    const [usersSelected, setUsersSelected] = useState(Boolean);
    const [adminSelected, setAdminSelected] = useState(Boolean);
    const { isAdmin } = useAdmin();

    return (
        <div className="navDash">
            <div className={`navDash__container ${barlow.className}`}>
                <Link
                    href={"/"}
                    onClick={() => {
                        setScanSelected(true);
                        setUsersSelected(false);
                        setAdminSelected(false);
                    }}
                    className={`navDash__button ${scanSelected ? "button-selected" : ""}`}
                >
                    <div className="navDash__button-label">Scan</div>
                </Link>
                <div
                    onClick={() => {
                        setUsersSelected(true);
                        setScanSelected(false);
                        setAdminSelected(false);
                    }}
                    className={`navDash__button ${usersSelected ? "button-selected" : ""}`}
                >
                    <div className="navDash__button-label">Users</div>
                </div>
                {isAdmin && (
                    <Link
                        href={"/admin/users/create"}
                        onClick={() => {
                            setAdminSelected(true);
                            setScanSelected(false);
                            setUsersSelected(false);
                        }}
                        className={`navDash__button ${adminSelected ? "button-selected" : ""}`}
                    >
                        <div className="navDash__button-label">Admin</div>
                    </Link>
                )}
            </div>
        </div>
    );
}
