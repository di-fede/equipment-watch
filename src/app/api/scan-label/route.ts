import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "OPENAI_API_KEY is not configured" },
                { status: 500 },
            );
        }

        const openai = new OpenAI({ apiKey });

        const body = await request.json();
        const { image } = body;

        if (!image) {
            return NextResponse.json(
                { error: "No image provided" },
                { status: 400 },
            );
        }

        // Ensure the image has a proper data URL prefix
        const imageUrl = image.startsWith("data:")
            ? image
            : `data:image/jpeg;base64,${image}`;

        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: `You are reading a fitness equipment label. Extract the model number and serial number.

The label has two key fields:
1. "Model No." — the text on one line, with the actual model number value on the line below it.
2. "Serial No./Date Code" — the text on one line, with the actual serial number value on the line below it.

Return ONLY valid JSON in this exact format, with no other text or explanation:
{ "model": "...", "serial": "..." }

If you cannot clearly read either value, use null for that field.`,
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: imageUrl,
                                detail: "high",
                            },
                        },
                    ],
                },
            ],
            max_tokens: 200,
            temperature: 0,
        });

        const content = response.choices[0]?.message?.content;
        if (!content) {
            return NextResponse.json(
                { error: "No response from AI" },
                { status: 500 },
            );
        }

        // Parse the JSON from the AI response — handle markdown code blocks
        let cleaned = content.trim();
        if (cleaned.startsWith("```")) {
            cleaned = cleaned
                .replace(/^```(?:json)?\s*/, "")
                .replace(/\s*```$/, "");
        }

        let parsed;
        try {
            parsed = JSON.parse(cleaned);
        } catch {
            return NextResponse.json(
                {
                    error: "Could not parse AI response",
                    raw: content,
                },
                { status: 422 },
            );
        }

        return NextResponse.json({
            model: parsed.model ?? null,
            serial: parsed.serial ?? null,
        });
    } catch (error: unknown) {
        console.error("Scan label error:", error);

        // Return the actual error message for debugging
        const message =
            error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { error: `Failed to process image: ${message}` },
            { status: 500 },
        );
    }
}

