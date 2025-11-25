// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
import { AnalyticsProvider } from "./analytics-provider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Vo Ngoc Quynh Mai · Frontend Developer",
  description:
    "Frontend Developer specializing in React, TypeScript, and scalable web applications. Experience in learning platforms, campaign management, logistics and enterprise tools.",
  openGraph: {
    title: "Vo Ngoc Quynh Mai · Frontend Developer",
    description:
      "Frontend Developer specializing in React, TypeScript, and scalable web applications.",
    url: "https://vongocquynhmai.vercel.app",
    siteName: "Vo Ngoc Quynh Mai Portfolio",
    type: "website",
    images: ["https://vongocquynhmai.vercel.app/img/avatar-3.jpg"],
    emails: ["vnqmai01@gmailcom"],
  },
  alternates: {
    canonical: "https://vongocquynhmai.vercel.app",
  },
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "Vo Ngoc Quynh Mai",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "E-learning",
    "Campaign Management",
    "Logistics Tools",
    "Enterprise Applications",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
