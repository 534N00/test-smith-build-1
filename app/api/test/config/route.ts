import { NextRequest, NextResponse } from "next/server";

import { getTestFromFiles, getRecognizedFiles } from "@util/test/config/parse";



/**
 * This endpoint takes in a config and sends back test.
 * Used in the /config page when the user presses Generate Test
 * 
 * In a real app, we would validate the request "req" object to ensure it is an ok configuration.
 * If not valid, we would send a non 200 HTTP error.
 * We would then store it in a database to use for generation later.
 */
export async function POST(req: NextRequest) {
    try {
        console.log("Generating test from config...");
        
        const body = await req.json();
        const { config } = body;
        const { files, numQuestions, timeLimit, questionTypes } = config;

        console.log("Files:", files);
        console.log("Num Questions:", numQuestions);
        console.log("Time Limit:", timeLimit);
        console.log("Question Types:", questionTypes);

        const recognizedFiles = getRecognizedFiles(files);
        
        if (recognizedFiles.length !== 0) {
            console.log("Recognized files have been uploaded, using questions from test banks.");
            const test = getTestFromFiles(config, recognizedFiles);
            return NextResponse.json({ msg: "Success.", test }, { status: 200 });
        }

        console.log("All filed uploaded are unrecognized. Choosing predetermined Roman history test for now.");

        const romanFiles = [
            "15_roman-food-hannah.pptx",
            "1109-313-Roman_Culture.pdf",
            "Dr-Anitha-V-Roman-Political-System.pdf",
            "gena2112_decline_and_fall_of_roman_empire.ppt"
        ]
        const romanTest = getTestFromFiles(config, romanFiles);

        return NextResponse.json({ msg: "Success.", test: romanTest }, { status: 200 });
    } catch (err) {
        console.error("Error parsing config:", err);
        return NextResponse.json(
            { msg: "Failed to generate test", error: String(err) },
            { status: 400 }
        );
    }
}