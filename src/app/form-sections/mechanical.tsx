"use client";
import { useState } from "react";

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
        <div
            id="form-mechanical"
            className="treadmill__mechanical form__element media-element"
        >
            <div className="treadmill__mechanical-heading field-heading">
                Mechanical Issue
            </div>
            <div className="formInput__grid">
                {mechItems.map((item) => (
                    <div className="form__input">
                        <input
                            type="checkbox"
                            className="checkbox"
                            id={item.htmlFor}
                            value={item.value}
                            checked={selected.includes(item.value)}
                            onChange={() => toggleSelection}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
