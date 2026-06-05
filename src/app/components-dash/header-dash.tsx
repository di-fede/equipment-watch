"use client";

import LogoImage from "./logo-image";
import LogoText from "./logo-text";
import NavDash from "./nav-dash";
import { useUser } from "../authentication/useUser";

export default function HeaderDash() {
    const { isAuthenticated } = useUser();

    return (
        <div className="headerDash">
            <div className="headerDash__logo-container">
                <LogoImage />
                <LogoText />
            </div>
            {isAuthenticated && <NavDash />}
        </div>
    );
}
