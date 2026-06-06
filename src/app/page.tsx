import Link from "next/link";
import LogoImage from "./_components-dash/logo-image";
import LogoText from "./_components-dash/logo-text";
import ButtonArea from "./_components-dash/buttonArea-dash";
import HeaderDash from "./_components-dash/header-dash";

export default async function Home() {
    return (
        <div className="dash__grid">
            <HeaderDash />
            <ButtonArea />
        </div>
    );
}
