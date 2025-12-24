import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import "./globals.css";

// 1. Setup the font with specific subsets to look sharp
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "A minimalist gallery template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <ThemeProvider attribute="class">

          {/* MAIN CONTENT WRAPPER */}
          {/* pt-24 pushes content down so it doesn't hide behind the header */}
          <main className="min-h-screen pt-16 px-4 pb-20 md:px-6">
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}