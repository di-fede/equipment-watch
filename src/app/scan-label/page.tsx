"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Barlow_Condensed, Montserrat } from "next/font/google";
import { useEquipment } from "../context/equipmentContext";
import supabase from "../../services/supabase";
import Header from "../_components-main/header";
import DashHeader from "../_components-dash/header-dash";
import BackButton from "../_components-main/back-button";
import { ButtonProvider } from "../context/buttonContext";
import BottomNavContainer from "../_components-dash/bottomNavContainer";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400", "600"],
});

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400", "600"],
});

type ScanState = "capture" | "processing" | "result" | "error";

interface ScanResult {
    model: string | null;
    serial: string | null;
}

export default function ScanLabelPage() {
    const [state, setState] = useState<ScanState>("capture");
    const [preview, setPreview] = useState<string | null>(null);
    const [result, setResult] = useState<ScanResult | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const { setEquipment } = useEquipment();

    const handleCapture = () => {
        fileInputRef.current?.click();
    };

    // Compress image to reduce payload size — phone cameras produce very large files
    const compressImage = (
        dataUrl: string,
        maxWidth = 1500,
    ): Promise<string> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                let { width, height } = img;

                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d")!;
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL("image/jpeg", 0.8));
            };
            img.src = dataUrl;
        });
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Create preview
        const reader = new FileReader();
        reader.onloadend = async () => {
            const rawBase64 = reader.result as string;

            // Compress to avoid exceeding API payload limits
            const compressed = await compressImage(rawBase64);
            setPreview(compressed);
            setState("processing");

            try {
                // Send to API
                const response = await fetch("/api/scan-label", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ image: compressed }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Failed to scan label");
                }

                if (!data.model && !data.serial) {
                    throw new Error(
                        "Could not read the label. Please try again with a clearer photo.",
                    );
                }

                setResult({ model: data.model, serial: data.serial });
                setState("result");
            } catch (err) {
                setErrorMessage(
                    err instanceof Error ? err.message : "Something went wrong",
                );
                setState("error");
            }
        };
        reader.readAsDataURL(file);
    };

    const handleConfirm = async () => {
        if (!result?.serial) {
            setErrorMessage("No serial number was detected. Please try again.");
            setState("error");
            return;
        }

        setState("processing");

        try {
            // Look up equipment in Supabase by serial number
            const { data: equipment, error } = await supabase
                .from("equipment")
                .select("*")
                .eq("serialNumber", result.serial)
                .single();

            if (error || !equipment) {
                setErrorMessage(
                    `No equipment found with serial number "${result.serial}". Please try again or enter manually.`,
                );
                setState("error");
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
                setState("error");
            }
        } catch (err) {
            setErrorMessage("Failed to look up equipment. Please try again.");
            setState("error");
        }
    };

    const handleRetry = () => {
        setState("capture");
        setPreview(null);
        setResult(null);
        setErrorMessage("");
        // Reset the file input so the same file can be re-selected
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleManual = () => {
        router.push("/manual-form");
    };

    return (
        <div className="scan-page dash__grid">
            <DashHeader />

            <div className={`scan-page__content ${montserrat.className}`}>
                {/* CAPTURE STATE */}
                {state === "capture" && (
                    <div className="scan-page__capture">
                        <div className="scan-page__viewfinder">
                            <div className="scan-page__corner scan-page__corner--tl" />
                            <div className="scan-page__corner scan-page__corner--tr" />
                            <div className="scan-page__corner scan-page__corner--bl" />
                            <div className="scan-page__corner scan-page__corner--br" />
                            <div className="scan-page__instruction">
                                <svg
                                    className="scan-page__camera-icon"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                    <circle cx="12" cy="13" r="4" />
                                </svg>
                                <p>
                                    Position the equipment label within the
                                    frame
                                </p>
                            </div>
                        </div>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            capture="environment"
                            onChange={handleFileChange}
                            className="scan-page__file-input"
                            id="label-capture-input"
                        />

                        <button
                            onClick={handleCapture}
                            className={`scan-page__capture-btn ${barlow.className}`}
                            id="take-photo-btn"
                        >
                            <span className="scan-page__capture-btn-ring" />
                            Take Photo
                        </button>
                    </div>
                )}

                {/* PROCESSING STATE */}
                {state === "processing" && (
                    <div className="scan-page__processing">
                        {preview && (
                            <div className="scan-page__preview-container">
                                <img
                                    src={preview}
                                    alt="Captured label"
                                    className="scan-page__preview-image"
                                />
                                <div className="scan-page__scan-line" />
                                <div className="scan-page__scan-overlay" />
                            </div>
                        )}
                        <div className="scan-page__processing-text">
                            <div className="scan-page__spinner" />
                            <p className={barlow.className}>
                                Analyzing label...
                            </p>
                        </div>
                    </div>
                )}

                {/* RESULT STATE */}
                {state === "result" && result && (
                    <div className="scan-page__result">
                        {preview && (
                            <img
                                src={preview}
                                alt="Scanned label"
                                className="scan-page__result-image"
                            />
                        )}
                        <div className="scan-page__result-card">
                            <h2 className="scan-page__result-title">
                                Label Detected
                            </h2>
                            <div className="scan-page__result-fields">
                                <div className="scan-page__result-field">
                                    <span className="scan-page__result-label">
                                        Model No.
                                    </span>
                                    <span
                                        className={`scan-page__result-value ${barlow.className}`}
                                    >
                                        {result.model ?? "Not detected"}
                                    </span>
                                </div>
                                <div className="scan-page__result-field">
                                    <span className="scan-page__result-label">
                                        Serial No./Date Code
                                    </span>
                                    <span
                                        className={`scan-page__result-value ${barlow.className}`}
                                    >
                                        {result.serial ?? "Not detected"}
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`scan-page__result-actions ${barlow.className}`}
                            >
                                <button
                                    onClick={handleConfirm}
                                    className="scan-page__confirm-btn"
                                    id="confirm-scan-btn"
                                >
                                    Confirm &amp; Continue
                                </button>
                                <button
                                    onClick={handleRetry}
                                    className="scan-page__retry-btn"
                                    id="retry-scan-btn"
                                >
                                    Retake Photo
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* ERROR STATE */}
                {state === "error" && (
                    <div className="scan-page__error">
                        <div className="scan-page__error-card">
                            <div className="scan-page__error-icon">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                            </div>
                            <p className="scan-page__error-message">
                                {errorMessage}
                            </p>
                            <div
                                className={`scan-page__error-actions ${barlow.className}`}
                            >
                                <button
                                    onClick={handleRetry}
                                    className="scan-page__confirm-btn"
                                    id="try-again-btn"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={handleManual}
                                    className="scan-page__retry-btn"
                                    id="enter-manually-btn"
                                >
                                    Enter Manually
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
