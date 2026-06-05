import { Barlow_Condensed } from "next/font/google";
import { useState } from "react";

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
export default function NavDash() {
    const [equipmentSelected, setEquipmentSelected] = useState(Boolean);
    const [usersSelected, setUsersSelected] = useState(Boolean);
    const [adminSelected, setAdminSelected] = useState(Boolean);

    return (
        <div className="navDash">
            <div className={`navDash__container ${barlow.className}`}>
                <div
                    onClick={() => {
                        setEquipmentSelected(true);
                        setUsersSelected(false);
                        setAdminSelected(false);
                    }}
                    className={`navDash__button ${equipmentSelected ? "button-selected" : ""}`}
                >
                    <div className="navDash__button-label">Equipment</div>
                </div>
                <div
                    onClick={() => {
                        setUsersSelected(true);
                        setEquipmentSelected(false);
                        setAdminSelected(false);
                    }}
                    className={`navDash__button ${usersSelected ? "button-selected" : ""}`}
                >
                    <div className="navDash__button-label">Users</div>
                </div>
                <div
                    onClick={() => {
                        setAdminSelected(true);
                        setEquipmentSelected(false);
                        setUsersSelected(false);
                    }}
                    className={`navDash__button ${adminSelected ? "button-selected" : ""}`}
                >
                    <div className="navDash__button-label">Admin</div>
                </div>
            </div>
        </div>
    );
}
