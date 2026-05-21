"use client";
import { useEffect, useState } from "react";

export default function Electrical() {
    const electItems: {
        value: string;
        label1: string;
        label2?: string;
        htmlFor: string;
    }[] = [
        { value: "power", htmlFor: "NoPower", label1: "No", label2: "power" },
        {
            value: " display",
            htmlFor: "display",
            label1: "Display",
            label2: "Malfunction",
        },
        { value: " shuts", htmlFor: "shuts", label1: "Shuts", label2: "Down" },
        {
            value: "smell",
            htmlFor: "smell",
            label1: "Burning",
            label2: "Smell",
        },
    ];

    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelection = (val: string) => {
        setSelected((prev) =>
            prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val],
        );
    };

    return (
        <div
            id="form-electrical"
            className="treadmill__mechanical form__element media-element"
        >
            <div className="treadmill__mechanical-heading field-heading">
                Electrical Issue
            </div>
            <div className="formInput__grid">
                {electItems.map((item) => (
                    <div key={item.value} className="form__input">
                        <input
                            className="checkbox"
                            type="checkbox"
                            id={item.htmlFor}
                            value={item.value}
                            checked={selected.includes(item.value)}
                            onChange={() => toggleSelection(item.value)}
                        />
                        <label
                            className={`${
                                selected.includes(item.value)
                                    ? "backBlue"
                                    : "backGrey"
                            } element__label`}
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
