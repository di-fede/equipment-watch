import Link from "next/link";
import EquipHeading from "../components-main/equip-heading";
import Header from "../components-main/header";
import Nav from "../components-main/nav";
import BackButton from "../components-main/back-button";
import { ButtonProvider } from "../context/buttonContext";

export default function EquipmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="main">
            <Header />
            <ButtonProvider content="Back" link="/">
                <BackButton />
            </ButtonProvider>
            <EquipHeading />
            {children}
            <Nav />
        </div>
    );
}
