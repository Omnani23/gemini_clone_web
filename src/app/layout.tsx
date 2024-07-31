import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context/ContextProvider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

<<<<<<< HEAD
export const metadata = {
  title: "OmGPT",
  description: "Created by Om Prakash",
=======
export const metadata: Metadata = {
  title: "OmGPT",
  description: "created by Omprakash",
>>>>>>> 82eb9d0716173056c7f3ccf7321d1e3ebb63a1b6
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
