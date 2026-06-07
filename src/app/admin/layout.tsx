import HeaderAdmin from "../_components-admin/header-admin";

export default function EquipmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="dash__grid">
            <HeaderAdmin />
            {children}
        </div>
    );
}
