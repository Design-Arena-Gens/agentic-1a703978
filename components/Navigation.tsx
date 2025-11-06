"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "./icons";

const navItems = [
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#cau-chuyen", label: "Câu chuyện" },
  { href: "#bo-suu-tap", label: "Bộ sưu tập" },
  { href: "#lien-he", label: "Liên hệ" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md transition-colors duration-500">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold uppercase tracking-[0.28em]">
          <span className="rounded-full bg-brand-500/80 p-1 shadow-lg shadow-brand-500/40"></span>
          Sandaluxe
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-white/80 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-white/70 transition-all duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link
            href="#san-pham"
            className="rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/50 transition hover:bg-brand-400"
          >
            Mua ngay
          </Link>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 rounded-3xl border border-white/10 bg-slate-900/90 p-6 md:hidden"
          >
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
