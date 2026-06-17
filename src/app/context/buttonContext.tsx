"use client";

import { createContext, useContext, ReactNode } from "react";

interface ButtonContextType {
    link: string;
}

interface ButtonProviderProps extends ButtonContextType {
    children: ReactNode;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

function ButtonProvider({ link, children }: ButtonProviderProps) {
    return (
        <ButtonContext.Provider
            value={{
                link,
            }}
        >
            {children}
        </ButtonContext.Provider>
    );
}
function useButton() {
    const context = useContext(ButtonContext);
    if (context === undefined)
        throw new Error("ButtonContext used outside Provider");
    return context;
}

export { ButtonProvider, useButton };
