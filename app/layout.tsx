import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HTML CSS JS",
  description: "It is a simple code editor for HTML, CSS, and JavaScript. You can write your code and see the output in real-time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background antialiased",
          inter.className
        )}>{children}</body>
    </html>
  );
}
