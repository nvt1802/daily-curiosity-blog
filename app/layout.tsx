import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { AppContextProvider } from "@/src/context/AppContext";
import Header from "@/src/components/header/Header";
import Global from "@/src/components/share/Global";
import FooterComponent from "@/src/components/footer/Footer";
import Newsletter from "@/src/components/Newsletter";
import { defaultMetadata } from "@/src/utils/constants/metadata";
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
          <Newsletter />
          <FooterComponent />
          <Global />
        </AppContextProvider>
      </body>
    </html>
  );
}
