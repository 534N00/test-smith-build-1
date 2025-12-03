'use client';

import { useState } from 'react';

import { Upload, FileText } from 'lucide-react';

import { useRouter } from 'next/navigation';

import { useDropzone } from 'react-dropzone';

import Button from '@components/Button';
import ErrorPopup from '@components/ErrorPopup';
import CheckIfLoading from '@components/CheckIfLoading';

import { useTestStore } from '@stores/testStore';
import { useConfigStore } from '@stores/configStore';



interface UploadedFile {
    id: string;
    name: string;
}

export default function Page() {
    const router = useRouter();

    const [errors, setErrors] = useState<string[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
   
    const setTest = useTestStore((s) => s.setTest); // zustand store for test
    const files = useConfigStore((s) => s.files);
    const numQuestions = useConfigStore((s) => s.numQuestions);
    const timeLimit = useConfigStore((s) => s.timeLimit);
    const questionTypes = useConfigStore((s) => s.questionTypes);
    const setFiles = useConfigStore((s) => s.setFiles);
    const setNumQuestions = useConfigStore((s) => s.setNumQuestions);
    const setTimeLimit = useConfigStore((s) => s.setTimeLimit);
    const setQuestionTypes = useConfigStore((s) => s.setQuestionTypes);

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
        try {
            const errors = validateForm();
            if (errors) {
                setErrors(errors);
                return;
            }

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
                const data = await res.json();
                setTest(data.test);
                router.push('/test');
            } else {
                setLoading(false);
                setErrors(["Error generating test. Please try again with a different set of files."]);
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
    };


    const onDrop = (acceptedFiles: File[]) => {
        const newFiles: UploadedFile[] = acceptedFiles.map((file, index) => ({
            id: Date.now().toString() + index,
            name: file.name
        }));
        setFiles([...(Array.isArray(files) ? files : []), ...newFiles]);
        setErrors(null);
    };

    const onDropRejected = (fileRejections: any[]) => {
        const rejectedNames = fileRejections.map(rejection => rejection.file.name);
        setErrors([`These files are not allowed: ${rejectedNames.join(', ')}`]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        onDropRejected,
        accept: {
            'application/pdf': ['.pdf'],
            'text/plain': ['.txt'],
            'text/markdown': ['.md', '.markdown'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx', '.ppt'],
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/webp': ['.webp'],
            'image/svg+xml': ['.svg']
        },
        multiple: true
    });

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <ErrorPopup messages={errors} onClose={() => setErrors(null)} />
            <div className="max-w-4xl mx-auto">
                <CheckIfLoading loading={loading}>
                    <div className="mb-6">
                        <div
                            {...getRootProps()}
                            className={`flex flex-col items-center justify-center w-full h-48 border-4 border-black cursor-pointer transition ${
                                isDragActive ? 'bg-blue-300' : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                        >
                            <input {...getInputProps()} />
                            <Upload className="w-16 h-16 mb-2" strokeWidth={3} />
                            <span className="text-xl font-medium">
                                {isDragActive ? 'Drop files here' : 'Upload your files'}
                            </span>
                            <span className="text-sm text-gray-500 mt-1">or drag and drop</span>
                        </div>
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