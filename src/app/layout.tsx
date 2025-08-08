import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Inter, Noto_Sans, Open_Sans, Roboto,
  Roboto_Mono, DM_Mono, IBM_Plex_Mono, JetBrains_Mono,
  Silkscreen, Tiny5, Micro_5, Archivo_Black, Libre_Barcode_128
} from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
//import { NavBar, NavBarFloating, NavBarBasic, NavBarGrid } from "@/components/NavBar";
//import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Local fonts
const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
});

const uncutSans = localFont({
  src: "./fonts/UncutSans-Variable.woff2",
  variable: "--font-uncut-sans",
});

const psygen = localFont({
  src: "./fonts/Psygen.otf",
  variable: "--font-psygen",
});

const murmure = localFont({
  src: "./fonts/LeMurmure-Regular.woff2",
  variable: "--font-murmure",
});

const code7x5 = localFont({
  src: "./fonts/Code7x5.ttf",
  variable: "--font-code7x5",
});

const bpDotsSquareBold = localFont({
  src: "./fonts/BPdotsSquareBold.otf",
  variable: "--font-bp-dots-square-bold",
});

const unifontExMono = localFont({
  src: "./fonts/Unifontexmono.ttf",
  variable: "--font-unifont-ex-mono",
});


// Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const tiny5 = Tiny5({
  variable: "--font-tiny5",
  subsets: ["latin"],
  weight: ["400"],
});

const micro5 = Micro_5({
  variable: "--font-micro5",
  subsets: ["latin"],
  weight: ["400"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: ["400"],
});

const libreBarcode128 = Libre_Barcode_128({
  variable: "--font-libre-barcode-128",
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "Lilian Zhao",
  description: "hello friend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${satoshi.variable} ${uncutSans.variable} ${psygen.variable} ${murmure.variable} ${code7x5.variable} ${bpDotsSquareBold.variable} ${unifontExMono.variable}
          ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${notoSans.variable} ${openSans.variable} ${roboto.variable}
          ${robotoMono.variable} ${dmMono.variable} ${ibmPlexMono.variable} ${jetbrainsMono.variable}
          ${silkscreen.variable} ${tiny5.variable} ${micro5.variable} ${archivoBlack.variable} ${libreBarcode128.variable}
      `}
    >
      <body className="antialiased">
        <ThemeProvider>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
