"use client"

import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const path = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Serviços", href: "/services" },
        { name: "Projetos", href: "/project" },
        {name: "Certificações", href: "/certification"},
        { name: "Contato", href: "/contacts" },
    ];

    const baseLinkStyle = "hover:opacity-50 transition-all duration-300 ease-in-out cursor-pointer text-sm sm:text-base";
    const iconStyle = "cursor-pointer hover:scale-110 hover:text-yellow-300 transition-all duration-300 ease-in-out text-white";

    return (
        <header className="flex flex-col md:flex-row justify-between items-center bg-gray-900 min-h-[6rem] py-6 md:py-0 px-4 sm:px-10 lg:px-32 gap-6 md:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 w-full md:w-auto">
                <div>
                    <span className="text-white text-2xl font-bold tracking-tight cursor-default select-none">Ian Thiago</span>
                </div>
                <nav>
                    <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`${path === link.href ? "text-yellow-300" : "text-white"} ${baseLinkStyle}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="flex items-center justify-center gap-6 w-full md:w-auto">
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