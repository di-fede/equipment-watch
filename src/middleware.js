// import { auth } from "@/app/lib/auth";
// import { NextResponse } from "next/server";

// export default auth((req) => {
//     if (!req.auth) {
//         return NextResponse.redirect(new URL("/api/auth/signin", req.url));
//     }
// });

import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
    matcher: ["/treadmill", "/"],
};
