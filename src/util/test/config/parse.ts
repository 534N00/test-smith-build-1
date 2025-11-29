import { romanBank } from "@/src/banks/knownFiles/roman";

import {
    FreeResponseQuestion,
    MultipleChoiceQuestion,
    Question,
    SelectAllQuestion,
    SentenceCompletionQuestion,
    Test,
    TrueFalseQuestion
} from "../types";



export type KnownFileQuestions = {
    freeResponse: FreeResponseQuestion[];
    multipleChoice: MultipleChoiceQuestion[];
    selectAll: SelectAllQuestion[];
    sentenceCompletion: SentenceCompletionQuestion[];
    trueFalse: TrueFalseQuestion[];
}



const KNOWN_FILES_TO_QUESTIONS: Record<string, KnownFileQuestions> = {
    "Roman Lecture 5.ppt": romanBank,
    // "Action-Words.pdf": // ...
    // ...
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



// This will only be called if files is not length 0. The files are from getRecognizedFiles, so all will be recognized.
export const getQuestionsFromFiles = (config: TestConfig, files: string[]): Test => {
    const questionsPerRecognizedFile = Math.floor(config.numQuestions / files.length);
    const remainder = config.numQuestions % files.length;

    const test: Test = {
        title: 'Test 1', // TODO: Find a to make titles. Probably add tags to test banks, and just string them together. E.g. "Test on Roman Culture, Typography, etc".
        timeLimit: config.timeLimit,
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
            fileQuestionPool.push(...fileQuestions.selectAll);
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