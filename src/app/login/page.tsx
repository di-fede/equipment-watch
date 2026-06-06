import LogoImage from "../_components-dash/logo-image";
import LogoText from "../_components-dash/logo-text";
import LoginForm from "../authentication/login-form";
import HeaderDash from "../_components-dash/header-dash";

export default function Login() {
    return (
        <div className="login__page start">
            <HeaderDash />{" "}
            <div className="start__center-container login__center-container">
                <LoginForm />
            </div>
        </div>
    );
}
