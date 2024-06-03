import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import DashboardNav from "@/components/common/dashboard-nav";
import ThemeProvider from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIE ENGINE",
  description: "DYNAMIC INTEGARTION ENGINE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <DashboardNav />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
