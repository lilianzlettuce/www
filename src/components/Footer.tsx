import Link from "next/link";

import { FooterLogoIcon } from "@/components/svg/Icons";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-screen h-[80vh] px-2 py-1 flex flex-col justify-between bg-background">
        <div className="w-full py-8 border-t border-border ">
            <FooterLogoIcon className="w-full h-full scale-x-100 text-foreground" />
        </div>
        <div className="w-full flex justify-between items-center border-t border-border font-medium text-sm text-mutedForeground">
            <p className="">
                Made with the blood of a thousand (hypothetical) men.
            </p>
            <div className="flex items-center gap-4">
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
            <p className="">
                &copy; {new Date().getFullYear()} LETTUCEMEAT.
            </p>
        </div>
    </footer>
  );
}