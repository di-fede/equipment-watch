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
    const [usersSelected, setUsersSelected] = useState(Boolean(true));
    const [adminSelected, setAdminSelected] = useState(Boolean);

    return (
        <div className="mainNav__container">
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
                    <div className="navDash__button-label">
                        <svg id="navSvg" viewBox="0 0 24 24" fill="#414042">
                            <path d="M13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9h-6q-.425 0-.712-.288T13 8M3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13H4q-.425 0-.712-.288T3 12m10 8v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m2-9h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2" />
                        </svg>
                    </div>
                </Link>
                <Link
                    href={"/admin/users/create"}
                    onClick={() => {
                        setUsersSelected(true);
                        setEquipmentSelected(false);
                        setAdminSelected(false);
                    }}
                    className={`adminNav__button ${usersSelected ? "button-selected" : ""}`}
                >
                    <div className="navDash__button-label">
                        <svg
                            id="navSvg"
                            viewBox="0 0 24 24"
                            fill={usersSelected ? "black" : "#414042"}
                        >
                            <path d="M21 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path>
                        </svg>
                    </div>
                </Link>
                <Link
                    href={"/admin/equipment"}
                    onClick={() => {
                        setEquipmentSelected(true);
                        setUsersSelected(false);
                        setAdminSelected(false);
                    }}
                    className={`adminNav__button ${equipmentSelected ? "button-selected" : ""}`}
                >
                    <div className="navDash__button-label">
                        <svg
                            id="navSvg"
                            viewBox="3 3 27 27"
                            fill={equipmentSelected ? "black" : "#414042"}
                        >
                            <path d="M23 17h-13v3.494c0 0.835-0.672 1.506-1.5 1.506-0.834 0-1.5-0.674-1.5-1.506v-0.579c-0.156 0.055-0.325 0.085-0.5 0.085-0.834 0-1.5-0.672-1.5-1.502v-1.498h-2v-1h2v-1.498c0-0.831 0.672-1.502 1.5-1.502 0.176 0 0.344 0.030 0.5 0.085v0-0.578c0-0.835 0.672-1.506 1.5-1.506 0.834 0 1.5 0.674 1.5 1.506v3.494h13v-3.494c0-0.835 0.672-1.506 1.5-1.506 0.834 0 1.5 0.674 1.5 1.506v0.579c0.156-0.055 0.325-0.085 0.5-0.085 0.834 0 1.5 0.672 1.5 1.502v1.498h2v1h-2v1.498c0 0.831-0.672 1.502-1.5 1.502-0.176 0-0.344-0.030-0.5-0.085v0.578c0 0.835-0.672 1.506-1.5 1.506-0.834 0-1.5-0.674-1.5-1.506v-3.494z"></path>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
}
