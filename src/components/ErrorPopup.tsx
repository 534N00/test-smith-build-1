import { X } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';

interface ErrorPopupProps {
    messages: string[] | null;
    onClose: () => void;
    autoCloseDuration?: number; // in ms, null to disable
}

const ErrorPopup = ({ messages, onClose, autoCloseDuration }: ErrorPopupProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleClose = useCallback(() => {
        setIsVisible(false);
        onClose();
    }, [onClose]);

    
    useEffect(() => {
        if (messages) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
        }
        if (autoCloseDuration) {
            const timer = setTimeout(() => { handleClose(); }, autoCloseDuration);
            return () => clearTimeout(timer);
        }
    }, [messages, autoCloseDuration, handleClose]);

    
    if (!isVisible || !messages) { return null; }

    return (
        <>
        {/* Backdrop */}
        <div
                className="fixed inset-0 bg-black opacity-30 z-40"
                onClick={handleClose}
                role="presentation"
            />
        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="border-4 border-black bg-white shadow-lg max-w-md w-full">
                {/* Header */}
                <div className="border-b-4 border-black px-4 py-3 flex items-center justify-between bg-red-100">
                    <h2 className="text-lg font-bold text-gray-900">Error</h2>
                    <button
                        onClick={ handleClose }
                        className="p-1 hover:bg-red-200 transition rounded"
                        aria-label="Close error popup"
                    >
                        <X className="w-6 h-6" strokeWidth={3} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {messages && messages.map((message, index) => (
                        <p key={index} className="text-base text-gray-700 leading-relaxed">{message}</p>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
};
export default ErrorPopup;