"use client";
import { Montserrat, Roboto } from "next/font/google";
import { useEffect } from "react";
import { getEquipment } from "../../services/apiequipment";
import { useQuery } from "@tanstack/react-query";

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
    // useEffect(function () {
    //     getEquipment().then((data) => console.log(data));
    // }, []);

    const {
        isLoading,
        data: equipment,
        error,
    } = useQuery({
        queryKey: ["equipment"],
        queryFn: getEquipment,
    });

    return (
        <div className={`equipment ${montserrat.className}`}>
            <div className="equipment__location-container">
                Location:{" "}
                <div className="equipment__location">Delray Beach</div>
            </div>
            <div className="equipment__equipId">
                <div className="equipment__product-type">
                    <span>Treadmill</span>
                </div>
                <div className="equipment__product-model">The ass kicker</div>
            </div>
            <div className="equipment__right">
                <div>No.</div>
                <div className={`equipment__machineNumber ${roboto.className}`}>
                    2
                </div>
            </div>
        </div>
    );
}
