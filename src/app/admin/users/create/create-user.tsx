"use client";

import { useForm, FieldValues } from "react-hook-form";
import { Montserrat } from "next/font/google";
import { useCreateUser } from "../../../authentication/useCreateUser";
import AdminUserNav from "@/app/_components-admin/admin-userNav";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
const mont = montserrat.className;

export default function CreateUser() {
    const { createUser, isPending } = useCreateUser();
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;

    function onSubmit({ name, email, password }: FieldValues) {
        createUser({ name, email, password }, { onSettled: () => reset() });
    }

    return (
        <div className={`adminForm ${mont}`}>
            <div className="adminForm__container">
                <div className="adminForm__headingContainer">
                    <span>Create new user</span>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="adminForm__grid adminForm__create-form"
                >
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            disabled={isPending}
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
                            disabled={isPending}
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
                            Password
                        </label>
                        <input
                            disabled={isPending}
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
                            disabled={isPending}
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
                            <button
                                className="adminForm__button-cancel"
                                disabled={isPending}
                            >
                                Cancel
                            </button>
                            <button
                                className="buttonPrimary"
                                disabled={isPending}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
