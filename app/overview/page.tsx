'use client';
import Button from "@components/Button";
import Image from "next/image";
import Link from "next/link";
import { useConfigStore } from "@/src/stores/configStore";
import { useTestStore } from "@/src/stores/testStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CheckIfLoading from "@/src/components/CheckIfLoading";
const Page = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const files = useConfigStore((state) => state.files);
    const numQuestions = useConfigStore((state) => state.numQuestions);
    const timeLimit = useConfigStore((state) => state.timeLimit);
    const questionTypes = useConfigStore((state) => state.questionTypes);
    const setTest = useTestStore((state) => state.setTest);
    const router = useRouter();

    const onGenerateTest = async () => {
        try {
            setLoading(true);
            const body = JSON.stringify({
                config: {
                    files,
                    numQuestions,
                    timeLimit,
                    questionTypes
                }
            });

            const res = await fetch("/api/test/config", {
                method: "POST",
                body
            });

            if (res.ok) {
                // populate zustand store with data
                const data = await res.json();
                setTest(data.test);
                router.push('/test');
            } else {
                // No error handling for simulation.
                setLoading(false);
                console.log("Error generating test.");
            }
        } catch {
            setLoading(false);
        }
    };

    return (
        <CheckIfLoading loading={loading}>
        <div className="min-h-screen -mt-12 bg-gray-50 flex flex-col items-center justify-center">
            <div className="flex space-x-32 mb-8">
                <Image src="/culture.svg" alt="Fox" width={200} height={200} />
                <div className="mt-0">
                    <Image src="/politics.svg" alt="Fox" width={190} height={190} />
                </div>                
                <div className="mb-3">
                    <Image src="/econ.svg" alt="Fox" width={170} height={170} />
                </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 mb-16 w-[80%]">
                <p className="text-lg">
                    You’ve shown great mastery in your knowledge of Roman history! You got most questions involving culture correct. You made several mistakes dealing with Roman political figures, though. Review Lecture 3 to learn more about the different heads of state! You also need to study more about Roman economics, as there were a good few questions you missed. Review lectures 4-5 to learn more about the topic. 
                </p>
            </div>
            <div className="flex space-x-56">
                <Link href="/test"><Button onClick={onGenerateTest}>Do another</Button></Link>
                <Link href="/config"><Button>Change Settings</Button></Link>
            </div>
        </div>
        </CheckIfLoading>
    );
};
export default Page;