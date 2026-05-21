import { Roboto } from "next/font/google";

const roboto = Roboto({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["300"],
});
export default function HomeTop() {
    return (
        <div className="top">
            <div className={`tracker__title ${roboto.className}`}>
                Equipment Tracker
            </div>
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
                <div className="top__machineNumber">2</div>
            </div>
        </div>
    );
}
