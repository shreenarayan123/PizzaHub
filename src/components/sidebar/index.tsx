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
  { icon: <Home size={20} />, label: "Home", link: "/home" },
  { icon: <Pizza size={20} />, label: "Pizza Orders", link: "/pizza-orders" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <motion.aside
      animate={{ width: open ? 240 : 72 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="h-screen bg-slate-50 border-r border-gray-200 shadow-lg px-4 py-6 flex flex-col"
    >
      <div className="flex items-center gap-4">
        {open && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-orange-400 font-bold"
          >
            🍕 PizzaHub
          </motion.span>
        )}
        <button
          onClick={toggleSidebar}
          className="text-orange-400 text-xl hover:text-orange-600 transition"
        >
          {open ? <PanelRightOpen /> : <PanelRightClose />}
        </button>
      </div>
      <div className="flex flex-col items-center justify-between h-full">
        <nav className="mt-10 flex flex-col gap-5">
          {sidebarItems.map((item, index) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={index}
                href={item.link}
                className={`flex items-center gap-3   rounded-lg p-3 transition-colors duration-200  
              ${
                isActive
                  ? "bg-orange-300 text-white"
                  : "hover:bg-orange-100 text-orange-800"
              } ${open ? "w-[150px]" : "w-[50px]"} `}
              >
                {item.icon}
                <AnimatePresence>
                  {open && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-basefont-semibold"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>
        <div>
          <div
            className="flex items-center gap-3 text-orange-800 hover:text-white hover:bg-orange-300 rounded-lg p-3 transition-colors duration-200 text-lg cursor-pointer"
          >
            <LogOut  onClick={()=> signOut({redirect: true, callbackUrl: "/"})} size={30} />
            <AnimatePresence>
              {open && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-semibold"
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
