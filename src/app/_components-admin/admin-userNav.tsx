"use client";
import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});

export default function AdminUserNav() {
    const pathname = usePathname();

    // Default to 'Create' selected if we are on the base route '/admin/users' or specifically '/admin/users/create'
    const createSelected =
        pathname === "/admin/users/create" || pathname === "/admin/users";
    const updateSelected = pathname === "/admin/users/update";

    return (
        <div className="adminUserNav">
            <div className={`adminUserNav__container ${barlow.className}`}>
                <div
                    className={`adminUserNav__button ${createSelected ? "button-selected" : ""}`}
                >
                    <div className="adminUserNav__button-label">
                        Create new user
                    </div>
                </div>
                {/* <Link
                    href={"/admin/users/update"}
                    className={`adminUserNav__button ${updateSelected ? "button-selected" : ""}`}
                >
                    <div className="adminUserNav__button-label">Update</div>
                </Link> */}
            </div>
        </div>
    );
}
