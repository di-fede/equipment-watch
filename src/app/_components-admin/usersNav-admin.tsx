"use client";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
export default function UserNavAdmin() {
    const [createSelected, setCreateSelected] = useState(Boolean);
    const [updateSelected, setUpdateSelected] = useState(Boolean);

    return (
        <div className="userNavAdmin">
            <div className={`userNavAdmin__container ${barlow.className}`}>
                <div
                    onClick={() => {
                        setCreateSelected(true);
                        setUpdateSelected(false);
                    }}
                    className={`userNavAdmin__button ${createSelected ? "button-selected" : ""}`}
                >
                    <div className="userNavAdmin__button-label">Create</div>
                </div>
                <div
                    onClick={() => {
                        setUpdateSelected(true);
                        setCreateSelected(false);
                    }}
                    className={`userNavAdmin__button ${updateSelected ? "button-selected" : ""}`}
                >
                    <div className="userNavAdmin__button-label">Update</div>
                </div>
            </div>
        </div>
    );
}
