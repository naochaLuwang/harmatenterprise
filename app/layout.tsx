import Heading from "@/components/Heading";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Social from "@/components/Social";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Harmat Enterprise Pvt. Ltd",
  description: "Hermat Enterprise Pvt. Ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Heading />
        <Header />
        {children}
        <Footer />
        <Social />
      </body>
    </html>
  );
}
