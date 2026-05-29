"use client";

import { createContext, useContext, ReactNode } from "react";

interface ButtonContextType {
    content: string;
    link: string;
}

interface ButtonProviderProps extends ButtonContextType {
    children: ReactNode;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

function ButtonProvider({ content, link, children }: ButtonProviderProps) {
    return (
        <ButtonContext.Provider
            value={{
                content,
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
