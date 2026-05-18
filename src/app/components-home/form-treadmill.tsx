import Electrical from "../form-sections/electrical";
import Mechanical from "../form-sections/mechanical";
import Physical from "../form-sections/physical";

export default function FormTreadmill() {
    return (
        <form className="home__bottom-container">
            <div className="form media-scroller snaps-inline">
                <Mechanical />
                <Electrical />
                <Physical />
            </div>
        </form>
    );
}
