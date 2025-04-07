"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const pathname = usePathname();

  const handleWhatsAppContact = () => {
    const whatsappNumber = '+6285796966254';
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

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const navLinks = [
    { title: "Beranda", href: "#home" },
    { title: "Tentang", href: "#about" },
    { title: "Produk", href: "#produk" },
    { title: "Panduan Keamanan", href: "#safety" }
  ];

  const handleNavigation = (href) => {
    setActiveSection(href);
    setMenuOpen(false);
  };

  return (
      <nav
        className="flex justify-between items-center px-6 py-4 fixed w-full top-0 z-50 transition-all duration-300 shadow-md bg-gradient-to-r from-green-300 to-green-500"
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
                  activeSection === link.href 
                    ? "text-blue-600" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => handleNavigation(link.href)}
              >
                {link.title}
                {activeSection === link.href && (
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
          <span className={`absolute h-0.5 w-6 ${menuOpen ? "bg-blue-600" : "bg-gray-700"} transform transition-all duration-300 ${
            menuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
          }`} />
          <span className={`absolute h-0.5 w-6 ${menuOpen ? "bg-blue-600" : "bg-gray-700"} top-3 transition-all duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`} />
          <span className={`absolute h-0.5 w-6 ${menuOpen ? "bg-blue-600" : "bg-gray-700"} transform transition-all duration-300 ${
            menuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
          }`} />
        </div>
      </button>
      
      {/* Mobile Menu - Fixed to always be solid regardless of scroll state */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 bg-white z-40 shadow-xl"
            style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }} // Force solid white background
          >
            <div className="flex flex-col h-full pt-20 pb-6">
              <div className="absolute top-6 left-6">
                <Link href="/" className="flex items-center space-x-2 group">
                  <Image 
                    src="/assets/img/v-logo.png" 
                    alt="logo" 
                    width={40} 
                    height={40}
                    className="w-auto h-8 group-hover:scale-105"
                    priority
                  />
                  <span className="font-bold text-gray-800">Vitex</span>
                </Link>
              </div>
              
              <motion.ul 
                className="flex flex-col p-6 space-y-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {}
                }}
              >
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.href}
                    variants={{
                      open: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.4, ease: "easeOut" }
                      },
                      closed: { 
                        opacity: 0, 
                        y: 20,
                        transition: { duration: 0.2 }
                      }
                    }}
                  >
                    <Link 
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-lg transition-all duration-300 ${
                        activeSection === link.href 
                          ? "bg-blue-100 text-blue-600 font-medium transform scale-105" 
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
                      }`}
                      onClick={() => handleNavigation(link.href)}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="mt-auto p-6 border-t border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <button 
                  onClick={handleWhatsAppContact}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Hubungi Kami
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}