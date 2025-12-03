import {
    FreeResponseQuestion,
    MultipleChoiceQuestion,
    Question,
    SelectAllQuestion,
    SentenceCompletionQuestion,
    Test,
    TrueFalseQuestion
} from "../types";

import { romanFoodBank } from "@/src/banks/romanFoodBank";
import { romanCultureBank } from "@/src/banks/romanCultureBank";
import { romanDeclineBank } from "@/src/banks/romanDeclineBank";
import { romanPoliticsBank } from "@/src/banks/romanPoliticsBank";
import { designPrinciplesBank } from "@/src/banks/designPrinciplesBank";
import { graphicDesignStudentBank } from "@/src/banks/graphicDesignStudentBank";
import { typographyStudentBank } from "@/src/banks/typographyStudentBank";
import { typographyUIBank } from "@/src/banks/typographyUIBank";
import { create } from "domain";



export type KnownFileQuestions = {
    freeResponse: FreeResponseQuestion[];
    multipleChoice: MultipleChoiceQuestion[];
    selection: SelectAllQuestion[];
    sentenceCompletion: SentenceCompletionQuestion[];
    trueFalse: TrueFalseQuestion[];
}



const KNOWN_FILES_TO_QUESTIONS: Record<string, KnownFileQuestions> = {
    "15_roman-food-hannah.pptx" : romanFoodBank,
    "1109-313-Roman_Culture.pdf" : romanCultureBank,
    "Dr-Anitha-V-Roman-Political-System.pdf" : romanPoliticsBank,
    "gena2112_decline_and_fall_of_roman_empire.ppt" : romanDeclineBank,
    "8 Basic design principles to help you make awesome graphics.pdf" : designPrinciplesBank,
    "Graphic-design-student.pptx" : graphicDesignStudentBank,
    "How To Use Typography In UI Design_ A Beginner's Guide.pdf" : typographyUIBank,
    "Typography-student.pptx" : typographyStudentBank
}

const KNOWN_FILES_TO_TITLES: Record<string, string> = {
    "15_roman-food-hannah.pptx" : "Romans",
    "1109-313-Roman_Culture.pdf" : "Romans",
    "Dr-Anitha-V-Roman-Political-System.pdf" : "Romans",
    "gena2112_decline_and_fall_of_roman_empire.ppt" : "Romans",
    "8 Basic design principles to help you make awesome graphics.pdf" : "UI Design",
    "Graphic-design-student.pptx" : "UI Design",
    "How To Use Typography In UI Design_ A Beginner's Guide.pdf" : "UI Design",
    "Typography-student.pptx" : "UI Design"
}


type File = {
    id: string;
    name: string;
};

type TestConfig = {
    files: File[];
    numQuestions: number;
    timeLimit: number;
    questionTypes: {
        multipleChoice: boolean;
        freeResponse: boolean;
        trueFalse: boolean;
        sentenceCompletion: boolean;
        selection: boolean;
    }
};



export const getRecognizedFiles = (files: File[]) => {
    return files.map(file => file.name).filter(name => name in KNOWN_FILES_TO_QUESTIONS);
};

// Creates name by concatenating title themes, themes assigned to files beforehand
const createTestName = (files: string[]) => {
    const titles = new Set(files.map(fileName => KNOWN_FILES_TO_TITLES[fileName]));
    return "Test on " +Array.from(titles).join(', ');
}

// This will only be called if files is not length 0. The files are from getRecognizedFiles, so all will be recognized.
export const getTestFromFiles = (config: TestConfig, files: string[]): Test => {
    const questionsPerRecognizedFile = Math.floor(config.numQuestions / files.length);
    const remainder = config.numQuestions % files.length;

    // TODO: Find a to make titles. Probably add tags to test banks, and just string them together. E.g. "Test on Roman Culture, Typography, etc".
    const test: Test = {
        title: createTestName(files), 
        timeLimit: config.timeLimit*60,
        questions: [],
    };

    const allAvailableQuestions: Question[] = [];

    files.forEach((fileName, fileIndex) => {
        const fileQuestions = KNOWN_FILES_TO_QUESTIONS[fileName];
        const fileQuestionPool: Question[] = [];

        if (config.questionTypes.multipleChoice) {
            fileQuestionPool.push(...fileQuestions.multipleChoice);
        }
        if (config.questionTypes.freeResponse) {
            fileQuestionPool.push(...fileQuestions.freeResponse);
        }
        if (config.questionTypes.trueFalse) {
            fileQuestionPool.push(...fileQuestions.trueFalse);
        }
        if (config.questionTypes.sentenceCompletion) {
            fileQuestionPool.push(...fileQuestions.sentenceCompletion);
        }
        if (config.questionTypes.selection) {
            fileQuestionPool.push(...fileQuestions.selection);
        }

        let numQuestionsFromThisFile = questionsPerRecognizedFile;
        if (fileIndex < remainder) {
            numQuestionsFromThisFile++;
        }
        
        const shuffled = fileQuestionPool.sort(() => Math.random() - 0.5);
        allAvailableQuestions.push(...shuffled.slice(0, numQuestionsFromThisFile));
    });

    // One more shuffle to mix up order of files.
    test.questions = allAvailableQuestions.sort(() => Math.random() - 0.5);

    return test;
};