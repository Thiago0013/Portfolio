'use client'; // Necessário para usar o usePathname

import { usePathname } from 'next/navigation';
import {
    BarChart3,
    LayoutDashboard,
    LogOut,
    Settings,
    Users
} from "lucide-react";
import { NavItem } from "@/components/NavItem";

export function NavAside() {
    const pathname = usePathname();

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/dashboard" },
        { icon: <BarChart3 size={20} />, label: "Projetos", href: "/dashboard/projects" },
        { icon: <Users size={20} />, label: "Certificação", href: "/dashboard/certification" },
        { icon: <Settings size={20} />, label: "Configurações", href: "/dashboard/settings" },
    ];

    return (
        <aside className="w-64 border-r border-gray-700 bg-gray-800/20 flex flex-col h-full">
            <div className="p-8">
                <h2 className="text-2xl font-bold text-yellow-300 tracking-tighter italic">SISTEMA</h2>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => (
                    <NavItem
                        key={item.href}
                        icon={item.icon}
                        label={item.label}
                        href={item.href}
                        active={pathname === item.href}
                    />
                ))}
            </nav>

            <div className="p-4 border-t border-gray-700">
                <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:text-red-400 transition-colors cursor-pointer group">
                    <LogOut size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Sair</span>
                </button>
            </div>
        </aside>
    );
}