"use client";
import { Montserrat } from "next/font/google";
import Electrical from "../../_form-sections/electrical";
import Mechanical from "../../_form-sections/mechanical";
import Physical from "../../_form-sections/physical";
import TreadmillIssue from "./treadmill-issue";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});

const mont = montserrat.className;

export default function FormTreadmill() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <form className="equipment__bottom-container" onSubmit={handleSubmit}>
            <div className="form media-scroller snaps-inline">
                {/* <Mechanical /> */}
                {/* <Electrical /> */}
                {/* <Physical /> */}
                <TreadmillIssue />
            </div>
            <div className="form__input-additional">
                <label
                    className={`additionalInfo__label ${mont}`}
                    htmlFor="message"
                >
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
            <button type="submit" className={`submit ${mont}`}>
                Submit
            </button>
        </form>
    );
}
