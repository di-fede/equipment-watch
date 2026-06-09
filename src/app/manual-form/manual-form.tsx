"use client";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonProvider } from "../context/buttonContext";
import BackButton from "../_components-main/back-button";
import { useEquipment } from "../context/equipmentContext";
import supabase from "../../services/supabase";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["600"],
});

const mont = montserrat.className;
export default function ManualForm() {
    const [type, setType] = useState("");
    const [machineNumber, setMachineNumber] = useState(1);
    const [serialNumber, setSerialNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();
    const { setEquipment } = useEquipment();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrorMessage("");
        setIsLoading(true);

        try {
            let query;

            if (serialNumber.trim()) {
                // Search by serial number
                query = supabase
                    .from("equipment")
                    .select("*")
                    .eq("serialNumber", serialNumber.trim())
                    .single();
            } else if (type) {
                // Search by type + machine number
                query = supabase
                    .from("equipment")
                    .select("*")
                    .eq("type", type)
                    .eq("equipNumber", machineNumber)
                    .single();
            } else {
                setErrorMessage(
                    "Please select an equipment type or enter a serial number.",
                );
                setIsLoading(false);
                return;
            }

            const { data: equipment, error } = await query;

            if (error || !equipment) {
                const searchMethod = serialNumber.trim()
                    ? `serial number "${serialNumber.trim()}"`
                    : `${type} #${machineNumber}`;
                setErrorMessage(
                    `No equipment found for ${searchMethod}. Please check and try again.`,
                );
                setIsLoading(false);
                return;
            }

            // Store equipment data in context
            setEquipment({
                type: equipment.type,
                brand: equipment.brand,
                location: equipment.location,
                serialNumber: equipment.serialNumber,
                modelName: equipment.modelName,
                equipNumber: equipment.equipNumber,
                modelNum: equipment.modelNum,
            });

            // Route based on equipment type
            const equipType = equipment.type?.toLowerCase();
            if (equipType === "treadmill") {
                router.push("/treadmill");
            } else {
                setErrorMessage(
                    `Equipment type "${equipment.type}" is not yet supported. Only treadmill forms are available.`,
                );
                setIsLoading(false);
            }
        } catch (err) {
            setErrorMessage("Failed to look up equipment. Please try again.");
            setIsLoading(false);
        }
    }

    return (
        <div className="manualForm__container">
            <div className={`manualForm__heading ${mont}`}>
                Equipment Information
            </div>

            <form className="manualForm" onSubmit={handleSubmit}>
                {/* <label
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
                /> */}
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
                        setType(e.target.value);
                        setErrorMessage("");
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
                        setMachineNumber(Number(e.target.value));
                        setErrorMessage("");
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
                <div className="or">
                    <span>OR</span>
                </div>
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
                        setSerialNumber(e.target.value);
                        setErrorMessage("");
                    }}
                    value={serialNumber}
                />
                {errorMessage && (
                    <div className="manualForm__error">{errorMessage}</div>
                )}
                <button
                    className="manualForm__submitButton"
                    disabled={isLoading}
                >
                    {isLoading ? "Looking up..." : "Go"}
                </button>
            </form>
        </div>
    );
}
