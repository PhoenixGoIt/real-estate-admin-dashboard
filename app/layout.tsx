import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/context/Prividers";
import dynamic from "next/dynamic";

const UserProvider = dynamic(() => import("@/lib/context/UserProvider"), {
  ssr: false,
});

const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yagira Admin Dash Board",
  description: "Real Estate Admin Dash Board",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <UserProvider>{children}</UserProvider>
        </Providers>
      </body>
    </html>
  );
}
