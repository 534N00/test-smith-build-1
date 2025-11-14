import { FreeResponseQuestion } from "@util/test/types";



interface FreeResponseProps {
    question: FreeResponseQuestion;
    userAnswer: string | undefined;
    updateAnswer: (answer: any) => void;
    disabled: boolean;
};

export default function FreeResponse({
    question,
    userAnswer = "",
    updateAnswer,
    disabled
}: FreeResponseProps) {
    return (
        <textarea
            value={userAnswer}
            onChange={(e) => updateAnswer(e.target.value)}
            className="w-full bg-white rounded-lg p-4 text-gray-800 min-h-[100px] max-h-[300px] resize-y border-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
            placeholder="Type your answer here..."
            disabled={disabled}
        />
    );
}