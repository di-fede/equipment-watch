import LogoImage from "../_components-dash/logo-image";
import LogoText from "../_components-dash/logo-text";
import LoginForm from "../authentication/login-form";
import HeaderDash from "../_components-main/header";

export default function Login() {
    return (
        <div className="dash__grid">
            <LoginForm />
        </div>
    );
}
