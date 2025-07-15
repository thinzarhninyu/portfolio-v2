import type { Metadata } from "next";
import {
  Cormorant_Garamond, Urbanist, Goldman, Raleway, Didact_Gothic,
  Rubik,
  Cabin,
  Nunito_Sans,
  Questrial,
  Quicksand,
  DM_Sans,
  Cairo,
  Marcellus,
  Limelight,
  DM_Serif_Display,
  Righteous,
  Outfit,
  Space_Grotesk,
  Lexend_Deca,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/language-context";
import Navbar from "./components/general/navbar";
// import { ThemeProvider } from "./components/general/theme-provider";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const goldman = Goldman({
  variable: "--font-goldman",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const raleway = Raleway({
  variable: "--font-didact-gothic",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const didactGothic = Didact_Gothic({
  variable: "--font-didact-gothic",
  subsets: ["latin"],
  weight: ["400"],
});

export const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const limelight = Limelight({
  variable: "--font-limelight",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Thinzar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`no-scrollbar bg-[#051923] antialiased custom-scrollbar
    ${cairo.variable} ${urbanist.variable} ${goldman.variable}
    ${dmSans.variable} ${raleway.variable} ${quicksand.variable} ${lexendDeca.variable}
    ${cormorantGaramond.variable} ${didactGothic.variable} ${spaceGrotesk.variable}
    ${rubik.variable} ${cabin.variable} ${nunitoSans.variable} ${marcellus.variable} ${limelight.variable} ${dmSerifDisplay.variable} ${righteous.variable} ${outfit.variable}`}
      >
        <LanguageProvider>
          <header className="fixed top-0 left-0 w-full z-[100] bg-[#051923]/80 backdrop-blur-md">
            <Navbar />
          </header>
          <main className="">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
