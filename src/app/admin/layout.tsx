import EquipHeading from "../_components-main/equip-heading";
import Header from "../_components-main/header";
import Nav from "../_components-main/nav";
import BackButton from "../_components-main/back-button";
import { ButtonProvider } from "../context/buttonContext";
import QueryProvider from "../providers";
import HeaderAdmin from "../_components-admin/header-admin";
import UserNavAdmin from "../_components-admin/usersNav-admin";

export default function EquipmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="dash__grid">
            <HeaderAdmin />
            <UserNavAdmin />
            {children}
        </div>
    );
}
