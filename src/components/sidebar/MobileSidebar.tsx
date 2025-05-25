"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  LogOut,
  PanelRightClose,
  PanelRightOpen,
  Pizza,
} from "lucide-react";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";

const sidebarItems = [
    { icon: <Home size={24} />, label: "Home", link: "/home" },
    { icon: <Pizza size={24} />, label: "Pizza", link: "/pizza-orders" },
];

export default function MobileSidebar() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-50 border-t border-gray-200 shadow-lg flex justify-around items-center h-16 md:hidden">
            {sidebarItems.map((item, index) => {
                const isActive = pathname === item.link;
                return (
                    <Link
                        key={index}
                        href={item.link}
                        className={`flex flex-col items-center justify-center gap-1 px-2 py-1 rounded transition-colors duration-200
                            ${isActive ? "bg-orange-300 text-white" : "hover:bg-orange-100 text-orange-800"}
                        `}
                    >
                        {item.icon}
                        <span className="text-xs font-medium">{item.label}</span>
                    </Link>
                );
            })}
            <button
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                className="flex flex-col items-center justify-center gap-1 px-2 py-1 rounded hover:bg-orange-100 text-orange-800 transition-colors duration-200"
            >
                <LogOut size={24} />
                <span className="text-xs font-medium">Logout</span>
            </button>
        </nav>
    );
}
