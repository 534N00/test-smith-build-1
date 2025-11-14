"use client"

import {
    useCallback,
    useEffect,
    useState
} from "react"

import CheckIfLoading from "@components/CheckIfLoading";

import { Test, Question } from "@util/test/types";
import TestQuestion from "./Question";



export default function TestPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [test, setTest] = useState<Test | null>(null);
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
    const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});

    const generateTest = useCallback(async () => {
        try {
            setLoading(true);

            const res = await fetch("/api/test/generate", {
                method: "GET"
            });

            if (res.ok) {
                const data = await res.json();
                setTest(data.test);
                if (data.test.timeLimit) {
                    setTimeRemaining(data.test.timeLimit);
                }
            } else {
                // No error handling for simulated data.
            }
        } catch {
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        generateTest();
    }, [generateTest]);

    // Timer countdown.
    useEffect(() => {
        if (timeRemaining === null || timeRemaining <= 0) return;

        const interval = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev === null || prev <= 0) return 0;
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timeRemaining]);

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };


    const handleAnswerChange = useCallback((questionIndex: number, answer: any) => {
        setUserAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer
        }));
    }, [setUserAnswers]);


    const handleSubmit = () => {
        console.log("Submitting answers:", userAnswers);
        // TODO: Handle submission
    };



    return (
        <div className="min-h-screen bg-gray-50">
            <CheckIfLoading loading={loading || !test}>
                {test && (
                    <>
                        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                            <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
                                <div className="bg-gray-200 px-4 py-2 rounded text-gray-900 font-mono text-lg">
                                    {timeRemaining !== null ? formatTime(timeRemaining) : "No time limit"}
                                </div>
                                <h1 className="text-2xl font-semibold text-gray-900">
                                    {test.title}
                                </h1>
                                <div className="flex gap-2">
                                    {/* Pause button here */}
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto px-8 py-8">
                            {test.questions.map((question, index) => (
                                <TestQuestion
                                    key={`q-${question.question}-${index}`}
                                    questionIndex={index}
                                    question={question}
                                    userAnswers={userAnswers}
                                    handleAnswerChange={handleAnswerChange}
                                />
                            ))}


                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-gray-400 hover:bg-gray-500 text-gray-900 font-semibold px-16 py-4 rounded text-lg transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </CheckIfLoading>
        </div>
    );
}