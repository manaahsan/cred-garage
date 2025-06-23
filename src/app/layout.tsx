"use client";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { AppProvider } from "@/context/AppContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppProvider >{children}</AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
