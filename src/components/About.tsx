"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Memastikan elemen terlihat bahkan jika IntersectionObserver gagal
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-24 px-6 bg-gradient-to-b from-white to-green-50 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/img/about.png"
                  alt="Tentang Vitex NSA"
                  width={500}
                  height={500}
                  className="transform transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 text-left order-1 md:order-2">
            <h2 className="text-3xl text-black md:text-4xl font-bold mb-6 relative inline-block">
              Tentang Vitex
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-green-500"></span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Vitex NSA diolah dari daun, akar, dan batang tanaman herbal pilihan yang telah lama digunakan dalam pengobatan tradisional turun-temurun. Dengan metode ekstraksi modern, produk ini menjaga kemurnian dan kandungan alami tanaman sehingga tetap aman dan efektif untuk dikonsumsi.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-black font-semibold text-lg">100% Bahan Alami</h3>
                  <p className="text-gray-600">Terbuat dari bahan herbal pilihan tanpa tambahan bahan kimia berbahaya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.104 0 2-.896 2-2V4m0 4a2 2 0 01-2 2m0 0a2 2 0 01-2-2m2 2v2m-4-2a4 4 0 008 0m-8 0h8" />
                </svg>
                </div>
                <div>
                <h3 className="text-black font-semibold text-lg">Mendukung Kesehatan Optimal</h3>
                <p className="text-gray-600">Membantu menjaga daya tahan tubuh, meningkatkan energi, dan mendukung keseimbangan tubuh secara alami.</p>
                </div>
            </div>
              
            <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6m12 0c0 3.314-2.686 6-6 6m6-6c0-3.314-2.686-6-6-6m0 12c-3.314 0-6-2.686-6-6m6 6c-3.314 0-6-2.686-6-6m0 0H6m0 0c0-3.314 2.686-6 6-6" />
                </svg>
                </div>
                <div>
                <h3 className="text-black font-semibold text-lg">Bebas Zat Tambahan Berbahaya</h3>
                <p className="text-gray-600">Tanpa pewarna, pengawet, atau bahan kimia sintetis yang berpotensi merugikan kesehatan.</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}