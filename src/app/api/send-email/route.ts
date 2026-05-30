import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const body = await request.json();
        const { mechanical, electrical, physical, additionalInfo } = body;

        // Build the email HTML content
        const issuesList = [];

        if (mechanical && mechanical.length > 0) {
            issuesList.push(
                `<tr><td style="padding: 12px 16px; font-weight: 600; color: #1e40af; background: #eff6ff; border-bottom: 1px solid #e5e7eb;">Mechanical Issues</td><td style="padding: 12px 16px; background: #eff6ff; border-bottom: 1px solid #e5e7eb;">${mechanical.join(", ")}</td></tr>`
            );
        }

        if (electrical && electrical.length > 0) {
            issuesList.push(
                `<tr><td style="padding: 12px 16px; font-weight: 600; color: #1e40af; background: #fff; border-bottom: 1px solid #e5e7eb;">Electrical Issues</td><td style="padding: 12px 16px; background: #fff; border-bottom: 1px solid #e5e7eb;">${electrical.join(", ")}</td></tr>`
            );
        }

        if (physical && physical.length > 0) {
            issuesList.push(
                `<tr><td style="padding: 12px 16px; font-weight: 600; color: #1e40af; background: #eff6ff; border-bottom: 1px solid #e5e7eb;">Physical Issues</td><td style="padding: 12px 16px; background: #eff6ff; border-bottom: 1px solid #e5e7eb;">${physical.join(", ")}</td></tr>`
            );
        }

        if (additionalInfo && additionalInfo.trim() !== "") {
            issuesList.push(
                `<tr><td style="padding: 12px 16px; font-weight: 600; color: #1e40af; background: #fff; border-bottom: 1px solid #e5e7eb;">Additional Info</td><td style="padding: 12px 16px; background: #fff; border-bottom: 1px solid #e5e7eb;">${additionalInfo}</td></tr>`
            );
        }

        const htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 24px; border-radius: 12px 12px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px;">🔧 Treadmill Service Request</h1>
                <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px;">New equipment service submission</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; overflow: hidden;">
                <thead>
                    <tr>
                        <th style="padding: 12px 16px; text-align: left; background: #f8fafc; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e5e7eb;">Category</th>
                        <th style="padding: 12px 16px; text-align: left; background: #f8fafc; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e5e7eb;">Issues</th>
                    </tr>
                </thead>
                <tbody>
                    ${issuesList.length > 0 ? issuesList.join("") : '<tr><td colspan="2" style="padding: 16px; text-align: center; color: #94a3b8;">No issues reported</td></tr>'}
                </tbody>
            </table>
            <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 16px;">Sent from Equipment Watch Service App</p>
        </div>
        `;

        const { data, error } = await resend.emails.send({
            from: "Equipment Watch <onboarding@resend.dev>",
            to: ["delivered@resend.dev"],
            subject: "New Treadmill Service Request",
            html: htmlContent,
        });

        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
