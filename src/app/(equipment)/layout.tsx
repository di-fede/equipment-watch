import EquipHeading from "../_components-main/equip-heading";
import Header from "../_components-main/header";
import Nav from "../_components-main/nav";
import BackButton from "../_components-main/back-button";
import { ButtonProvider } from "../context/buttonContext";
import QueryProvider from "../providers";

export default function EquipmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="equipmentMain">
            <Header />

            <QueryProvider>
                <EquipHeading />
                {children}
            </QueryProvider>
            <Nav />
        </div>
    );
}
