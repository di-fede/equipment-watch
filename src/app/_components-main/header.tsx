"use client";

import NavDash from "../_components-dash/nav-dash";
import { useUser } from "../authentication/useUser";
import LogoMain from "./logo-main";

export default function DashHeader() {
    const { isAuthenticated } = useUser();

    return (
        <div className="header">
            <div className="header__logo-container">
                {/* <LogoImage />
                <LogoText /> */}
                <LogoMain />
            </div>
        </div>
    );
}
