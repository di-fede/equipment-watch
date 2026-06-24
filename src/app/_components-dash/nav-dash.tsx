import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { useAdmin } from "../authentication/useAdmin";
import { ButtonProvider } from "../context/buttonContext";
import BackButton from "../_components-main/back-button";
import Logout from "../authentication/logout";

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"],
});
export default function NavDash({
    showLogout,
    handleShowLogout,
}: {
    showLogout: boolean;
    handleShowLogout: () => void;
}) {
    const [scanSelected, setScanSelected] = useState(Boolean(true));
    const [usersSelected, setUsersSelected] = useState(Boolean);
    const [adminSelected, setAdminSelected] = useState(Boolean);
    const { isAdmin } = useAdmin();

    return (
        <div className="mainNav__container">
            <ButtonProvider link="/">
                <BackButton />
            </ButtonProvider>
            <div
                className={`${isAdmin ? "navDash__grid-admin" : "navDash__grid"} ${barlow.className}`}
            >
                <div className="navDash__buttonBox">
                    <Link
                        href={"/"}
                        onClick={() => {
                            setScanSelected(true);
                            setUsersSelected(false);
                            setAdminSelected(false);
                        }}
                        className={`navDash__button ${scanSelected ? "button-selected" : ""}`}
                    >
                        <div className="navDash__button-label">
                            <svg
                                id="navSvg"
                                viewBox="0 0 24 24"
                                fill={scanSelected ? "black" : "#414042"}
                            >
                                <svg
                                    id="navSvg"
                                    viewBox="0 0 24 24"
                                    fill="#414042"
                                >
                                    <path d="M13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9h-6q-.425 0-.712-.288T13 8M3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13H4q-.425 0-.712-.288T3 12m10 8v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m2-9h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2" />
                                </svg>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className="navDash__buttonBox navDash__userButtonBox">
                    <div
                        onClick={() => {
                            setUsersSelected(true);
                            setScanSelected(false);
                            setAdminSelected(false);
                            handleShowLogout();
                        }}
                        className={`navDash__button ${usersSelected ? "button-selected" : ""}`}
                    >
                        <div className="navDash__button-label">
                            <svg
                                id="navSvg"
                                viewBox="0 0 24 24"
                                fill={usersSelected ? "black" : "#414042"}
                            >
                                <path d="M21 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path>
                            </svg>
                        </div>
                    </div>
                    <Logout showLogout={showLogout} />
                </div>
                {isAdmin && (
                    <div className="navDash__buttonBox">
                        <Link
                            href={"/admin/users/create"}
                            onClick={() => {
                                setAdminSelected(true);
                                setScanSelected(false);
                                setUsersSelected(false);
                            }}
                            className={`navDash__button ${adminSelected ? "button-selected" : ""}`}
                        >
                            <div className="navDash__button-label">
                                <svg
                                    id="navSvg"
                                    viewBox="0 0 20 20"
                                    fill={adminSelected ? "black" : "#414042"}
                                >
                                    <path d="M16.783 10c0-1.049 0.646-1.875 1.617-2.443-0.176-0.584-0.407-1.145-0.692-1.672-1.089 0.285-1.97-0.141-2.711-0.883-0.741-0.74-0.968-1.621-0.683-2.711-0.527-0.285-1.088-0.518-1.672-0.691-0.568 0.97-1.595 1.615-2.642 1.615-1.048 0-2.074-0.645-2.643-1.615-0.585 0.173-1.144 0.406-1.671 0.691 0.285 1.090 0.059 1.971-0.684 2.711-0.74 0.742-1.621 1.168-2.711 0.883-0.285 0.527-0.517 1.088-0.691 1.672 0.97 0.568 1.615 1.394 1.615 2.443 0 1.047-0.645 2.074-1.615 2.643 0.175 0.584 0.406 1.144 0.691 1.672 1.090-0.285 1.971-0.059 2.711 0.682s0.969 1.623 0.684 2.711c0.527 0.285 1.087 0.518 1.672 0.693 0.568-0.973 1.595-1.617 2.643-1.617 1.047 0 2.074 0.645 2.643 1.617 0.584-0.176 1.144-0.408 1.672-0.693-0.285-1.088-0.059-1.969 0.683-2.711 0.741-0.74 1.622-1.166 2.711-0.883 0.285-0.527 0.517-1.086 0.692-1.672-0.973-0.569-1.619-1.395-1.619-2.442zM10 13.652c-2.018 0-3.653-1.635-3.653-3.652 0-2.018 1.636-3.654 3.653-3.654s3.652 1.637 3.652 3.654c0 2.018-1.634 3.652-3.652 3.652z"></path>{" "}
                                </svg>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
