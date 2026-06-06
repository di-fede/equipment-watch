"use client";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
export default function NavAdmin() {
    const [equipmentSelected, setEquipmentSelected] = useState(Boolean);
    const [usersSelected, setUsersSelected] = useState(Boolean);
    const [adminSelected, setAdminSelected] = useState(Boolean);

    return (
        <div className="adminNav">
            <div className={`adminNav__container ${barlow.className}`}>
                <Link
                    href={"/"}
                    onClick={() => {
                        setAdminSelected(true);
                        setEquipmentSelected(false);
                        setUsersSelected(false);
                    }}
                    className={`adminNav__button ${adminSelected ? "button-selected" : ""}`}
                >
                    <div className="adminNav__button-label">Dash</div>
                </Link>
                <div
                    onClick={() => {
                        setEquipmentSelected(true);
                        setUsersSelected(false);
                        setAdminSelected(false);
                    }}
                    className={`adminNav__button ${equipmentSelected ? "button-selected" : ""}`}
                >
                    <div className="adminNav__button-label">Equipment</div>
                </div>
                <div
                    onClick={() => {
                        setUsersSelected(true);
                        setEquipmentSelected(false);
                        setAdminSelected(false);
                    }}
                    className={`adminNav__button ${usersSelected ? "button-selected" : ""}`}
                >
                    <div className="adminNav__button-label">Users</div>
                </div>
            </div>
        </div>
    );
}
