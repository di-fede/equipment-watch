import { signup as signupApi } from "../../services/apiAuth";
import { useMutation } from "@tanstack/react-query";

export function useSignup() {
    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log(user);
        },
    });
    return { signup, isLoading };
}
