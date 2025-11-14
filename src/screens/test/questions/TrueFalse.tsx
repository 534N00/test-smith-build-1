import { TrueFalseQuestion } from "@util/test/types";



interface TrueFalseProps {
    question: TrueFalseQuestion;
    userAnswer: string | undefined; // Index of options.
    updateAnswer: (answer: any) => void;
    disabled: boolean;
}

export default function TrueFalse({
    question,
    userAnswer,
    updateAnswer,
    disabled
}: TrueFalseProps) {
    return (
        <div className="w-full">
            <div className="space-y-3">
                {["True", "False"].map((option, optionIndex) => (
                    <label
                        key={optionIndex}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name={`question-${question}`}
                            value={option}
                            checked={userAnswer === option.toLowerCase()}
                            onChange={(e) => updateAnswer(option.toLowerCase())}
                            className="w-5 h-5 text-blue-600 disabled:cursor-not-allowed"
                            disabled={disabled}
                        />
                        <span className="text-gray-800">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}