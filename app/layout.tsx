import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "@/lib/Prividers";

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate Admin Dash Board",
  description: "Real Estate Admin Dash Board",
  icons: '/logo.svg'
};

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <body className={inter.className}>
            <Providers>
              {children}
            </Providers>
          </body>
        </html>
  );
}
