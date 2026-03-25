import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItemProps {
    icon: ReactNode;
    label: string;
    href: string;
    active?: boolean;
}

export function NavItem({ icon, label, href, active = false }: NavItemProps) {
    return (
        <Link
            href={href}
            className={`
                flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium transition-all cursor-pointer
                ${active
                ? 'bg-yellow-300 text-black shadow-[0_0_20px_rgba(253,224,71,0.2)]'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
            `}
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}