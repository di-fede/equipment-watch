import Header from "../components-main/header";
import LogoImage from "../components-start/logo-image";
import LogoText from "../components-start/logo-text";
import ManualForm from "../components-start/manual-form";

export default function Page() {
    return (
        <div className="page__manualForm">
            <Header />
            <ManualForm />
        </div>
    );
}
