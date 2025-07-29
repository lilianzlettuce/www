"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LogoIcon } from "@/components/Icons";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function NavBarFloating() {
  const pathname = usePathname();

  const navItems = [
    { href: "/work", label: "Work" },
    { href: "/stuff", label: "Stuff" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="z-50 sticky top-5 w-full sm:max-w-7/12 px-4 sm:px-6 lg:px-6 py-2 m-auto rounded-full bg-background/50 backdrop-blur-md border-1 border-border">
      <div className="flex justify-between items-center">
        <Link href="/">
          <LogoIcon className="w-[220px] h-full scale-x-100 text-foreground" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-mono text-sm lowercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-foreground font-bold"
                  : "text-mutedForeground font-normal hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button className="text-mutedForeground hover:text-foreground">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 