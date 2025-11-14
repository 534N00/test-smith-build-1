import Button from "@components/Button";
import Link from "next/link";



export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-white">
            <div className="text-center space-y-8">
                <div>
                    <p className="text-xl text-gray-600 mb-2">Welcome to</p>
                    <h1 className="text-6xl font-bold text-gray-900">
                        TestSmith🔨
                    </h1>
                </div>

                <Link href="/config" title="Get Started">
                    <Button>Get Started</Button>
                </Link>
            </div>
        </div>
    );
}