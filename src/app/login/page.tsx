import LogoImage from "../components-dash/logo-image";
import LogoText from "../components-dash/logo-text";
import LoginForm from "../authentication/login-form";
import HeaderDash from "../components-dash/header-dash";

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
