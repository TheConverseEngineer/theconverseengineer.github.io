import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/navigation/site-header";
import "./globals.css";

// Apply the saved theme while HTML is parsed, before the first paint.
const themeInitializer = `(function(){try{var theme=localStorage.getItem("theme");if(theme==="light")document.documentElement.setAttribute("data-theme",theme)}catch(e){}})()`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vraj Parikh — Machine Learning & Systems Engineer",
  description: "Portfolio of Vraj Parikh, a machine learning and systems engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
      </head>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
