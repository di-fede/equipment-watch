import Header from "../components-main/header";
import LogoImage from "../components-dash/logo-image";
import LogoText from "../components-dash/logo-text";
import ManualForm from "../components-dash/manual-form";

export default function Page() {
    return (
        <div className="page__manualForm">
            <Header />
            <ManualForm />
        </div>
    );
}
