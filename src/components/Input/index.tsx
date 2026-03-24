import { InputHTMLAttributes } from "react";

type childrenInput = InputHTMLAttributes<HTMLInputElement> & {
    label: string
    id: string
}

export function Input({ label, id, ...props }: childrenInput) {
    return (
        <div className="flex flex-col items-start justify-center w-full gap-2">
            <label
                className="text-start text-white font-medium cursor-pointer"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="w-full text-white bg-transparent outline-none border-b border-gray-600 focus:border-yellow-300 transition-colors py-2"
                id={id}
                {...props}
            />
        </div>
    );
}