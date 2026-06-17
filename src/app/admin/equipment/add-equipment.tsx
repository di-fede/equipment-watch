"use client";

import { Montserrat } from "next/font/google";
import { useState } from "react";
import supabase from "@/services/supabase";
import toast from "react-hot-toast";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
const mont = montserrat.className;

export default function AddEquipment() {
    const [type, setType] = useState("");
    const [machineNumber, setMachineNumber] = useState(1);
    const [modelName, setModelName] = useState("");
    const [modelNum, setModelNum] = useState("");
    const [brand, setBrand] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function resetForm() {
        setType("");
        setMachineNumber(1);
        setModelName("");
        setModelNum("");
        setBrand("");
        setSerialNumber("");
        setErrorMessage("");
        setSuccessMessage("");
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        if (!type) {
            setErrorMessage("Please select an equipment type.");
            return;
        }

        setIsLoading(true);

        try {
            const { error } = await supabase.from("equipment").insert({
                type,
                equipNumber: machineNumber,
                modelName: modelName.trim() || null,
                modelNum: modelNum.trim() || null,
                brand: brand.trim() || null,
                serialNumber: serialNumber.trim() || null,
            });

            if (error) {
                setErrorMessage(`Failed to add equipment: ${error.message}`);
                return;
            }
            toast.success("Equipment added successfully!");
            // setSuccessMessage("Equipment added successfully!");
            resetForm();
        } catch (err) {
            setErrorMessage("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    function handleCancel(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        resetForm();
    }

    return (
        <div className={`adminForm ${mont}`}>
            <div className="adminForm__container">
                <form
                    className="adminForm__grid adminForm__create-form"
                    onSubmit={handleSubmit}
                >
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="type"
                        >
                            Type
                        </label>
                        <select
                            className="adminForm__select"
                            name=""
                            id="type"
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value);
                                setErrorMessage("");
                                setSuccessMessage("");
                            }}
                        >
                            <option disabled value="">
                                Choose Type
                            </option>
                            <option value="treadmill">Treadmill</option>
                            <option value="eliptical">Eliptical</option>
                            <option value="stair-climber">Stair Climber</option>
                        </select>
                    </div>
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="equipNumber"
                        >
                            Machine Number
                        </label>
                        <select
                            onChange={(e) => {
                                setMachineNumber(Number(e.target.value));
                                setErrorMessage("");
                                setSuccessMessage("");
                            }}
                            value={machineNumber}
                            className="adminForm__select"
                            id="equipNumber"
                        >
                            {Array.from({ length: 20 }, (_, i) => i + 1).map(
                                (num) => (
                                    <option value={num} key={num}>
                                        {num}
                                    </option>
                                ),
                            )}
                        </select>
                    </div>

                    <div className="adminForm__row">
                        <label
                            htmlFor="brand"
                            className="adminForm__input-label"
                        >
                            Brand
                        </label>
                        <input
                            value={brand}
                            onChange={(e) => {
                                setBrand(e.target.value);
                                setErrorMessage("");
                                setSuccessMessage("");
                            }}
                            type="text"
                            className="adminForm__input"
                        />
                    </div>
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="modelName"
                        >
                            Model Name
                        </label>
                        <input
                            className="adminForm__input"
                            id="modelName"
                            type="text"
                            value={modelName}
                            onChange={(e) => {
                                setModelName(e.target.value);
                                setErrorMessage("");
                                setSuccessMessage("");
                            }}
                        />
                    </div>
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="modelNum"
                        >
                            Model Number
                        </label>
                        <input
                            className="adminForm__input"
                            id="modelNum"
                            type="text"
                            value={modelNum}
                            onChange={(e) => {
                                setModelNum(e.target.value);
                                setErrorMessage("");
                                setSuccessMessage("");
                            }}
                        />
                    </div>
                    <div className="adminForm__row">
                        <label
                            className="adminForm__input-label"
                            htmlFor="serialNumber"
                        >
                            Serial Number
                        </label>
                        <input
                            className="adminForm__input"
                            id="serialNumber"
                            type="text"
                            value={serialNumber}
                            onChange={(e) => {
                                setSerialNumber(e.target.value);
                                setErrorMessage("");
                                setSuccessMessage("");
                            }}
                        />
                    </div>
                    {errorMessage && (
                        <div className="adminForm__row">
                            <div className="manualForm__error">
                                {errorMessage}
                            </div>
                        </div>
                    )}
                    {successMessage && (
                        <div className="adminForm__row">
                            <div
                                className="manualForm__success"
                                style={{ color: "green" }}
                            >
                                {successMessage}
                            </div>
                        </div>
                    )}
                    <div className="adminForm__row">
                        <div className="adminForm__button-container">
                            <button
                                className="adminForm__button-cancel"
                                type="button"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                            <button
                                className="buttonPrimary"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
