import Button from "@components/Button";
import Image from "next/image";
import Link from "next/link";
const Page = () => {


    return (
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
                <Link href="/test"><Button onClick={() => {console.log("generate another quiz click")}}>Do another</Button></Link>
                <Link href="/config"><Button>Change Settings</Button></Link>
            </div>
        </div>
    );
};
export default Page;