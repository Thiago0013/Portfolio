import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Projetos | Ian Thiago"
}

const projetosTemporarios = [
    {
        id: 1,
        title: "E-commerce de Roupas",
        description: "Plataforma completa de vendas com painel administrativo e integração de pagamentos.",
        tags: ["Next.js", "Tailwind", "Node.js"]
    },
    {
        id: 2,
        title: "App de Gestão Financeira",
        description: "Aplicativo para controle de gastos pessoais com gráficos interativos e relatórios mensais.",
        tags: ["React Native", "Firebase"]
    },
    {
        id: 3,
        title: "Landing Page Corporativa",
        description: "Página de alta conversão focada em captação de leads para uma agência de marketing.",
        tags: ["React", "CSS Modules"]
    }
];

export default function Project(){
    return(
        <div className="flex flex-col min-h-screen bg-gray-900">
            <Header />

            <main className="flex-grow flex flex-col items-center py-16 px-4">
                <section className="w-full max-w-[1200px] flex flex-col gap-10">

                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300">
                            Meus Projetos
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Confira alguns dos trabalhos que desenvolvi. Em breve, mais novidades adicionadas diretamente pelo painel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projetosTemporarios.map((projeto) => (
                            <div
                                key={projeto.id}
                                className="flex flex-col bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-300 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg"
                            >
                                <div className="w-full h-48 bg-gray-700 flex items-center justify-center border-b border-gray-600">
                                    <span className="text-gray-500 font-medium">Imagem do {projeto.title}</span>
                                </div>

                                <div className="p-6 flex flex-col flex-grow gap-4">
                                    <h2 className="text-xl font-bold text-white">
                                        {projeto.title}
                                    </h2>

                                    <p className="text-gray-400 flex-grow">
                                        {projeto.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {projeto.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-semibold bg-gray-900 text-yellow-300 px-3 py-1 rounded-full border border-yellow-300/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
}