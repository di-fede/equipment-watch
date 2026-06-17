import Header from "../_components-main/header";
import LogoImage from "../_components-dash/logo-image";
import LogoText from "../_components-dash/logo-text";
import ManualForm from "./manual-form";
import DashHeader from "../_components-dash/header-dash";

export default function Page() {
    return (
        <div className="dash__grid">
            <DashHeader />
            <ManualForm />
        </div>
    );
}
