
"use client";

import React, { useState } from "react";
import Button from "@components/Button";
import Link from "next/link";

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const validateEmail = (value: string) => {
        return /\S+@\S+\.\S+/.test(value);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!name.trim() || !email.trim() || !message.trim()) {
            setError("Please fill out all fields.");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setIsLoading(true);

        // Simulate sending the message. Replace this with a real API call if available.
        try {
            await new Promise((res) => setTimeout(res, 700));
            setSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            // Log for debugging and show friendly message
            console.error(error);
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-white py-12">
            <div className="w-full max-w-4xl px-6">
                <div className="text-center mb-8">
                    <p className="text-lg text-gray-600">Get in touch</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact TestSmith</h1>
                    <p className="mt-2 text-gray-600">Questions, feedback, or a project to build? We’d love to hear from you.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <aside className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-sm">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Contact details</h3>
                            <p className="text-gray-600 mt-2">Email: <a href="mailto:hello@testsmith.example" className="text-indigo-600">hello@testsmith.example</a></p>
                            <p className="text-gray-600">Phone: <a href="tel:+1234567890" className="text-indigo-600">+1 (234) 567-890</a></p>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-700">Office</h4>
                            <p className="text-gray-600">Remote • United States</p>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-700">Follow</h4>
                            <div className="flex gap-4 mt-2">
                                <a href="#" className="text-gray-500 hover:text-gray-900">Twitter</a>
                                <a href="#" className="text-gray-500 hover:text-gray-900">GitHub</a>
                                <a href="#" className="text-gray-500 hover:text-gray-900">LinkedIn</a>
                            </div>
                        </div>
                    </aside>

                    <section>
                        {!submitted ? (
                            <form onSubmit={onSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="pl-2 mt-1 block w-full rounded-md border-gray-200 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-2 mt-1 block w-full rounded-md border-gray-200 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="pl-2 mt-1 block w-full rounded-md border-gray-200 bg-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        rows={6}
                                        placeholder="Tell us a little about your project or question"
                                        required
                                    />
                                </div>

                                {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

                                <div className="flex items-center justify-between">
                                    <Button type="submit" disabled={isLoading}>{isLoading ? 'Sending…' : 'Send Message'}</Button>
                                    <p className="ml-2 text-sm text-gray-500">We reply within n to (n+1) business days</p>
                                </div>
                            </form>
                        ) : (
                            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
                                <h3 className="text-xl font-semibold text-gray-900">Thanks — we received your message</h3>
                                <p className="text-gray-600 mt-2">We will get back to you at the email address you provided.</p>
                                <div className="mt-6">
                                    <Link href="/config">
                                        <Button>Generate a Quiz</Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Page;