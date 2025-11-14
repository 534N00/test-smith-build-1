import { MultipleChoiceQuestion } from "@util/test/types";



interface MultipleChoiceProps {
    question: MultipleChoiceQuestion;
    userAnswer: number | undefined; // Index of options.
    updateAnswer: (answer: any) => void;
}

export default function MultipleChoice({
    question,
    userAnswer,
    updateAnswer
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
                            name={`question-${question}`}
                            value={option}
                            checked={userAnswer === optionIndex}
                            onChange={(e) => updateAnswer(optionIndex)}
                            className="w-5 h-5 text-blue-600"
                        />
                        <span className="text-gray-800">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}