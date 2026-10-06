import type { Metadata } from "next";
import { Caveat, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Anuj Negi · Senior Software Engineer",
  description:
    "Anuj Negi, senior software engineer with 6 years across web, mobile (React Native) and TV apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-bg text-ink font-sans selection:bg-teal selection:text-white">
        {children}
      </body>
    </html>
  );
}
