import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/apiAuth";
import { useRouter } from "next/navigation";

export function useLogin() {
    const router = useRouter();

    const { mutate: login, isPending } = useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) =>
            loginApi({ email, password }),
        onSuccess: (user) => {
            console.log(user);
            router.push("/");
        },
        onError: (err) => {
            console.log("ERROR", err);
        },
    });
    return { login, isPending };
}
