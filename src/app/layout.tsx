import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgeStore";
import ClientWrapper from "./clientWarp";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "akasia",
  description: "library",
  icons: "/icon/Error_Symbol2.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>
          <EdgeStoreProvider>
            {children} 
            <Analytics />
            <SpeedInsights />
          </EdgeStoreProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
