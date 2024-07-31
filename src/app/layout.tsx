import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context/ContextProvider";
import { ReactNode } from "react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OmGPT",
  description: "created by Omprakash",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
