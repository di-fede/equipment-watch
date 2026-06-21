import Link from "next/link";
import LogoImage from "./_components-dash/logo-image";
import LogoText from "./_components-dash/logo-text";
import ButtonArea from "./_components-dash/buttonArea-dash";
import BottomNavContainer from "./_components-dash/bottomNavContainer";

export default async function Home() {
    return (
        <div className="dash__grid">
            <ButtonArea />
        </div>
    );
}
