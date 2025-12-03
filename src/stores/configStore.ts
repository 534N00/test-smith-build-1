"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UploadedFile {
    id: string;
    name: string;
};

interface ConfigState {
    files: UploadedFile[];
    numQuestions: number;
    timeLimit: number;
    questionTypes: {
        multipleChoice: boolean;
        freeResponse: boolean;
        trueFalse: boolean;
        sentenceCompletion: boolean;
        selection: boolean;
    };
    setFiles: (files: UploadedFile[]) => void;
    setNumQuestions: (numQuestions: number) => void;
    setTimeLimit: (timeLimit: number) => void;
    setQuestionTypes: (questionTypes: {
        multipleChoice: boolean;
        freeResponse: boolean;
        trueFalse: boolean;
        sentenceCompletion: boolean;
        selection: boolean;
    }) => void;
}

export const useConfigStore = create<ConfigState>()(
    persist(
        (set) => ({
            files: [],
            numQuestions: 10,
            timeLimit: 20,
            questionTypes: {
                multipleChoice: false,
                freeResponse: false,
                trueFalse: false,
                sentenceCompletion: false,
                selection: false
            },
            setFiles: (files: UploadedFile[]) => set({ files: files }),
            setNumQuestions: (numQuestions: number) => set({ numQuestions: numQuestions }),
            setTimeLimit: (timeLimit: number) => set({ timeLimit: timeLimit }),
            setQuestionTypes: (questionTypes: {
                multipleChoice: boolean;
                freeResponse: boolean;
                trueFalse: boolean;
                sentenceCompletion: boolean;
                selection: boolean;
            }) => set({ questionTypes: questionTypes }),
        }),
        {
            name: "config-storage",
        }
    )
);