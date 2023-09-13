import "./globals.css";
import type { Metadata } from "next";
import {  Goerli, ThirdwebProvider } from "./components/ThirdwebProvider";

import { Anton, Inter } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ARTEOFYOU",
  description: "NFT DROP APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider activeChain={Goerli} clientId={process.env.CLIENT_ID}>
      <html lang="en">
        <body className={`${inter.variable} ${anton.variable}`}>
          {children}
        </body>
      </html>
    </ThirdwebProvider>
  );
}
