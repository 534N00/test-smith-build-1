'use client';
import { ReactNode } from "react";



interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    /** Optional button type (button, submit, reset) */
    type?: "button" | "submit" | "reset";
    /** Disable the button */
    disabled?: boolean;
    /** Additional classes to apply */
    className?: string;
}

export default function Button({ children, onClick, type = "button", disabled = false, className = "" }: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={
                `px-8 py-3 text-xl text-white bg-blue-500 rounded transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 cursor-pointer"} ` +
                className
            }
        >
            {children}
        </button>
    );
}