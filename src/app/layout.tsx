// "use client";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { AppProvider } from "@/context/AppContext";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoMono.className}>
      <body >
        <ThemeProvider>
          <AppProvider >{children}</AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
