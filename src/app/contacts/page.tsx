import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { Input } from "@/components/Input";
import {TextArea} from "@/components/TextArea";

export const metadata = {
    title: "Contato | Ian Thiago"
};

export default function Contacts() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <Header />

            <main className="flex-grow flex items-center justify-center p-4">
                <section className="w-full max-w-[1000px] min-h-[500px] flex flex-col gap-6">

                    <div className="flex items-center justify-start gap-3">
                        <h1 className="text-yellow-300 text-3xl font-bold">Envie um E-mail!</h1>
                        <Mail className="text-yellow-300" size={32}/>
                    </div>

                    <div className="border border-gray-700 rounded-2xl p-8 md:p-12 bg-gray-900/50 shadow-2xl">
                        <form className="flex flex-col gap-8" action="#">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input id="mail" label="E-mail:" type="email" placeholder="seu@email.com" required />
                                <Input id="assunto" label="Assunto:" type="text" placeholder="Como posso ajudar?" required />
                            </div>

                            <TextArea id="message" label="Mensagem:" placeholder="Escreva sua proposta ou dúvida aqui..." />

                            <button
                                type="submit"
                                className="bg-yellow-300 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer mt-4"
                            >
                                Enviar Email
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}