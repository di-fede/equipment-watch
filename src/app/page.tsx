import Link from "next/link";
import LogoImage from "./components-dash/logo-image";
import LogoText from "./components-dash/logo-text";
import ButtonArea from "./components-dash/buttonArea-dash";
import HeaderDash from "./components-dash/header-dash";

export default async function Home() {
    return (
        <div className="start">
            <HeaderDash />
            <ButtonArea />
        </div>
    );
}
