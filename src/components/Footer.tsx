import Link from "next/link";

import { FooterLogoIcon } from "@/components/svg/Icons";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-screen h-fit [60vh] sm:h-[80vh] px-2 py-1 flex flex-col justify-between bg-background">
        <div className="w-full py-8 border-t border-border ">
            <FooterLogoIcon className="w-full h-full scale-x-100 rotate-z-180 text-foreground" />
        </div>
        <div className="flex flex-col sm:hidden">
            <div className="w-full flex justify-between gap-4">
                {socialLinks.map((link) => (
                    <Link key={link.href} 
                        href={link.href}
                        target="_blank"
                        className="hover:line-through"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="w-full flex justify-between items-center border-t border-border font-medium text-xs">
                &copy; {new Date().getFullYear()} LETTUCEMEAT.
            </div>
            <div className="w-full flex justify-between items-center border-t border-border font-medium text-xs">
                Made with more bones than you can eat.
            </div>
        </div>
        <div className="hidden sm:block">
            <div className="w-full flex justify-between items-center border-t border-border font-medium text-xs">
                <div className="">
                    Made with more bones than you can eat.
                </div>
                <div className="hidden sm:flex items-center gap-4">
                    {socialLinks.map((link) => (
                        <Link key={link.href} 
                            href={link.href}
                            target="_blank"
                            className="hover:line-through"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="">
                    &copy; {new Date().getFullYear()} LETTUCEMEAT.
                </div>
            </div>
        </div>
    </footer>
  );
}