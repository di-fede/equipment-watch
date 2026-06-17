import BottomNavAdmin from "../_components-admin/adminBottom";
import HeaderAdmin from "../_components-admin/header-admin";
import AdminProtectedRoute from "../ui/adminProtectedRoute";

export default function EquipmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AdminProtectedRoute>
            <div className="dash__grid">
                <HeaderAdmin />
                {children}
                {/* <BottomNavAdmin /> */}
            </div>
        </AdminProtectedRoute>
    );
}
