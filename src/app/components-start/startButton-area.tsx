import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";

const barlow = Barlow_Condensed({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["600"],
});

export default async function ButtonArea() {

    return (
        <div className="start__center-container">
            <div className={`start__button-container ${barlow.className} `}>
                <Link href={"/treadmill"} className="start__buttonBox">
                    <div className="start__button">Scan Label</div>
                </Link>
                <Link href={"/manual-form"} className="start__buttonBox">
                    <div className="start__button">Enter Manually</div>
                </Link>
            </div>
        </div>
    );
}

// "use client";
// import { Barlow_Condensed } from "next/font/google";
// import Link from "next/link";

// const barlow = Barlow_Condensed({
//     style: ["normal"],
//     subsets: ["latin"],
//     weight: ["600"],
// });

// function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
//     e.currentTarget.classList.add("hovClick");
// }

// function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
//     e.currentTarget.classList.remove("hovClick");
// }

// export default function ButtonArea() {
//     return (
//         <div className="start__center-container">
//             <div className={`start__button-container ${barlow.className} `}>
//                 <div
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     className="start__buttonBox"
//                 >
//                     <Link href={"/treadmill"} className="start__button">
//                         Scan Label
//                     </Link>
//                 </div>
//                 <div
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     className="start__buttonBox"
//                 >
//                     <Link href={"/manual-form"} className="start__button">
//                         Enter Manually
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }
