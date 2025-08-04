"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LogoIcon } from "@/components/Icons";
import { ThemeToggle, ThemeSlider } from "@/components/ThemeToggle";
import { navItems } from "@/lib/data";
import ZoomableImage from "./ZoomableImage";
import { useLiveTime } from "@/hooks/useUserInfo";

type NavBarProps = {
  className?: string;
}

export function SideBar3({ className }: NavBarProps) {
  const pathname = usePathname();
  const currentTime = useLiveTime();

  return (
    <nav className={`${className} z-50 sticky top-0 left-0 min-w-50 h-screen py-2 bg-background`}>
      <div className="w-full h-full border-r border-border p-0 flex flex-col justify-between">
        <div className="w-full h-full flex flex-col justify-start items-center gap-0">
          <div className="w-full flex items-center justify-end gap-2 text-xs text-muted-foreground px-2">
            <ThemeSlider buttonClassName="p-1" />
            <div className="min-w-fit flex justify-between">
              <span className="font-mono">{currentTime}</span>
            </div>
          </div>

          <div className="w-full hidden md:flex flex-col items-start justify-end gap-2">
            <div className="w-full h-40 p-2">
              <div className="w-full h-full bg-white border-1 border-secondary-foreground">
                <ZoomableImage
                  className="w-full h-full"
                  src="/img/halftone/heart.png"
                  alt="zoomed halftone heart image"
                  backgroundSize={500}
                  initialX={-215}
                  initialY={-55}
                  draggable={false}
                />
              </div>
            </div>
            <div className="w-full h-fit flex flex-col items-center gap-0 font-mono font-bold lowercase text-sm capitalize">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group/link w-full h-10 flex items-center justify-start text-xs font-medium px-0 border-b-0 border-border ${
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="font-inter mx-4">↳</span> 
                  <span className={`grow group-hover/link:line-through ${pathname === item.href ? "line-through" : ""}`}> {item.label}</span>
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

        {/* Bottom content */}
        <div className="px-2 w-full flex flex-col items-center justify-start border--1 border-secondary">
          
          <Link href="/" className="w-full h-8 p-0 text-muted">
            <LogoIcon className="w-full h-full" />
          </Link>
        </div>
      </div>
    </nav>
  );
} 

export function SideBar2({ className }: NavBarProps) {
  const pathname = usePathname();
  const currentTime = useLiveTime();

  return (
    <nav className={`${className} z-50 sticky top-0 left-0 min-w-50 h-screen py-2 bg-background`}>
      <div className="w-full h-full border-r border-border p-0 flex flex-col justify-between">
        <div className="w-full h-full flex flex-col justify-start items-center gap-0">
          <Link href="/" className="w-full h-8 px-2 py-0">
            <LogoIcon className="w-full h-full" />
          </Link>
          
          <div className="w-full hidden md:flex flex-col items-start justify-end gap-2">
            <div className="w-full h-40 p-2">
              <div className="w-full h-full bg-white border-1 border-secondary-foreground">
                <ZoomableImage
                  className="w-full h-full"
                  src="/img/halftone/heart.png"
                  alt="zoomed halftone heart image"
                  backgroundSize={500}
                  initialX={-215}
                  initialY={-55}
                  draggable={false}
                />
              </div>
            </div>
            <div className="w-full h-fit flex flex-col items-center gap-0 font-mono font-bold lowercase text-sm capitalize">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group/link w-full h-10 flex items-center justify-start text-xs font-medium px-0 border-b-0 border-border ${
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="font-inter mx-4">↳</span> 
                  <span className={`grow group-hover/link:line-through ${pathname === item.href ? "line-through" : ""}`}> {item.label}</span>
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

        {/* Bottom content */}
        <div className="px-2 w-full flex flex-col items-center justify-start border--1 border-secondary">
          <div className="w-full flex items-center justify-end gap-2 text-xs text-muted-foreground">
            <ThemeSlider buttonClassName="p-1" />
            <div className="min-w-fit flex justify-between">
              <span className="font-mono">{currentTime}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 

export function SideBar({ className }: NavBarProps) {
  const pathname = usePathname();
  const currentTime = useLiveTime();

  return (
    <nav className={`${className} z-50 sticky top-0 left-0 h-screen py-2 bg-background`}>
      <div className="w-full h-full border-r border-border p-0 flex flex-col justify-between">
        <div className="w-full h-full flex flex-col justify-start items-center gap-0">
          <Link href="/" className="w-full h-8 px-2 py-0">
            <LogoIcon className="w-full h-full" />
          </Link>
          
          <div className="w-full hidden md:flex flex-col items-start justify-end gap-2">
            <div className="w-full h-40 p-2">
              <div className="w-full h-full bg-white border-1 border-secondary-foreground">
                <ZoomableImage
                  className="w-full h-full"
                  src="/img/halftone/heart.png"
                  alt="zoomed halftone heart image"
                  backgroundSize={500}
                  initialX={-215}
                  initialY={-55}
                  draggable={false}
                />
              </div>
            </div>
            <div className="px-4 py-2 w-full flex items-center justify-start border-y-1 border-secondary">
              <ThemeSlider buttonClassName="p-1" />
            </div>
            <div className="w-full h-fit flex flex-col items-center gap-0 font-mono font-bold lowercase text-sm capitalize">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group/link w-full h-10 flex items-center justify-start text-xs font-medium px-0 border-b-1 border-secondary ${
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="font-inter mx-4">↳</span> 
                  <span className={`grow group-hover/link:line-through ${pathname === item.href ? "line-through" : ""}`}> {item.label}</span>
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

        {/* Bottom content */}
        <div className="w-full h-10 px-2 flex flex-col items-start justify-end border-t-0 border-border">
          <div className="w-full flex justify-end text-xs text-muted-foreground">
            <div className="flex justify-between">
              <span className="font-mono">{currentTime}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
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
          <div className="w-28 h-full flex items-center justify-center">
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