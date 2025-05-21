"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Hamburger for mobile, left side */}
        <button
          className="lg:hidden flex items-center mr-2"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        {/* Logo, always centered */}
        <Link href="/" className="flex items-center mx-auto lg:mx-0">
          <Image src="/logo.svg" alt="x0platform logo" width={170} height={40} priority />
        </Link>
        {/* Desktop Menu, right-aligned */}
        <ul className="hidden lg:flex items-center gap-6 ml-auto">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-lg font-medium text-neutral-800 dark:text-neutral-100 hover:text-primary dark:hover:text-accent transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 transition-opacity lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-neutral-900 shadow-lg transform transition-transform duration-200 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
          <Image src="/logo.svg" alt="x0platform logo" width={120} height={28} />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="ml-2"
          >
            <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block text-lg font-medium text-neutral-800 dark:text-neutral-100 hover:text-primary dark:hover:text-accent py-1"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}