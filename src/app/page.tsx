import Link from "next/link";
import LogoImage from "./components-start/logo-image";
import LogoText from "./components-start/logo-text";
import ButtonArea from "./components-start/startButton-area";

export default function Home() {
    return (
        <div className="start">
            <LogoImage />
            <LogoText />
            <ButtonArea />
        </div>
    );
}
