import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.scss";
import { AppContextProvider } from "@/context/AppContext";
import Header from "@/components/header/Header";
import Global from "@/components/share/Global";
import FooterComponent from "@/components/footer/Footer";
import { defaultMetadata } from "@/utils/constants/metadata";
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
  ...defaultMetadata,
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
        <AppContextProvider>
          <Header />
          {children}
          <FooterComponent />
          <Global />
        </AppContextProvider>
      </body>
    </html>
  );
}
