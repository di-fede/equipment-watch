import FormTreadmill from "./components-home/form-treadmill";
import HomeTop from "./components-home/home-top";
import Nav from "./components-home/nav";

export default function Home() {
    return (
        <div className="main">
            <HomeTop />
            <FormTreadmill />
            <Nav />
        </div>
    );
}
