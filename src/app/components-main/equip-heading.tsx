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
    if (isLoading) return <Spinner />;

    return (
        <div className={`top ${montserrat.className}`}>
            <div className="top__location-container">
                Location: <div className="top__location">Delray Beach</div>
            </div>
            <div className="top__equipId">
                <div className="top__product-type">
                    <span>Treadmill</span>
                </div>
                <div className="top__product-model">The ass kicker</div>
            </div>
            <div className="top__right">
                <div>No.</div>
                <div className={`top__machineNumber ${roboto.className}`}>
                    2
                </div>
            </div>
        </div>
    );
}
