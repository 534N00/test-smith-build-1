import { NextRequest, NextResponse } from "next/server";
// import { sleep } from "@util/sleep";
import { Test, Question } from "@util/test/types";
import { test1 } from "@util/test/test1";
import { romanBank } from "../../../../src/banks/romanBank";



/**
 * This endpoint takes in a config and does nothing.
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

        const historyTest: Test = {
            title: romanBank.testTitle, // !! Static for now
            timeLimit: timeLimit*60,
            questions: []
        };
        const selectedQuestionTypes = Object.keys(questionTypes).filter((key) => (questionTypes as any)[key] === true);
        for (let i = 0; i < numQuestions; i++) {
            const thisQT = selectedQuestionTypes[Math.floor(Math.random() * selectedQuestionTypes.length)] as keyof typeof romanBank; 
            historyTest.questions.push(romanBank[thisQT][Math.floor(Math.random() * romanBank[thisQT].length)] as Question);
        }

        return NextResponse.json({ msg: "Success.", test: historyTest }, { status: 200 });
    } catch (err) {
        console.error("Error parsing config:", err);
        return NextResponse.json(
            { msg: "Failed to generate test", error: String(err) },
            { status: 400 }
        );
    }
}