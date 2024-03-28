import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SportDATA Web App",
  description:
    "Sport App fetches data from different API-s about sport championships, matches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-2 md:px-16 md:py-2 text-textPrimary">
          <Navbar />
          <section className="flex spaxe-x-4">
            <Sidebar />
            {children}
            {/* news */}
          </section>
        </main>
      </body>
    </html>
  );
}
