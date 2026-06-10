import EquipHeading from "../_components-main/equip-heading";
import Header from "../_components-main/header";
import Nav from "../_components-main/nav";
import BackButton from "../_components-main/back-button";
import { ButtonProvider } from "../context/buttonContext";
import QueryProvider from "../providers";
import DashHeader from "../_components-dash/header-dash";

export default function EquipmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="equipmentMain">
            <DashHeader />

            <QueryProvider>
                <EquipHeading />
                {children}
            </QueryProvider>
            <Nav />
        </div>
    );
}
