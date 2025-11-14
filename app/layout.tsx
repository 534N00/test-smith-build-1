import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Button from "@components/Button";
import Link from "next/link";



const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TestSmith",
    description: "Welcome to TestSmith",
};


export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <nav className="fixed top-0 left-0 right-0 bg-white border-2 border-gray-200">
                    <div className="flex items-center gap-4 px-8 py-4">
                        <Link href="/" title="Home">
                            <Button>Home</Button>
                        </Link>
                        <Link href="/about" title="About">
                            <Button>About</Button>
                        </Link>
                        <Link href="/contact" title="Contact">
                            <Button>Contact</Button>
                        </Link>
                    </div>
                </nav>

                <div className="pt-20">
                    {children}
                </div>
            </body>
        </html>
    );
}