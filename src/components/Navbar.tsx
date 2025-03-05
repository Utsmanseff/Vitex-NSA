"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleWhatsAppContact = () => {
    const whatsappNumber = '+6282352734167';
    const waLink = `https://wa.me/${whatsappNumber}`;
    window.open(waLink, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or when route changes
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest("nav")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { title: "Beranda", href: "#home" },
    { title: "Tentang", href: "#about" },
    { title: "Produk", href: "#produk" },
    { title: "Panduan Keamanan", href: "#safety" }
  ];

  const isActive = (href) => pathname === href || pathname === "/" && href === "#home";

  return (
    <nav 
      className={`flex justify-between items-center px-6 py-4 fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
          : "bg-white/80 shadow-md py-4"
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <Image 
            src="/assets/img/v-logo.png" 
            alt="logo" 
            width={50} 
            height={50}
            className={`w-auto transition-all duration-300 ${scrolled ? "h-8" : "h-10"} group-hover:scale-105`}
            priority
          />
          <span className="font-bold text-gray-800 hidden sm:block">Vitex</span>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:items-center">
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`relative px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href) 
                    ? "text-blue-600" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.title}
                {isActive(link.href) && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <button 
          onClick={handleWhatsAppContact}
          className="ml-8 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md"
        >
          Hubungi Kami
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }} 
        className="lg:hidden text-gray-700 focus:outline-none z-50"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <div className="relative w-6 h-6">
          <span className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ${
            menuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
          }`} />
          <span className={`absolute h-0.5 w-6 bg-gray-700 top-3 transition-all duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`} />
          <span className={`absolute h-0.5 w-6 bg-gray-700 transform transition-all duration-300 ${
            menuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
          }`} />
        </div>
      </button>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 bg-white z-40 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <ul className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-lg transition-colors ${
                        isActive(link.href) 
                          ? "bg-blue-50 text-blue-600 font-medium" 
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-6 border-t">
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}