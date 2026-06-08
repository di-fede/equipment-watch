import HeaderAdmin from "../_components-admin/header-admin";
import DashHeader from "../_components-dash/header-dash";

export default function EquipmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="dash__grid">
            <DashHeader />
            {children}
        </div>
    );
}
