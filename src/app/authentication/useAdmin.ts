import { useUser } from "./useUser";

export function useAdmin() {
    const { user, isLoading, isAuthenticated } = useUser();
    const isAdmin =
        isAuthenticated && user?.user_metadata?.role === "admin";

    return { user, isLoading, isAuthenticated, isAdmin };
}
