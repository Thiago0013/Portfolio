import { ArrowRightIcon } from "lucide-react";

type childrenCards = {
    src: string
    alt: string
    title: string
    number: number
}

export function Cards({ src, alt, title, number }: childrenCards) {
    return (
        <div className="border-b border-b-gray-300 pb-4">
            <div className="flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:scale-[1.02] sm:hover:scale-110 transition-all duration-300 ease-in-out">

                <div className="shrink-0">
                    <img
                        className="h-[80px] w-[140px] sm:h-[120px] sm:w-[220px] object-cover rounded-md"
                        src={src}
                        alt={alt}
                        draggable="false"
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-white text-lg sm:text-2xl truncate">{title}</h3>
                    <p className="text-gray-400 text-sm sm:text-xl">{number} projetos</p>
                </div>

                <div className="shrink-0">
                    <ArrowRightIcon className="text-yellow-300 w-5 h-5 sm:w-6 sm:h-6" />
                </div>

            </div>
        </div>
    );
}