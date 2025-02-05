import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/ui/navbar";

const firaSans = Fira_Sans({
  weight: "400",
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Invest Match Canada - Staging",
  description: "Invest Match Canada - Staging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
