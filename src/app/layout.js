import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/footer";
import localFont from "next/font/local";

const firaSans = Fira_Sans({
  weight: "400",
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "InvestMatch Canada",
  description:
    "At InvestMatch, we provide tailored solutions to help business owners overcome challenges and unlock growth potential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
