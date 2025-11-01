import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "YMMC - Yandex Music Mod Client",
  description:
    "Download the latest build of Yandex Music Mod Client. Enhanced features including Discord Rich Presence, Last.FM scrobbling, global hotkeys, and more.",
  keywords: [
    "Yandex Music",
    "mod",
    "client",
    "desktop",
    "Discord",
    "Last.FM",
    "music player",
  ],
  icons: {
    icon: "/icon256.png",
    apple: "/icon256.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
