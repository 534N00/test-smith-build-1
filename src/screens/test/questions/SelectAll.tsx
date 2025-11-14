import { SelectAllQuestion } from "@util/test/types";



interface SelectAllProps {
    question: SelectAllQuestion;
    userAnswer: number[] | undefined; // Indices of options.
    updateAnswer: (answer: any) => void;
    disabled: boolean;
}

export default function SelectAll({
    question,
    userAnswer,
    updateAnswer,
    disabled
}: SelectAllProps) {
    const handleCheckboxChange = (optionIndex: number) => {
        const currentAnswers = userAnswer || [];
        if (currentAnswers.includes(optionIndex)) {
            const newAnswers = currentAnswers.filter(index => index !== optionIndex);
            updateAnswer(newAnswers.length > 0 ? newAnswers : undefined);
        } else {
            updateAnswer([...currentAnswers, optionIndex]);
        }
    };


    return (
        <div className="w-full">
            <div className="space-y-3">
                {question.options.map((option, optionIndex) => (
                    <label
                        key={optionIndex}
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={userAnswer?.includes(optionIndex) || false}
                            onChange={(e) => handleCheckboxChange(optionIndex)}
                            className="w-5 h-5 text-blue-600 rounded disabled:cursor-not-allowed"
                            disabled={disabled}
                        />
                        <span className="text-gray-800">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}