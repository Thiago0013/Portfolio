import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    const ano = new Date().getFullYear();
    const iconStyle = "cursor-pointer hover:scale-110 hover:text-yellow-300 transition-all duration-300 ease-in-out text-white";

    return (
        <footer className={"flex flex-col justify-center items-center gap-4 bg-gray-900 p-12"}>
            <nav className={"flex justify-center items-center gap-4"}>
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
            </nav>

            <nav className={"flex justify-center items-center gap-4 text-gray-400"}>
                <Link href={"/"} className={"hover:text-white transition-all duration-300 ease-in-out"}>Home</Link>
                <Link href={"/services"} className={"hover:text-white transition-all duration-300 ease-in-out"}>Serviços</Link>
                <Link href={"/"} className={"hover:text-white transition-all duration-300 ease-in-out"}>Projetos</Link>
                <Link href={"/"} className={"hover:text-white transition-all duration-300 ease-in-out"}>Contatos</Link>
            </nav>
            <div className={"text-center"}>
                <span className={"text-gray-400"}>© {ano} Ian Thiago. Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}