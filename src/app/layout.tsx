import type { Metadata } from "next";
import {
  Lexend_Deca,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/language-context";
import Navbar from "./components/general/navbar";
// import { ThemeProvider } from "./components/general/theme-provider";

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
        className={`no-scrollbar bg-[#051923] antialiased custom-scrollbar ${lexendDeca.variable}`}
      >
        <LanguageProvider>
          <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
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
