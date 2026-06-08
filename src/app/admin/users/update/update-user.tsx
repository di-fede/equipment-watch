"use client";

import { useForm, FieldValues } from "react-hook-form";
import { Montserrat } from "next/font/google";
import AdminUserNav from "@/app/_components-admin/admin-userNav";
import { useUser } from "@/app/authentication/useUser";
import { useState } from "react";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
const mont = montserrat.className;

export default function UpdateUser() {
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    const { user } = useUser();

    const email = user?.email;
    const currentName = user?.user_metadata?.name;

    const [name, setName] = useState(currentName ?? "");

    return (
        <div className={`adminForm ${mont}`}>
            <div className="adminForm__container">
                <AdminUserNav />
                <form className="adminForm__grid adminForm__create-form">
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="adminForm__input"
                            id="name"
                            type="text"
                            {...register("name", {
                                required: "This field is required",
                            })}
                        />
                        {errors?.name?.message && (
                            <span className="adminForm__error">
                                {errors.name.message as string}
                            </span>
                        )}
                    </div>
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="email"
                        >
                            Email address
                        </label>
                        <input
                            className="adminForm__input"
                            id="email"
                            type="text"
                            {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please provide a valid email",
                                },
                            })}
                        />
                        {errors?.email?.message && (
                            <span className="adminForm__error">
                                {errors.email.message as string}
                            </span>
                        )}
                    </div>
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="password"
                        >
                            Password (min 8 characters)
                        </label>
                        <input
                            className="adminForm__input"
                            id="password"
                            type="text"
                            {...register("password", {
                                required: "This field is required",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Password needs a minimum of 8 characters",
                                },
                            })}
                        />
                        {errors?.password?.message && (
                            <span className="adminForm__error">
                                {errors.password.message as string}
                            </span>
                        )}
                    </div>
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="passwordConfirm"
                        >
                            Re-enter Password
                        </label>
                        <input
                            className="adminForm__input"
                            id="passwordConfirm"
                            type="text"
                            {...register("passwordConfirm", {
                                required: "This field is required",
                                validate: (value) =>
                                    value === getValues().password ||
                                    "Password need to match.",
                            })}
                        />
                        {errors?.passwordConfirm?.message && (
                            <span className="adminForm__error">
                                {errors.passwordConfirm.message as string}
                            </span>
                        )}
                    </div>
                    <div className="adminForm__row">
                        <div className="adminForm__button-container">
                            <button className="adminForm__button-cancel">
                                Cancel
                            </button>
                            <button className="adminForm__button-submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
