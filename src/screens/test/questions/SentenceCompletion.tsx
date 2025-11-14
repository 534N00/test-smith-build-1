import { SentenceCompletionQuestion } from "@util/test/types";



interface SentenceCompletionProps {
    question: SentenceCompletionQuestion;
    userAnswer: string | undefined;
    updateAnswer: (answer: any) => void;
};

export default function SentenceCompletion({
    question,
    userAnswer = "",
    updateAnswer
}: SentenceCompletionProps) {
    return (
        <input
            type="text"
            value={userAnswer}
            onChange={(e) => updateAnswer(e.target.value.trim())}
            className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your answer here..."
        />
    );
}