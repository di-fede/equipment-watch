import LogoImage from "../components-start/logo-image";
import LogoText from "../components-start/logo-text";
import LoginForm from "../authentication/login-form";

export default function Login() {
    return (
        <div className="login__page start">
            <LogoImage />
            <LogoText />
            <div className="start__center-container login__center-container">
                <LoginForm />
            </div>
        </div>
    );
}
