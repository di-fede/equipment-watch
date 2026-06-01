import { Montserrat } from "next/font/google";
import { auth } from "../_lib/auth";

const montserrat = Montserrat({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["600"],
});

export default async function User() {
    const session = await auth();
    console.log(session);

    return (
        <div className="user__container">
            {session ? (
                <div className="user__name-container">
                    <div className={`user ${montserrat.className}`}>
                        <span>Logged in as:</span>
                        <br />
                        <span>{session.user?.name}</span>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
////// in layout ///////
