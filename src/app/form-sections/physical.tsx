"use client";
import { useState } from "react";

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
            <div className="treadmill__physical-heading field-heading">
                Treadmill Physical
            </div>
            <div className="formInput__grid">
                {physicItems.map((item) => (
                    <div key={item.value} className="form-input">
                        <input
                            type="checkbox"
                            className="checkbox"
                            id={item.htmlFor}
                            value={item.value}
                            checked={selected.includes(item.value)}
                            onChange={() => toggleSelection(item.value)}
                        />
                        <label
                            className={`${selected.includes(item.value) ? "backBlue" : "backGrey"} element__label`}
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

//     <div className="form__input">
//           <input type="radio" id="button" value={"button"} />
//           <label htmlFor="button">Broken Button</label>
//       </div>
//       <div className="form__input">
//           <input type="radio" id="display" value={"display"} />
//           <label htmlFor="display">Broken Display</label>
//       </div>
//       <div className="form__input">
//           <input type="radio" id="handle" value={"handle"} />
//           <label htmlFor="handle">Broken Handle</label>
//       </div>
//       <div className="form__input">
//           <input type="radio" id="powerCord" value={"powerCord"} />
//           <label htmlFor="powerCord">Damaged Power Cord</label>
//       </div>
