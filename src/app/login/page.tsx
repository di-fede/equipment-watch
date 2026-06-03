import LogoImage from "../components-start/logo-image";
import LogoText from "../components-start/logo-text";
import { signInAction } from "../_lib/actions";
import { login } from "../../services/apiAuth";
import LoginForm from "../authentication/login-form";
import QueryProvider from "../providers";

export default function Login() {
    return (
        <div className="login__page start">
            <LogoImage />
            <LogoText />
            <div className="start__center-container login__center-container">
                <QueryProvider>
                    <LoginForm />
                </QueryProvider>
            </div>

            {/* <div className="start__center-container">
                <form action={signInAction}>
                    <button className="start__buttonBox">
                        <div className="start__button">
                            <img
                                src={
                                    "https://authjs.dev/img/providers/google.svg"
                                }
                                height={22}
                                width={22}
                            />
                            <span
                                style={{ fontSize: 12, textTransform: "none" }}
                            >
                                Continue with Google
                            </span>
                        </div>
                    </button>
                </form>
            </div> */}
        </div>
    );
}
