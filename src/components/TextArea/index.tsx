import { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    id: string;
}

export function TextArea({ label, id, ...props }: TextAreaProps) {
    return (
        <div className="flex flex-col items-start justify-center w-full gap-2">
            <label className="text-white font-medium cursor-pointer" htmlFor={id}>
                {label}
            </label>
            <textarea
                id={id}
                {...props}
                className="w-full text-white bg-transparent outline-none border border-gray-600 rounded-xl p-2 focus:border-yellow-300 transition-colors py-2 resize-none min-h-[120px]"
            />
        </div>
    );
}