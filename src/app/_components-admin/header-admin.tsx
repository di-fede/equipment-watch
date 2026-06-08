"use client";

import LogoImage from "../_components-dash/logo-image";
import LogoText from "../_components-dash/logo-text";
import TrueFitnessLogo from "../_components-main/logo-main";
import { useUser } from "../authentication/useUser";
import NavAdmin from "./nav-admin";

export default function HeaderAdmin() {
    const { isAuthenticated } = useUser();

    return (
        <div className="header">
            <div className="header__logo-container">
                {/* <LogoImage />
                <LogoText /> */}
                <TrueFitnessLogo />
            </div>
            {isAuthenticated && <NavAdmin />}
        </div>
    );
}
