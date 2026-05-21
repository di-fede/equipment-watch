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
            <div className="form__input-additional">
                <label className="additional-label" htmlFor="message">
                    Other/Additional Info
                </label>
                <textarea
                    className="additionalInfo"
                    id="message"
                    rows={4}
                    cols={50}
                ></textarea>
            </div>
            <button className="submit">Submit</button>
        </form>
    );
}
