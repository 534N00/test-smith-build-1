import { NextRequest, NextResponse } from "next/server";
import { Test, Question } from "@util/test/types";
import { romanFoodBank } from "@/src/banks/romanFoodBank";
import { romanCultureBank } from "@/src/banks/romanCultureBank";
import { romanDeclineBank } from "@/src/banks/romanDeclineBank";
import { romanPoliticsBank } from "@/src/banks/romanPoliticsBank";
import { designPrinciplesBank } from "@/src/banks/designPrinciplesBank";
import { graphicDesignStudentBank } from "@/src/banks/graphicDesignStudentBank";
import { typographyStudentBank } from "@/src/banks/typographyStudentBank";
import { typographyUIBank } from "@/src/banks/typographyUIBank";

const fileToBank: Record<string, any> = {
    "15_roman-food-hannah.pptx" : romanFoodBank,
    "1109-313-Roman_Culture.pdf" : romanCultureBank,
    "Dr-Anitha-V-Roman-Political-System.pdf" : romanPoliticsBank,
    "gena2112_decline_and_fall_of_roman_empire.ppt" : romanDeclineBank,
    "8 Basic design principles to help you make awesome graphics.pdf" : designPrinciplesBank,
    "Graphic-design-student.pptx" : graphicDesignStudentBank,
    "How To Use Typography In UI Design_ A Beginner's Guide.pdf" : typographyUIBank,
    "Typography-student.pptx" : typographyStudentBank
};

interface UploadedFile {
    id: string;
    name: string;
};


/**
 * 
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

        const generatedTest: Test = {
            title: "Test Title dkjafl;dsjf", // !! Static for now
            timeLimit: timeLimit*60,
            questions: []
        };

        const selectedBanks = files.map((file: UploadedFile) => fileToBank[file.name]); // Array of banks to be selected from
        const selectedQuestionTypes = Object.keys(questionTypes) // Array of question type strings to be selected from
                                            .filter((key) => (questionTypes as any)[key] === true);
        // For each question
        for (let i = 0; i < numQuestions; i++) {
            // Pick a random question type
            const thisQT = selectedQuestionTypes[Math.floor(Math.random() * selectedQuestionTypes.length)] as keyof typeof romanFoodBank; 
            // Pick a random bank
            const thisBank = selectedBanks[Math.floor(Math.random() * selectedBanks.length)];
            // From bank, pick a random question of the random type
            generatedTest.questions.push(thisBank[thisQT][Math.floor(Math.random() * thisBank[thisQT].length)] as Question);
        }

        return NextResponse.json({ msg: "Success.", test: generatedTest }, { status: 200 });
    } catch (err) {
        console.error("Error parsing config:", err);
        return NextResponse.json(
            { msg: "Failed to generate test", error: String(err) },
            { status: 400 }
        );
    }
}