"use client";
import { Barlow, Barlow_Condensed, Montserrat } from "next/font/google";
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

export default function Mechanical() {
    const mechItems: {
        value: string;
        label1: string;
        label2?: string;
        htmlFor: string;
    }[] = [
        {
            value: "belt",
            htmlFor: "belt",
            label1: "Belt",
            label2: "Not Moving",
        },
        {
            value: "button",
            htmlFor: "button",
            label1: "Button",
            label2: "Broken",
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
            id="form-mechanical"
            className="treadmill__mechanical form__element media-element"
        >
            <div
                className={`treadmill__mechanical-heading field-heading ${mont}`}
            >
                Mechanical Issue
            </div>
            <div className={`formInput__grid ${barl}`}>
                {mechItems.map((item) => (
                    <div key={item.value} className="formInput">
                        <input
                            type="checkbox"
                            className="checkbox"
                            id={item.htmlFor}
                            name="mechanical"
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
