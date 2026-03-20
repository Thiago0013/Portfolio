import { Github, Instagram, Linkedin } from "lucide-react";

export function Header() {
    const navLinkStyle = "text-white hover:opacity-50 transition-all duration-300 ease-in-out cursor-pointer";
    const iconStyle = "cursor-pointer hover:scale-110 hover:text-yellow-300 transition-all duration-300 ease-in-out text-white";

    return (
        <header className="flex justify-between items-center bg-gray-900 h-24 px-10 lg:px-32">
            <div className="flex items-center gap-12">
                <div>
                    <span className="text-white text-2xl font-bold tracking-tight cursor-default select-none">Ian Thiago</span>
                </div>
                <nav>
                    <ul className="flex items-center gap-8">
                        <li className={navLinkStyle}>Home</li>
                        <li className={navLinkStyle}>Projetos</li>
                        <li className={navLinkStyle}>Contato</li>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-6">
                <a
                    href="https://www.github.com/Thiago0013"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github className={iconStyle} size={28} />
                </a>

                <a
                    href="https://www.linkedin.com/in/ian-silva-937a85286/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin className={iconStyle} size={28} />
                </a>

                <a
                    href="https://www.instagram.com/ian.thiago13"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram className={iconStyle} size={28} />
                </a>
            </div>
        </header>
    );
}