import { Test } from "./types";



export const test1: Test = {
    title: "French History Test",
    timeLimit: 1200, // should be dymanic from preferences
    questions: [
        {
            type: "free-response",
            question: "This is a free response question",
            correct: true,
            aiResponse: "This is ai response for correct"
        },
        {
            type: "multiple-choice",
            question: "MC question",
            options: ["answer 1", "answer 2", "answer 3", "answer 4"],
            answer: 1,
            aiResponses: ["wrong", "right", "wrong", "wrong"]
        },
        {
            type: "free-response",
            question: "This is another free response question",
            correct: false,
            aiResponse: "This is ai response for incorrect"
        },
        {
            type: "select-all",
            question: "select all question",
            options: ["answer 1", "answer 2", "answer 3", "answer 4"],
            answers: [1, 3],
            aiResponses: ["wrong", "right", "wrong", "correct"]
        },
        {
            type: "sentence-completion",
            question: "Complete the sentence: the fox ____ over the dog yesterday.",
            answer: "jumped",
            aiResponse: "The correct answer is jumped. It is past tense because of 'yesetrday'."
        },
        {
            type: "true-false",
            question: "True-False question.",
            answer: "true",
            aiResponse: "AI response."
        }
    ]
};

export const historyTest: Test = {
    title: "French History Test",
    timeLimit: 0, // TODO: dynamic
    questions: []
};

