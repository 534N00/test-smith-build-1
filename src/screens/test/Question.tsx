import { useCallback } from "react";


import { Question } from "@util/test/types";

import FreeResponse from "./questions/FreeResponse";
import MultipleChoice from "./questions/MultipleChoice";
import SelectAll from "./questions/SelectAll";
import SentenceCompletion from "./questions/SentenceCompletion";
import TrueFalse from "./questions/TrueFalse";



interface TestQuestionProps {
    questionIndex: number;
    question: Question;
    userAnswers: Record<number, any>;
    handleAnswerChange: (questionIndex: number, answer: any) => void;
}

export default function TestQuestion({ questionIndex, question, userAnswers, handleAnswerChange }: TestQuestionProps) {

    const updateAnswer = useCallback((answer: any) => {
        handleAnswerChange(questionIndex, answer);
    }, [questionIndex, handleAnswerChange]);


    const renderItem = useCallback(() => {
        const userAnswer = userAnswers[questionIndex];

        switch (question.type) {
            case "free-response":
                return (
                    <FreeResponse
                        question={question}
                        userAnswer={userAnswer || ""}
                        updateAnswer={updateAnswer}
                    />
                );

            case "multiple-choice":
                return (
                    <MultipleChoice
                        question={question}
                        userAnswer={userAnswer}
                        updateAnswer={updateAnswer}
                    />
                );

            case "select-all":
                return (
                    <SelectAll
                        question={question}
                        userAnswer={userAnswer}
                        updateAnswer={updateAnswer}
                    />
                );

            case "sentence-completion":
                return (
                    <SentenceCompletion
                        question={question}
                        userAnswer={userAnswer}
                        updateAnswer={updateAnswer}
                    />
                );

            case "true-false":
                return (
                    <TrueFalse
                        question={question}
                        userAnswer={userAnswer}
                        updateAnswer={updateAnswer}
                    />
                );

            default: return <></>
        }
    }, [question, userAnswers, updateAnswer]);


    return (
        <div className="bg-gray-200 rounded-lg p-6 mb-4">
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-400 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-lg font-medium">
                    {questionIndex + 1}
                </div>
                
                <h3 className="text-lg font-medium text-gray-900">
                    {question.question}
                </h3>
            </div>

            <div className="w-full">
                {renderItem()}
            </div>
        </div>
    );
}