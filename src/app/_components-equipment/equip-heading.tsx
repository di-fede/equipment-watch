"use client";
import { Montserrat, Roboto } from "next/font/google";
import { useEquipment } from "../context/equipmentContext";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
const roboto = Roboto({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});

export default function EquipHeading() {
    const { equipment } = useEquipment();

    return (
        <div className={`equipment__details ${montserrat.className}`}>
            {/* <div className="equipment__location-container">
                Location :{" "}
                <div className="equipment__location">
                    {equipment?.location ?? "—"}
                </div>
            </div> */}
            <div className="equipment__equipId">
                <div className="equipment__product-type">
                    <span>{equipment?.type ?? "—"} :</span>
                </div>
                <div className="equipment__product-model">
                    {equipment?.modelName ?? "—"}
                </div>
            </div>
            <div className="equipment__right">
                <div>No.</div>
                <div className={`equipment__machineNumber ${roboto.className}`}>
                    {equipment?.equipNumber ?? "—"}
                </div>
            </div>
        </div>
    );
}
