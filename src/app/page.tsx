import FormTreadmill from "./components-home/form-treadmill";
import HomeTop from "./components-home/home-top";
import LogoBox from "./components-home/logo-box";
import Nav from "./components-home/nav";

export default function Home() {
    return (
        <div className="main">
            <LogoBox />
            <HomeTop />
            <FormTreadmill />
            <Nav />
        </div>
    );
}
