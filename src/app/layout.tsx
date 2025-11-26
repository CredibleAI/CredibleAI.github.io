import type { Metadata } from "next";
import { Roboto_Mono, Lexend_Deca } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "CCAI - Centre for Credible Artificial Intelligence",
  description: "We make AI understandable, verifiable, and controllable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${lexendDeca.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
