export type FreeResponseQuestion = {
    type: "free-response";
    question: string;
};

export type MultipleChoiceQuestion = {
    type: "multiple-choice";
    question: string;
    options: string[];
    answer: number; // Index of correct option.
};

export type SelectAllQuestion = {
    type: "select-all";
    question: string;
    options: string[];
    answers: number[]; // Indices of correct options.
};

export type SentenceCompletionQuestion = {
    type: "sentence-completion";
    question: string; // Will include the underscores as blanks.
};

export type TrueFalseQuestion = {
    type: "true-false";
    question: string;
    answer: "true" | "false";
};


export type Question = 
| FreeResponseQuestion
| MultipleChoiceQuestion
| SelectAllQuestion
| SentenceCompletionQuestion
| TrueFalseQuestion;


export type Test = {
    title: string;
    timeLimit: number | null; // Seconds, or null if none.
    questions: Question[];
};