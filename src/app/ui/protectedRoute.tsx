import { ReactNode } from "react";
import { useUser } from "../authentication/useUser";

function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user, isLoading } = useUser();

    return children;
}
export default ProtectedRoute;
