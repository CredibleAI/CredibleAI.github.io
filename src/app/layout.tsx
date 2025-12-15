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
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  openGraph: {
    title: "CCAI - Centre for Credible Artificial Intelligence",
    description: "We make AI understandable, verifiable, and controllable.",
    images: [
      {
        url: "/images/social-preview.png",
        width: 1336,
        height: 768,
        alt: "Decode AI graphic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCAI - Centre for Credible Artificial Intelligence",
    description: "We make AI understandable, verifiable, and controllable.",
    images: ["/images/social-preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
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
