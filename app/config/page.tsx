'use client';

import { useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import Button from '@components/Button';
import ErrorPopup from '@/src/components/ErrorPopup';
import { useRouter } from 'next/navigation';
import CheckIfLoading from '@components/CheckIfLoading';



interface UploadedFile {
    id: string;
    name: string;
}

export default function Page() {
    const router = useRouter();

    const [errors, setErrors] = useState<string[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [files, setFiles] = useState<UploadedFile[]>([]); // local list of selected files (no upload to server)
    const [numQuestions, setNumQuestions] = useState(10); // number of questions to generate
    const [timeLimit, setTimeLimit] = useState<number>(20); // time limit in minutes?
    const [questionTypes, setQuestionTypes] = useState({ // multi-select state
        multipleChoice: false,
        freeResponse: false,
        trueFalse: false,
        sentenceCompletion: false,
        selection: false
    });


    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = e.target.files;
        if (!uploadedFiles) {
            return;
        }

        // Static allowed filetypes
        const allowedMimeTypes = new Set([
            'application/pdf',
            'text/plain',
            'text/markdown',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
            'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
            'image/png',
            'image/jpeg',
            'image/webp',
            'image/svg+xml'
        ]);
        const allowedExtensions = new Set(['pdf','txt','md','markdown','xlsx','docx','pptx','png','jpg','jpeg','webp','svg']);
        const isAllowed = (file: File) => {
            if (file.type && allowedMimeTypes.has(file.type)) { 
                return true;
            }
            const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
            return allowedExtensions.has(ext);
        }

        const filesArray = Array.from(uploadedFiles);
        const accepted: UploadedFile[] = [];
        const rejectedNames: string[] = [];

        filesArray.forEach((file, index) => {
            if (isAllowed(file)) {
                accepted.push({
                    id: Date.now().toString() + index,
                    name: file.name
                });
            } else {
                rejectedNames.push(file.name);
            }
        });
        if (accepted.length > 0) {
            setFiles(prev => [...prev, ...accepted]);
        }
        // Mark errors for display
        if (rejectedNames.length > 0) {
            setErrors([`This file is not allowed: ${rejectedNames.join(', ')}`]);
        } else {
            // clear previous errors when all selected files are valid
            setErrors(null);
        }
    };

    const removeFile = (id: string) => {
        setFiles(files.filter(file => file.id !== id));
    };

    const handleCheckboxChange = (type: keyof typeof questionTypes) => {
        setQuestionTypes({
            ...questionTypes,
            [type]: !questionTypes[type]
        });
    };

    const onGenerateTest = async () => {
        const errors = validateForm();
        if (errors) {
            setErrors(errors);
            return;
        }
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
                router.push('/test');
            } else {
                // No error handling for simulation.
            }
        } catch {
            setLoading(false);
        }
    };

    const validateForm = (): string[] | null => {
        const errors: string[] = [];
        if (files.length <= 0) {
            errors.push("Please upload at least one file before generating.");
        }
        if (timeLimit <= 0) {
            errors.push("Time limit must be greater than 0.");
        }
        const hasQuestionType = Object.values(questionTypes).some(value => value === true);
        if (!hasQuestionType) {
            errors.push("Please select at least one question type.");
        }
        return errors.length > 0 ? errors : null;
    }


    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <ErrorPopup messages={errors} onClose={() => setErrors(null)} />
            <div className="max-w-4xl mx-auto">
                <CheckIfLoading loading={loading}>
                    <div className="mb-6">
                        <label
                            htmlFor="file-upload"
                            className="flex flex-col items-center justify-center w-full h-48 border-4 border-black bg-gray-200 cursor-pointer hover:bg-gray-300 transition"
                            title="Click to upload your files"
                        >
                            <Upload className="w-16 h-16 mb-2" strokeWidth={3} />
                            <span className="text-xl font-medium">Upload your files</span>
                            <input
                                id="file-upload"
                                type="file"
                                multiple
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                        </label>
                        <p className="text-sm text-gray-400 ml-2">.pdf, .txt, .md, .xlsx, .docx, .pptx, .png, .jpg, .jpeg, .webp, .svg</p>
                    </div>

                    {files.length > 0 && (
                        <div className="mb-6 space-y-2">
                            {files.map((file) => (
                                <div key={file.id} className="flex items-center gap-3">
                                    <button
                                        onClick={() => removeFile(file.id)}
                                        className="px-4 py-1.5 bg-red-300 hover:bg-red-400 text-black font-medium transition cursor-pointer"
                                    >
                                        Remove
                                    </button>
                                    <div className="flex items-center gap-1">
                                        <FileText className="w-4 h-4" />
                                        <span className="text-base">{file.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="border-4 border-black bg-white">
                            <div className="border-b-4 border-black px-4 py-2">
                                <h2 className="text-lg font-medium">Options</h2>
                            </div>
                            
                        <div className="p-6 space-y-6">
                            <div className="flex items-center gap-4" title="Update number of questions">
                                <label className="text-base font-medium whitespace-nowrap">
                                    Number of Questions:
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    value={numQuestions}
                                    onChange={(e) => setNumQuestions(Number(e.target.value))}
                                    className="w-20 px-3 py-1.5 bg-gray-200 border-2 border-gray-300 text-base"
                                />
                            </div>

                            <div className="flex items-center gap-4" title="Update time limit">
                                <label className="text-base font-medium whitespace-nowrap">
                                    Time limit:
                                </label>
                                <input
                                    type="number"
                                    step="1"
                                    min="0"
                                    value={timeLimit}
                                    onChange={(e) => setTimeLimit(Number(e.target.value))}
                                    className="w-20 px-3 py-1.5 bg-gray-200 border-2 border-gray-300 text-base"
                                />
                                <span className="text-base">minutes</span>
                            </div>

                            <div>
                                <h3 className="text-base font-medium mb-3">Question types</h3>
                                <div className="space-y-2 ml-4">
                                    <label className="flex items-center gap-2 cursor-pointer" title="Multiple choice">
                                        <input
                                            type="checkbox"
                                            checked={questionTypes.multipleChoice}
                                            onChange={() => handleCheckboxChange('multipleChoice')}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-base">Multiple choice</span>
                                    </label>
                                    
                                    <label className="flex items-center gap-2 cursor-pointer" title="Free response">
                                        <input
                                            type="checkbox"
                                            checked={questionTypes.freeResponse}
                                            onChange={() => handleCheckboxChange('freeResponse')}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-base">Free response</span>
                                    </label>
                                    
                                    <label className="flex items-center gap-2 cursor-pointer" title="True/False">
                                        <input
                                            type="checkbox"
                                            checked={questionTypes.trueFalse}
                                            onChange={() => handleCheckboxChange('trueFalse')}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-base">True/False</span>
                                    </label>
                                    
                                    <label className="flex items-center gap-2 cursor-pointer" title="Sentence completion">
                                        <input
                                            type="checkbox"
                                            checked={questionTypes.sentenceCompletion}
                                            onChange={() => handleCheckboxChange('sentenceCompletion')}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-base">Sentence completion</span>
                                    </label>
                                    
                                    <label className="flex items-center gap-2 cursor-pointer" title="Selection">
                                        <input
                                            type="checkbox"
                                            checked={questionTypes.selection}
                                            onChange={() => handleCheckboxChange('selection')}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-base">Selection</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        title="Generate test"
                        onClick={onGenerateTest}
                        className="flex justify-center mt-8"
                    >
                        <Button>Generate Test</Button>
                    </div>
                </CheckIfLoading>
            </div>
        </div>
    );
}