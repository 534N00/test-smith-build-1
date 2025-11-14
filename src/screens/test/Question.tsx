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
    review: boolean;
}

export default function TestQuestion({
    questionIndex,
    question,
    userAnswers,
    handleAnswerChange,
    review
}: TestQuestionProps) {
    const updateAnswer = useCallback((answer: any) => {
        handleAnswerChange(questionIndex, answer);
    }, [questionIndex, handleAnswerChange]);

    const isCorrect = isCorrectAnswer(question, userAnswers[questionIndex]);
    const bgColor = review ? (isCorrect ? "bg-green-400" : "bg-red-400" ) : "bg-gray-400";

    const renderItem = useCallback(() => {
        const userAnswer = userAnswers[questionIndex];

        switch (question.type) {
            case "free-response":
                return (
                    <FreeResponse
                        question={question}
                        userAnswer={userAnswer || ""}
                        updateAnswer={updateAnswer}
                        disabled={review}
                    />
                );

            case "multiple-choice":
                return (
                    <MultipleChoice
                        question={question}
                        userAnswer={userAnswer}
                        updateAnswer={updateAnswer}
                        disabled={review}
                    />
                );

            case "select-all":
                return (
                    <SelectAll
                        question={question}
                        userAnswer={userAnswer}
                        updateAnswer={updateAnswer}
                        disabled={review}
                    />
                );

            case "sentence-completion":
                return (
                    <SentenceCompletion
                        question={question}
                        userAnswer={userAnswer}
                        updateAnswer={updateAnswer}
                        disabled={review}
                    />
                );

            case "true-false":
                return (
                    <TrueFalse
                        question={question}
                        userAnswer={userAnswer}
                        updateAnswer={updateAnswer}
                        disabled={review}
                    />
                );

            default: return <></>
        }
    }, [question, userAnswers, updateAnswer]);


    return (
        <div className="bg-gray-200 rounded-lg p-6 mb-4">
            <div className="flex items-center gap-4 mb-4">
                <div className={`${bgColor} text-gray-700 rounded-full w-12 h-12 flex items-center justify-center shrink-0 text-lg font-medium`}>
                    {questionIndex + 1}
                </div>
                
                <h3 className="text-lg font-medium text-gray-900">
                    {question.question}
                </h3>
            </div>

            <div className="w-full gap-5">
                {renderItem()}

                {review &&
                    <ReviewAnswer
                        question={question}
                        userAnswer={userAnswers[questionIndex]}
                        bgColor={bgColor}
                    />
                }
            </div>
        </div>
    );
}



interface ReviewAnswerProps {
    question: Question;
    userAnswer: any;
    bgColor: string;
}

function ReviewAnswer({ question, userAnswer, bgColor }: ReviewAnswerProps) {
    const aiResponseText = getAiResponseText(question, userAnswer);

    return (

        <div className={`${bgColor} bg-opacity-10 border-2 ${bgColor.replace('bg-', 'border-')} rounded-lg p-4 mt-4`}>
            <p className="text-sm font-semibold text-gray-700 mb-2">
                AI Response:
            </p>
            <p className="text-gray-800">
                {aiResponseText}
            </p>
        </div>
    );
}



const isCorrectAnswer = (question: Question, userAnswer: any): boolean => {
    switch (question.type) {
        case "free-response":
            return question.correct;

        case "multiple-choice":
            return userAnswer == question.answer;

        case "select-all":
            if (!userAnswer) return false;
            const sortedUserAnswer = [...userAnswer].sort((a, b) => a - b);
            const sortedCorrectAnswer = [...question.answers].sort((a, b) => a - b);
            if (sortedUserAnswer.length !== sortedCorrectAnswer.length) return false;
            return sortedUserAnswer.every((val, index) => val === sortedCorrectAnswer[index]);

        case "sentence-completion":
            return userAnswer == question.answer;

        case "true-false":
            return userAnswer == question.answer;
    }
}


const getAiResponseText = (question: Question, userAnswer: any): string => {
    switch (question.type) {
        case "free-response":
            return question.aiResponse;

        case "multiple-choice":
            return question.aiResponses[userAnswer];

        case "select-all":
            return question.aiResponses.join(" ");

        case "sentence-completion":
            return question.aiResponse;

        case "true-false":
            return question.aiResponse;
    }
}