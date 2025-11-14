"use client"

import {
    useCallback,
    useEffect,
    useState
} from "react"

import { Pause, Play } from "lucide-react";

import CheckIfLoading from "@components/CheckIfLoading";
import TestQuestion from "./Question";

import { Test } from "@util/test/types";



export default function TestPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [test, setTest] = useState<Test | null>(null);
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
    const [review, setReview] = useState<boolean>(false); // For after user submits, reivew the responses.


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
                    setTimeRemaining(10);
                }
            } else {
                // No error handling for simulated data.
            }
        } catch {
        } finally {
            setLoading(false);
        }
    }, []);

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
        setIsPaused(true);
        setReview(true);
    };


    useEffect(() => {
        generateTest();
    }, [generateTest]);

    // Timer countdown.
    useEffect(() => {
        if (timeRemaining === null || timeRemaining <= 0 || isPaused) return;

        const interval = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev === null || prev <= 0) return 0;
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timeRemaining, isPaused]);

    // Auto-submit when timer reaches 0.
    useEffect(() => {
        if (timeRemaining === 0 && !review) {
            handleSubmit();
        }
    }, [timeRemaining, review]);


    return (
        <div className="min-h-screen bg-gray-50">
            <CheckIfLoading loading={loading || !test}>
                {test && (
                    <>
                        <div className="bg-white border-b border-gray-200">
                            <div className="max-w-4xl mx-auto px-8 py-4 relative flex items-center justify-center">
                                <h1 className="text-2xl font-semibold text-gray-900">
                                    {test.title}
                                </h1>
                                <div className="absolute right-3 flex items-center gap-3">
                                    <div className="bg-gray-200 px-4 py-2 rounded text-gray-900 font-mono text-lg">
                                        {timeRemaining !== null ? formatTime(timeRemaining) : "No time limit"}
                                    </div>
                                    {!review &&
                                        <button
                                            onClick={() => setIsPaused(!isPaused)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors"
                                            disabled={timeRemaining === null || review}
                                        >
                                            {isPaused ? (
                                                <>
                                                    <Play size={18} />
                                                    Resume
                                                </>
                                            ) : (
                                                <>
                                                    <Pause size={18} />
                                                    Pause
                                                </>
                                            )}
                                        </button>
                                    }
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
                                    review={review}
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