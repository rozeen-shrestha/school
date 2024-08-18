import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NAVBAR from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
        <body className={inter.className}>
        <NextUIProvider>
          <NAVBAR/>
          {children}
          <Footer/>
          </NextUIProvider>
        </body>
        
      
    </html>
  );
}
