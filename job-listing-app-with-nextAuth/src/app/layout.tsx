// 'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./api/auth/components/SessionWrapper";
import { store } from './store'
import { Provider } from "react-redux";
import ReduxProvider from "./ReduxProvider";
import Nav from "./api/auth/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
    <SessionWrapper>
        <html lang="en">
          {/* <Nav /> */}
          <body className={inter.className}>{children}</body>
        </html>
    </SessionWrapper>
    </ReduxProvider>
  );
}
