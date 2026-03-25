'use client'

import { useState } from "react";
import { Input } from "@/components/Input";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation"; // Ajustado para next/navigation

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include'
            });

            if (response.ok) {
                // O router.push funciona perfeitamente aqui no Client Component
                router.push('/dashboard');
            } else {
                const errorData = await response.json().catch(() => ({}));
                alert(errorData.message || "Erro no login. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Não foi possível conectar ao servidor.");
        }
    };

    return (
        <main className="bg-gray-900">
            <section className="flex justify-center items-center min-h-screen text-white p-6 md:p-9 overflow-hidden">
                <div className="min-w-[300px] w-[500px] h-auto min-h-[500px] rounded-2xl border border-gray-700 p-8 bg-gray-800/20 shadow-2xl">
                    <h1 className="text-center text-white font-bold text-3xl pb-12">Login</h1>

                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-10">
                            <Input
                                id="login"
                                label="E-mail"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                required
                            />

                            <div className="relative">
                                <Input
                                    id="password"
                                    label="Senha"
                                    type={showPassword ? "text" : "password"}
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-0 bottom-2 text-gray-500 hover:text-yellow-300 transition-colors cursor-pointer"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            <div className="flex justify-center items-center flex-col md:flex-row gap-6 mt-8">
                                <button
                                    type="submit"
                                    className="w-full md:w-[150px] h-[50px] bg-yellow-300 font-bold text-black text-xl cursor-pointer rounded-xl hover:opacity-80 transition-opacity"
                                >
                                    Login
                                </button>

                                <Link
                                    className="flex justify-center items-center w-full md:w-[150px] h-[50px] border border-gray-600 text-white text-xl cursor-pointer rounded-xl hover:bg-gray-800 transition-all"
                                    href="/"
                                >
                                    Voltar
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}