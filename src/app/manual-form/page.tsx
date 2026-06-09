import Header from "../_components-main/header";
import LogoImage from "../_components-dash/logo-image";
import LogoText from "../_components-dash/logo-text";
import ManualForm from "./manual-form";

export default function Page() {
    return (
        <div className="page__manualForm">
            <Header />
            <ManualForm />
        </div>
    );
}
