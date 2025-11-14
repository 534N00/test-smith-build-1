import { MultipleChoiceQuestion } from "@util/test/types";



interface MultipleChoiceProps {
    question: MultipleChoiceQuestion;
    userAnswer: number | undefined; // Index of options.
    updateAnswer: (answer: any) => void;
    disabled: boolean;
}

export default function MultipleChoice({
    question,
    userAnswer,
    updateAnswer,
    disabled
}: MultipleChoiceProps) {
    return (
        <div className="w-full">
            <div className="space-y-3">
                {question.options.map((option, optionIndex) => (
                    <label
                        key={optionIndex}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <input
                            type="radio"
                            value={option}
                            checked={userAnswer === optionIndex}
                            onChange={(e) => updateAnswer(optionIndex)}
                            disabled={disabled}
                            className="w-5 h-5 text-blue-600 disabled:cursor-not-allowed"
                        />
                        <span className="text-gray-800">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}