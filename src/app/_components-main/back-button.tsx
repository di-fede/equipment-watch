"use client";
import Link from "next/link";
import { useButton } from "../context/buttonContext";

export default function BackButton() {
    const { content, link } = useButton();
    return (
        <Link className="backToScan" href={link}>
            <div className="back-arrow">
                <svg id="back-button" viewBox="0 0 32 32" fill="#000">
                    <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
                </svg>
            </div>
            {content}
        </Link>
    );
}
