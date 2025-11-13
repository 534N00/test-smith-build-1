export type MultipleChoiceQuestion = {
    type: "multiple-choice";
    question: string;
    options: string[];
    answers: string[];
};

export type FreeResponseQuestion = {
    type: "free-response";
    question: string;
};

export type TrueFalseQuestion = {
    type: "true-false";
    question: string;
    answer: "true" | "false";
};

export type SentenceCompletionQuuesstion = {
    type: "sentence-completion";
    question: string; // Will include the underscores as blanks.
};

export type SelectionQuestion = {
    type: "selection";
    question: string;
    options: string[];
    answers: number[];
};

export type Question = MultipleChoiceQuestion
| FreeResponseQuestion
| TrueFalseQuestion
| SentenceCompletionQuuesstion
| SelectionQuestion;


export type Test = {
    title: string;
    timeLimit: number | null; // Seconds, or null if none.
    questions: Question[];
};