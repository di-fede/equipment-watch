"use client";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
export default function AdminUserNav() {
    const [createSelected, setCreateSelected] = useState(Boolean(true));
    const [updateSelected, setUpdateSelected] = useState(Boolean);

    return (
        <div className="adminUserNav">
            <div className={`adminUserNav__container ${barlow.className}`}>
                <div
                    onClick={() => {
                        setCreateSelected(true);
                        setUpdateSelected(false);
                    }}
                    className={`adminUserNav__button ${createSelected ? "button-selected" : ""}`}
                >
                    <div className="adminUserNav__button-label">Create</div>
                </div>
                <div
                    onClick={() => {
                        setUpdateSelected(true);
                        setCreateSelected(false);
                    }}
                    className={`adminUserNav__button ${updateSelected ? "button-selected" : ""}`}
                >
                    <div className="adminUserNav__button-label">Update</div>
                </div>
            </div>
        </div>
    );
}
