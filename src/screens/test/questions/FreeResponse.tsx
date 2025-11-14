import { FreeResponseQuestion } from "@util/test/types";



interface FreeResponseProps {
    question: FreeResponseQuestion;
    userAnswer: string | undefined;
    updateAnswer: (answer: any) => void;
};

export default function FreeResponse({
    question,
    userAnswer = "",
    updateAnswer
}: FreeResponseProps) {
    return (
        <textarea
            value={userAnswer}
            onChange={(e) => updateAnswer(e.target.value)}
            className="w-full bg-white rounded-lg p-4 text-gray-800 min-h-[100px] max-h-[300px] resize-y border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your answer here..."
        />
    );
}