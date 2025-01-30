// 'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderProvider, { HeaderContext, Providers, useHeader } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  // const { headerState } = useHeader()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <HeaderContext> */}
        {/* <Providers> */}
        {/* <useHeader> */}
        <HeaderProvider>
          {children}
        </HeaderProvider>
        {/* </useHeader> */}
        {/* </Providers> */}

        {/* </HeaderContext> */}
      </body>
    </html>
  );
}
