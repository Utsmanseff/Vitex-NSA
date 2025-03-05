"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleWhatsAppContact = () => {
    const whatsappNumber = '+6285796966254';
    const waLink = `https://wa.me/${whatsappNumber}`;
    window.open(waLink, '_blank');
  };
  
  return (
    <header id="home" className="flex flex-col md:flex-row items-center justify-between px-8 py-28 bg-gradient-to-br from-green-500 to-green-700 text-white min-h-[90vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left md:pr-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          VITEX <span className="text-yellow-300">NSA</span>
        </h1>
        <p className="text-lg md:text-xl font-light max-w-xl leading-relaxed mb-8 text-green-50">
        Vitex NSA diproduksi dari bahan-bahan pilihan untuk menjamin keamanan dan efektivitasnya. Produk ini tidak disarankan untuk penderita obesitas, penyakit autoimun, serta wanita yang sedang menyusui.
        </p>
        <motion.button 
          onClick={handleWhatsAppContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`group relative overflow-hidden rounded-full px-8 py-3.5 font-medium transition-all duration-300 
                     ${isHovered ? 'bg-white text-green-700' : 'bg-green-800 text-white hover:shadow-xl'}`}
        >
          <span className="relative z-10 flex items-center gap-2">
            INFORMASI LEBIH LANJUT
            <svg className={`w-5 h-5 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-400 to-green-400 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
      >
        <div className="relative">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="relative z-10"
          >
            <Image
              src="/assets/img/produk.png"
              alt="produk Vitex NSA"
              width={300}
              height={300}
              className="drop-shadow-2xl"
            />
          </motion.div>
          <div className="absolute -inset-4 rounded-full bg-white/10 backdrop-blur-md -z-10"></div>
          <div className="absolute -bottom-6 -inset-x-16 h-12 bg-black/10 blur-xl rounded-full -z-20"></div>
        </div>
      </motion.div>
    </header>
  );
}