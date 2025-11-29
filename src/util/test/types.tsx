export type FreeResponseQuestion = {
    type: "free-response";
    question: string;
    correct: boolean; // Hardcoding if the user got this question correct, since we cannot dynamically check without AI.
    aiResponse: string; // Again, hardcoded.
};

export type MultipleChoiceQuestion = {
    type: "multiple-choice";
    question: string;
    options: string[];
    answer: number; // Index of correct option.
    aiResponses: string[]; // Responses the AI gives for each choice of the user.
};

export type SelectAllQuestion = {
    type: "select-all";
    question: string;
    options: string[];
    answers: number[]; // Indices of correct options.
    aiResponses: string[]; // Responses the AI gives for each choice of the user.
};

export type SentenceCompletionQuestion = {
    type: "sentence-completion";
    question: string; // Will include the underscores as blanks.
    answer: string;
    aiResponse: string;
};

export type TrueFalseQuestion = {
    type: "true-false";
    question: string;
    answer: "true" | "false";
    aiResponse: string;
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



// Not the test itself. Used for grabbing questions from config to make a test.
export type TestBank = {
    topic: string;
    freeResponse: FreeResponseQuestion[];
    multipleChoice: MultipleChoiceQuestion[];
    selectAll: SelectAllQuestion[];
    sentenceCompletion: SentenceCompletionQuestion [];
    trueFalse: TrueFalseQuestion[];
}