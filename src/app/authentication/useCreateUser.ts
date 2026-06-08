import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserAsAdmin } from "../../services/apiAuth";

export function useCreateUser() {
    const queryClient = useQueryClient();

    const {
        mutate: createUser,
        isPending,
        isError,
        error,
        isSuccess,
    } = useMutation({
        mutationFn: createUserAsAdmin,
        onSuccess: (user) => {
            console.log("User created successfully:", user);
        },
        onError: (err) => {
            console.error("Failed to create user:", err);
        },
    });

    return { createUser, isPending, isError, error, isSuccess };
}
