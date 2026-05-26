import EquipHeading from "../components-main/equip-heading";
import Header from "../components-main/header";
import Nav from "../components-main/nav";

export default function EquipmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="main">
            <Header />
            <EquipHeading />
            {children}
            <Nav />
        </div>
    );
}
