// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vo Ngoc Quynh Mai · Frontend Developer",
  description:
    "Frontend Developer specializing in React, TypeScript, and scalable web applications. Experience in learning platforms, campaign management, logistics and enterprise tools.",
  openGraph: {
    title: "Vo Ngoc Quynh Mai · Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, and scalable web applications.",
    url: "https://your-domain.com",
    siteName: "Vo Ngoc Quynh Mai Portfolio",
    type: "website"
  },
  alternates: {
    canonical: "https://your-domain.com"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
