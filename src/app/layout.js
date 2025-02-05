import { Fira_Sans, Inter } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  weight: "400",
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Invest Match Canada - Staging",
  description: "Invest Match Canada - Staging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
