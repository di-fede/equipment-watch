"use client";
import { Barlow, Montserrat } from "next/font/google";
import { useState } from "react";

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

export default function Physical() {
    const physicItems: {
        value: string;
        label1: string;
        label2?: string;
        htmlFor: string;
    }[] = [
        {
            value: "physical-button",
            label1: "Broken",
            label2: "Button",
            htmlFor: "physical-button",
        },
        {
            value: "UI",
            label1: "Broken",
            label2: "Display",
            htmlFor: "UI",
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
    ];

    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelection = (val: string) => {
        setSelected((prev) =>
            prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val],
        );
    };
    console.log({ selected });
    return (
        <div
            id="form-physical"
            className="treadmill__physical form__element media-element"
        >
            <div className={`formInput__heading ${mont}`}>Physical Issue</div>
            <div className={`formInput__grid ${barl}`}>
                {physicItems.map((item) => (
                    <div key={item.value} className="formInpu">
                        <input
                            type="checkbox"
                            className="checkbox"
                            id={item.htmlFor}
                            name="physical"
                            value={item.value}
                            checked={selected.includes(item.value)}
                            onChange={() => toggleSelection(item.value)}
                        />
                        <label
                            className={`${selected.includes(item.value) ? "backBlue" : "backGrey"} formInput__label`}
                            htmlFor={item.htmlFor}
                        >
                            {item.label1} <br />
                            {item.label2}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
