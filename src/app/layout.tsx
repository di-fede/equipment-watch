import type { Metadata, Viewport } from "next";
import "./globals.css";
import User from "./_components-main/user";
import QueryProvider from "./providers";
import ProtectedRoute from "./ui/protectedRoute";
import { EquipmentProvider } from "./context/equipmentContext";
import toast, { Toaster } from "react-hot-toast";
import BottomNavContainer from "./_components-dash/bottomNavContainer";

// const roboto = Roboto({
//     style: ["normal"],
//     subsets: ["latin"],
//     weight: ["400", "500", "600"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Equipment Watch",
    description: "Equipment inspection and monitoring app",
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Equipment Watch",
    },
    other: {
        "mobile-web-app-capable": "yes",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
    themeColor: "#000000",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <QueryProvider>
                    <EquipmentProvider>
                        <User />
                        <ProtectedRoute>{children}</ProtectedRoute>
                        <BottomNavContainer />
                    </EquipmentProvider>
                </QueryProvider>
                <Toaster
                    position="top-center"
                    gutter={12}
                    containerStyle={{
                        margin: "8px",
                    }}
                    toastOptions={{
                        success: {
                            duration: 3000,
                        },
                        error: {
                            duration: 5000,
                        },
                        style: {
                            fontSize: "16px",
                            maxWidth: "500px",
                            padding: "16px 24px",
                        },
                    }}
                />
            </body>
        </html>
    );
}
