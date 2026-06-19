"use client";
import { useState } from "react";
import { useLogin } from "./useLogin";
import PrimaryButton from "../_components-main/primary-button";
import { Montserrat } from "next/font/google";
import toast from "react-hot-toast";
const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isPending } = useLogin();

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!email || !password) return;
        login(
            { email, password },
            {
                onSettled: () => {
                    setEmail("");
                    setPassword("");
                },
                onError: (err) => toast.error(err.message),
                onSuccess: () => toast.success("Login Successful"),
            },
        );
    }

    return (
        <div className={`login__form-container ${montserrat.className}`}>
            <form className="login__form" onSubmit={handleSubmit}>
                <label className="login__input-label" htmlFor="email">
                    Email
                </label>
                <input
                    className="login__email login__input"
                    type="email"
                    id="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    disabled={isPending}
                />
                <label className="login__input-label" htmlFor="password">
                    Password
                </label>
                <input
                    className="login__password login__input"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isPending}
                />

                <button className="buttonPrimary__dash" disabled={isPending}>
                    <div className="start__button">
                        <span className="login__buttonSpan">Login</span>
                    </div>
                </button>
            </form>
        </div>
    );
}
