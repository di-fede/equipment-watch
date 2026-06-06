"use client";

import LogoImage from "../_components-dash/logo-image";
import LogoText from "../_components-dash/logo-text";
import { useUser } from "../authentication/useUser";
import NavAdmin from "./nav-admin";

export default function HeaderAdmin() {
    const { isAuthenticated } = useUser();

    return (
        <div className="headerDash">
            <div className="headerDash__logo-container">
                <LogoImage />
                <LogoText />
            </div>
            {isAuthenticated && <NavAdmin />}
        </div>
    );
}
