import EquipHeading from "../components-main/equip-heading";
import Header from "../components-main/header";
import Nav from "../components-main/nav";
import BackButton from "../components-main/back-button";
import { ButtonProvider } from "../context/buttonContext";
import QueryProvider from "../providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function EquipmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="main">
            <Header />
            <ButtonProvider content="Back" link="/">
                <BackButton />
            </ButtonProvider>
            <QueryProvider>
                <ReactQueryDevtools initialIsOpen={false} />
                <EquipHeading />
                {children}
            </QueryProvider>
            <Nav />
        </div>
    );
}
