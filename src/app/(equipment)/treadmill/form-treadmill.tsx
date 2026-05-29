"use client";
import Electrical from "../../form-sections/electrical";
import Mechanical from "../../form-sections/mechanical";
import Physical from "../../form-sections/physical";

export default function FormTreadmill() {
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const mechanical = formData.getAll("mechanical") as string[];
        const electrical = formData.getAll("electrical") as string[];
        const physical = formData.getAll("physical") as string[];
        const additionalInfo = formData.get("additionalInfo") as string;

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mechanical,
                    electrical,
                    physical,
                    additionalInfo,
                }),
            });

            if (response.ok) {
                alert("Service request sent successfully!");
            } else {
                alert("Failed to send. Please try again.");
            }
        } catch (error) {
            console.error("Failed to send email:", error);
            alert("Failed to send. Please try again.");
        }
    };

    return (
        <form className="home__bottom-container" onSubmit={handleSubmit}>
            <div className="form media-scroller snaps-inline">
                <Mechanical />
                <Electrical />
                <Physical />
            </div>
            <div className="form__input-additional">
                <label className="additionalInfo__label" htmlFor="message">
                    Other/Additional Info
                </label>
                <textarea
                    className="additionalInfo"
                    id="message"
                    name="additionalInfo"
                    rows={4}
                    cols={50}
                ></textarea>
            </div>
            <button type="submit" className="submit">
                Submit
            </button>
        </form>
    );
}
