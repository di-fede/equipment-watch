import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
export default function NavDash() {
    const [scanSelected, setScanSelected] = useState(Boolean);
    const [usersSelected, setUsersSelected] = useState(Boolean);
    const [adminSelected, setAdminSelected] = useState(Boolean);

    return (
        <div className="navDash">
            <div className={`navDash__container ${barlow.className}`}>
                <div
                    onClick={() => {
                        setScanSelected(true);
                        setUsersSelected(false);
                        setAdminSelected(false);
                    }}
                    className={`navDash__button ${scanSelected ? "button-selected" : ""}`}
                >
                    <div className="navDash__button-label">Scan</div>
                </div>
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
                <Link
                    href={"/admin"}
                    onClick={() => {
                        setAdminSelected(true);
                        setScanSelected(false);
                        setUsersSelected(false);
                    }}
                    className={`navDash__button ${adminSelected ? "button-selected" : ""}`}
                >
                    <div className="navDash__button-label">Admin</div>
                </Link>
            </div>
        </div>
    );
}
