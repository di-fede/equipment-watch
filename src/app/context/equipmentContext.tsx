"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface EquipmentData {
    type: string;
    brand: string;
    location: string;
    serialNumber: string;
    modelName: string;
    equipNumber: number;
    modelNum: string;
}

interface EquipmentContextType {
    equipment: EquipmentData | null;
    setEquipment: (data: EquipmentData | null) => void;
    clearEquipment: () => void;
}

interface EquipmentProviderProps {
    children: ReactNode;
}

const EquipmentContext = createContext<EquipmentContextType | undefined>(
    undefined,
);

function EquipmentProvider({ children }: EquipmentProviderProps) {
    const [equipment, setEquipment] = useState<EquipmentData | null>(null);

    const clearEquipment = () => setEquipment(null);

    return (
        <EquipmentContext.Provider
            value={{
                equipment,
                setEquipment,
                clearEquipment,
            }}
        >
            {children}
        </EquipmentContext.Provider>
    );
}

function useEquipment() {
    const context = useContext(EquipmentContext);
    if (context === undefined)
        throw new Error("EquipmentContext used outside Provider");
    return context;
}

export { EquipmentProvider, useEquipment };
