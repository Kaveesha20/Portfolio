import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaveesha | Computer Engineering Graduate | AI/ML Engineer",
  description: "Portfolio website of Kaveesha - Computer Engineering Graduate specializing in AI/ML, Full-Stack Development, and MLOps. View projects, skills, and experience.",
  keywords: ["Kaveesha", "AI Engineer", "Machine Learning", "Computer Engineering", "Portfolio", "Next.js", "MLOps"],
  authors: [{ name: "Kaveesha" }],
  openGraph: {
    title: "Kaveesha Nirmani| Computer Engineering Undergraduate ",
    description: "Portfolio website showcasing AI/ML projects and full-stack development work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}