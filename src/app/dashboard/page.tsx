import { getGithubData } from "@/services/github";
import { cookies } from 'next/headers';
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    BarChart3,
    Bell,
    Search
} from 'lucide-react';
import {NavItem} from "@/components/NavItem";
import {NavAside} from "@/components/NavAside";

export default async function Dashboard() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
    }

    const data = await getGithubData();

    const stats = [
        { label: "Repositorios", value: data.public_repos},
        { label: "Receita Total", value: "R$ 45.200"},
        { label: "Novos Projetos", value: "12"},
    ];

    return (
        <div className="flex h-screen bg-gray-900 text-white font-sans">
            <NavAside />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-20 border-b border-gray-700 flex items-center justify-between px-8 bg-gray-900/50 backdrop-blur-md">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar informações..."
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:border-yellow-300 transition-colors"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-gray-400 hover:text-yellow-300 transition-colors">
                            <Bell size={22} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-700">
                            <div className="text-right">
                                <p className="text-sm font-bold">{data.login}</p>
                                <p className="text-xs text-gray-500">admin@sistema.com</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center text-black font-bold">
                                AD
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Body */}
                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold">Bem-vindo de Ian Thiago!</h1>
                        <p className="text-gray-400">Aqui está o que aconteceu no seu painel hoje.</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-gray-800/20 border border-gray-700 p-6 rounded-2xl hover:border-yellow-300/50 transition-colors group">
                                <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                                <div>
                                    <h3 className="text-3xl font-bold text-white group-hover:text-yellow-300 transition-colors">{stat.value}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Section */}
                    <section className="bg-gray-800/20 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                            <h3 className="font-bold text-lg">Atividades Recentes</h3>
                            <button className="text-yellow-300 text-sm font-bold hover:underline">Ver tudo</button>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="flex items-center justify-between p-4 rounded-xl border border-gray-700/50 bg-gray-900/40">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                                            <div>
                                                <p className="text-sm font-medium">Nova atualização de sistema pendente</p>
                                                <p className="text-xs text-gray-500">Há 2 horas atrás</p>
                                            </div>
                                        </div>
                                        <button className="px-4 py-1.5 border border-gray-600 rounded-lg text-xs hover:bg-gray-800 transition-all">
                                            Detalhes
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}