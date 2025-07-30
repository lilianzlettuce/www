"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LogoIcon } from "@/components/Icons";
import { ThemeToggle, ThemeSlider } from "@/components/ThemeToggle";
import { navItems } from "@/lib/data";

type NavBarProps = {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav className={`${className} z-50 sticky top-0 w-full py-0 m-auto bg-background`}>
      <div className="w-full h-full flex justify-between items-center gap-2">
        <Link href="/" className="w-fit h-full text-xl font-bold text-foreground hover:text-mutedForeground transition-colors">
          <LogoIcon className="w-fit h-full" />
        </Link>
        
        <div className="w-full h-full px-4 sm:px-6 lg:px-2 hidden md:flex items-center justify-end gap-2 border-b border-border">
          <div className="h-full flex items-center justify-center">
            <ThemeSlider buttonClassName="p-1" />
          </div>
          <div className="w-2/3 h-full flex items-center gap-0 font-mono font-bold lowercase text-sm capitalize">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full h-full flex items-center justify-center text-xs font-medium px-8 border-l border-border ${
                  pathname === item.href
                    ? "text-foreground decoration-1 line-through"
                    : "text-mutedForeground hover:line-through"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
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

export function NavBarGrid() {
  const pathname = usePathname();

  return (
    <nav className="z-50 sticky top-0 w-full h-8 py-0 m-auto bg-background">
      <div className="w-full h-full flex justify-between items-center gap-2">
        <Link href="/" className="w-fit h-full text-xl font-bold text-foreground hover:text-mutedForeground transition-colors">
          <LogoIcon className="w-fit h-full" />
        </Link>
        
        <div className="w-full h-full px-4 sm:px-6 lg:px-0 hidden md:flex items-center justify-end gap-0 border-b border-border">
          <div className="h-full flex items-center gap-0 font-mono text-sm capitalize">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`w-24 h-full flex items-center justify-center text-xs font-medium px-8 border-l border-border ${
                  pathname === item.href
                    ? "text-foreground decoration-1 line-through"
                    : "text-mutedForeground hover:line-through"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="h-full flex items-center justify-center border-l border-border">
            <ThemeToggle buttonClassName="p-2" />
          </div>
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

export function NavBarBasic() {
  const pathname = usePathname();

  return (
    <nav className="z-50 sticky top-0 w-full h-8 py-0 m-auto bg-background">
      <div className="w-full h-full flex justify-between items-center gap-2">
      <Link href="/" className="w-fit h-full text-xl font-bold text-foreground hover:text-mutedForeground transition-colors">
          <LogoIcon className="w-fit h-full" />
        </Link>
        
        <div className="w-full h-full px-4 sm:px-6 lg:px-2 hidden md:flex justify-end gap-8 border-b border-border">
          <div className="flex items-center gap-8 font-mono text-sm capitalize">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-medium px-4 ${
                  pathname === item.href
                    ? "text-foreground decoration-1 line-through"
                    : "text-mutedForeground hover:line-through"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle buttonClassName="p-1 rounded-full" />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle buttonClassName="" />
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

export function NavBarFloating() {
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
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm lowercase">
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
          <ThemeToggle buttonClassName="bg-accent p-2 rounded-full"/>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle buttonClassName="border-gray-500 border-1" />
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