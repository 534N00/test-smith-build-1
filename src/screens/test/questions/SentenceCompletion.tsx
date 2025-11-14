import { SentenceCompletionQuestion } from "@util/test/types";



interface SentenceCompletionProps {
    question: SentenceCompletionQuestion;
    userAnswer: string | undefined;
    updateAnswer: (answer: any) => void;
    disabled: boolean;
};

export default function SentenceCompletion({
    question,
    userAnswer = "",
    updateAnswer,
    disabled
}: SentenceCompletionProps) {
    return (
        <input
            type="text"
            value={userAnswer}
            onChange={(e) => updateAnswer(e.target.value.trim())}
            className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
            placeholder="Type your answer here..."
            disabled={disabled}
        />
    );
}