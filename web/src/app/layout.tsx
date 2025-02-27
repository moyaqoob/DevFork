import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Blob from "@/components/blob";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:{
    template: "%s - Git Fork",
    default: "Git Fork",
  },
  description: "Seperate your forks from your main repository",
  keywords: ["git", "fork", "github", "Repositories", "stars"],
  authors: [{name: "ofcljaved", url: "https://ofcljaved.com"}],
  openGraph: {
    title: "Git Fork | View Github Repositories",
    description: "Seperate your forks from your main repository",
    type: "website",
    siteName: "Git Fork",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="[scrollbar-gutter:stable]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Blob />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <main className="relative min-h-svh max-w-screen-xl mx-auto p-3 md:p-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
