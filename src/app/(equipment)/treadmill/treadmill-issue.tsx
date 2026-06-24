"use client";
import { Barlow, Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const barlow = Barlow({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});

const barl = barlow.className;
const mont = montserrat.className;

export default function TreadmillIssue() {
    const issueItems: {
        value: string;
        label1: string;
        label2?: string;
        htmlFor: string;
    }[] = [
        { value: "power", htmlFor: "NoPower", label1: "No", label2: "power" },
        {
            value: " display-malfunction",
            htmlFor: "display-malfunction",
            label1: "Display",
            label2: "Malfunction",
        },
        {
            value: "phone-charger",
            htmlFor: "phone-charger",
            label1: "Phone Charger",
            label2: "Not Functioning",
        },
        { value: " shuts", htmlFor: "shuts", label1: "Shuts", label2: "Down" },
        {
            value: "burning-smell",
            htmlFor: "burning-smell",
            label1: "Burning",
            label2: "Smell",
        },
        {
            value: "physical-button",
            label1: "Broken",
            label2: "Button",
            htmlFor: "physical-button",
        },
        {
            value: "display-damaged",
            label1: "Damaged",
            label2: "Display",
            htmlFor: "display-damaged",
        },
        {
            value: "handle",
            label1: "Broken",
            label2: "Handle",
            htmlFor: "handle",
        },
        {
            value: "powerCord",
            label1: "Damaged",
            label2: "Power Cord",
            htmlFor: "powerCord",
        },
        {
            value: "belt",
            htmlFor: "belt",
            label1: "Belt",
            label2: "Not Moving",
        },
    ];

    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelection = (val: string) => {
        setSelected((prev) =>
            prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val],
        );
    };

    return (
        <div id="form-electrical" className=" form__element media-element">
            {/* <div className={`formInput__heading ${mont}`}>Treadmill Issue</div> */}
            <div className={`formInput__grid ${barl}`}>
                {issueItems.map((item) => (
                    <div key={item.value} className="formInput">
                        <input
                            className="checkbox"
                            type="checkbox"
                            id={item.htmlFor}
                            name="electrical"
                            value={item.value}
                            checked={selected.includes(item.value)}
                            onChange={() => toggleSelection(item.value)}
                        />
                        <label
                            className={`${
                                selected.includes(item.value)
                                    ? "backBlue"
                                    : "backGrey"
                            } formInput__label`}
                            htmlFor={item.htmlFor}
                        >
                            {item.label1}
                            <br />
                            {item.label2}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
