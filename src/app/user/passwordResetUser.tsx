"use client";
import { Montserrat } from "next/font/google";
import { useUser } from "../authentication/useUser";
import { useState } from "react";
const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
const mont = montserrat.className;
export default function PasswordResetUser() {
    const {
        user: {
            email,
            user_metadata: { name: currentName },
        },
    } = useUser();

    const [name, setName] = useState(currentName);
    return (
        <div className={`passwordReset ${mont}`}>
            <div className="passwordReset__container">
                <div className="passwordReset__heading">
                    <span>Reset password</span>
                </div>
                <form className="passwordReset__grid passwordReset__create-form">
                    <div className="passwordReset__row">
                        <label
                            className="passwordReset__input-label"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            value={name}
                            disabled
                            className="passwordReset__input"
                            id="name"
                            type="text"
                            //   {...register("name", {
                            //       required: "This field is required",
                            //   })}
                        />
                        {/* {errors?.name?.message && (
                                <span className="passwordReset__error">
                                    {errors.name.message as string}
                                </span>
                            )} */}
                    </div>
                    <div className="passwordReset__row">
                        <label
                            className="passwordReset__input-label"
                            htmlFor="email"
                        >
                            Email address
                        </label>
                        <input
                            value={email}
                            disabled
                            className="passwordReset__input"
                            id="email"
                            type="text"
                            //   {...register("email", {
                            //       required: "This field is required",
                            //       pattern: {
                            //           value: /\S+@\S+\.\S+/,
                            //           message: "Please provide a valid email",
                            //       },
                            //   })}
                        />
                        {/* {errors?.email?.message && (
                                <span className="passwordReset__error">
                                    {errors.email.message as string}
                                </span>
                            )} */}
                    </div>
                    <div className="passwordReset__row">
                        <label
                            className="passwordReset__input-label"
                            htmlFor="password"
                        >
                            New password (min 8 characters)
                        </label>
                        <input
                            className="passwordReset__input"
                            id="password"
                            type="text"
                            //   {...register("password", {
                            //       required: "This field is required",
                            //       minLength: {
                            //           value: 8,
                            //           message:
                            //               "Password needs a minimum of 8 characters",
                            //       },
                            //   })}
                        />
                        {/* {errors?.password?.message && (
                                <span className="passwordReset__error">
                                    {errors.password.message as string}
                                </span>
                            )} */}
                    </div>
                    <div className="passwordReset__row">
                        <label
                            className="passwordReset__input-label"
                            htmlFor="passwordConfirm"
                        >
                            Re-enter new password
                        </label>
                        <input
                            className="passwordReset__input"
                            id="passwordConfirm"
                            type="text"
                            //   {...register("passwordConfirm", {
                            //       required: "This field is required",
                            //       validate: (value) =>
                            //           value === getValues().password ||
                            //           "Password need to match.",
                            //   })}
                        />
                        {/* {errors?.passwordConfirm?.message && (
                                <span className="passwordReset__error">
                                    {errors.passwordConfirm.message as string}
                                </span>
                            )} */}
                    </div>
                    <div className="passwordReset__row">
                        <div className="passwordReset__button-container">
                            <button className="passwordReset__button-cancel">
                                Cancel
                            </button>
                            <button className="passwordReset__button-submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
