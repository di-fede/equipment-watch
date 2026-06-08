"use client";

import NavDash from "./nav-dash";
import { useUser } from "../authentication/useUser";
import LogoMain from "../_components-main/logo-main";

export default function DashHeader() {
    const { isAuthenticated } = useUser();

    return (
        <div className="header">
            <div className="header__logo-container">
                {/* <LogoImage />
                <LogoText /> */}
                <LogoMain />
            </div>
            {isAuthenticated && <NavDash />}
        </div>
    );
}
