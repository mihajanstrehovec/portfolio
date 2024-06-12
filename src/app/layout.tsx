import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Gradients from "./components/Gradients";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miha Jan Strehovec",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      

      <body className="">
        {children}
        
        <Gradients/>
        <Footer/>
        </body>
    </html>
  );
}
