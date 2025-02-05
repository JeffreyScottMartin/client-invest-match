"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-md border-b border-lightGray/50 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-12">
        {/* Logo */}
        <Image
          src="/branding/logo-2@1x.png"
          alt="Invest Match Canada"
          width={150}
          height={40}
          priority
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 text-darkGray font-equivolition text-sm tracking-tight">
          <Link href="/" className="hover:text-lightGray transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-lightGray transition">
            About Us
          </Link>
          <Link href="/services" className="hover:text-lightGray transition">
            Services
          </Link>
          <Link href="/insights" className="hover:text-lightGray transition">
            Insights
          </Link>
          <Link
            href="/contact"
            className="ml-10 px-4 py-1 bg-brandDarkBlue text-white font-semibold rounded-full hover:bg-brandLightBlue transition"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 right-0 w-64 h-full font-equivolition text-sm tracking-tight text-darkGray bg-white shadow-lg p-6 flex flex-col space-y-6 lg:hidden"
        >
          <button className="self-end p-2" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
          <Link
            href="/"
            className="hover:text-lightGray transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-lightGray transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-lightGray transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/insights"
            className="hover:text-lightGray transition"
            onClick={() => setIsOpen(false)}
          >
            Insights
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="px-4 py-1 bg-brandDarkBlue text-white font-semibold rounded-full hover:bg-brandLightBlue transition text-center"
          >
            Get In Touch
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
