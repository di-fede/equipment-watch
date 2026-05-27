"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["600"],
});

const mont = montserrat.className;
export default function ManualForm() {
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [machineNumber, setMachineNumber] = useState(1);
    const [serialNumber, setSerialNumber] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {};

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className="manualForm__container">
            <div className={`manualForm__heading ${mont}`}>
                Equipment Information
            </div>

            <form className="manualForm" onSubmit={handleSubmit}>
                <label
                    className={`manualForm__label ${mont}`}
                    htmlFor="location"
                >
                    Location
                </label>
                <input
                    className="manualForm__field"
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label
                    className={`manualForm__label ${mont}`}
                    htmlFor="equipment-type"
                >
                    Equipment Type
                </label>
                <select
                    className="manualForm__field"
                    name=""
                    id="equipment-type"
                    value={type}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setType(e.target.value);
                    }}
                >
                    <option disabled value="">
                        Choose Type
                    </option>
                    <option value="treadmill">Treadmill</option>
                    <option value="eliptical">Eliptical</option>
                    <option value="stair-climber">Stair Climber</option>
                </select>
                <label
                    className={`manualForm__label ${mont}`}
                    htmlFor="index-number"
                >
                    Machine Number
                </label>
                <select
                    onChange={(e) => {
                        console.log(e.target.value);
                        setMachineNumber(Number(e.target.value));
                    }}
                    value={machineNumber}
                    className="manualForm__field"
                    id="index-number"
                >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <label
                    className={`manualForm__label ${mont}`}
                    htmlFor="serial-number"
                >
                    Serial Number
                </label>
                <input
                    className="manualForm__field"
                    id="serial-number"
                    type="text"
                    onChange={(e) => {
                        console.log(e.target.value);
                        setSerialNumber(e.target.value);
                    }}
                    value={serialNumber}
                />
                <button className={`manualForm__submitButton`}>Go</button>
            </form>
            <Link href={"/"} className="manualForm__backButton">
                Back
            </Link>
        </div>
    );
}
