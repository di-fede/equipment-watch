import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["600"],
});

// TODO: Get user session from Supabase
export default async function User() {
    return (
        <div className="user__container">
            <div className="user__name"></div>
            {/* TODO: Display logged-in user info from Supabase */}
        </div>
    );
}
////// in layout ///////
