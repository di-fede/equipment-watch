import { Barlow_Condensed, Montserrat } from "next/font/google";
import Logout from "../authentication/logout";
import TrueFitnessLogo from "./logo-main";
import LogoSmall from "./logo-small";
import BackButton from "./back-button";
import { ButtonProvider } from "../context/buttonContext";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["600"],
});

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
export default function Header() {
    return (
        <div className="header">
            <ButtonProvider link="/" content="Back">
                <BackButton />
            </ButtonProvider>
            <div className="logo-container">
                <LogoSmall />
                <div className={`header__subTitle ${barlow.className}`}>
                    Equipment Watch
                </div>
            </div>
        </div>
    );
}
