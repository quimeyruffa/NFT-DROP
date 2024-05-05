import "./globals.css";
import type { Metadata } from "next";
import { ThirdwebProvider } from "./components/ThirdwebProvider";
import { Sepolia } from "@thirdweb-dev/chains";

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
    <ThirdwebProvider activeChain={Sepolia} clientId={process.env.CLIENT_ID}>
      <html lang="en">
        <body className={`${inter.variable} ${anton.variable}`}>
          {children}
        </body>
      </html>
    </ThirdwebProvider>
  );
}
