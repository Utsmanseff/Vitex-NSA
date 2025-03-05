"use client";

import { useState } from 'react';
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const products = [
    { 
      img: "/assets/img/kekebalan.jpg", 
      title: "Meningkatkan Kekebalan Tubuh", 
      desc: "Membantu memperkuat imun.",
      details: "Vitex NSA mengandung bahan-bahan alami yang dapat memperkuat sistem imun tubuh, membantu Anda tetap sehat dan terhindar dari berbagai penyakit."
    },
    { 
      img: "/assets/img/aliran-darah.jpg", 
      title: "Memperlancar Aliran Darah", 
      desc: "Mencegah penyakit jantung.",
      details: "Kandungan antioksidan dalam Vitex NSA membantu memperlancar aliran darah dan menjaga kesehatan jantung Anda secara optimal."
    },
    { 
      img: "/assets/img/gula-darah.jpg", 
      title: "Menstabilkan Gula Darah", 
      desc: "Membantu penderita diabetes.",
      details: "Vitex NSA telah terbukti membantu menstabilkan kadar gula darah, sehingga sangat bermanfaat bagi penderita diabetes."
    },
    { 
      img: "/assets/img/luka.jpg", 
      title: "Mempercepat Penyembuhan Luka", 
      desc: "Membantu proses pemulihan.",
      details: "Vitex NSA mendukung regenerasi jaringan tubuh yang rusak, mempercepat penyembuhan luka luar maupun luka dalam seperti sariawan."
    },
    { 
      img: "/assets/img/pencernaan.jpg", 
      title: "Meningkatkan Kesehatan Pencernaan", 
      desc: "Meredakan masalah pencernaan.",
      details: "Vitex NSA membantu meredakan gangguan pencernaan seperti diare, muntah, dan nyeri lambung akibat maag dan asam lambung."
    },
    { 
      img: "/assets/img/nyeri.jpg", 
      title: "Meredakan Nyeri", 
      desc: "Membantu mengurangi rasa sakit.",
      details: "Vitex NSA berperan dalam mengurangi berbagai jenis nyeri, seperti nyeri batu ginjal, sakit kepala akibat lambung, nyeri asam urat, dan rematik."
    }
  ];
  

export default function Product() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
          Kenapa <span className="text-green-600">Vitex NSA</span>?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Produk berkualitas dengan manfaat kesehatan yang telah terbukti
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                activeIndex === index ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-start mb-3">
                  <div className="h-10 w-10 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                
                {activeIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100 opacity-100 transition-opacity duration-300">
                    <p className="text-gray-700">{product.details}</p>
                  </div>
                )}
                
                <button className="mt-3 group inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800">
                  {activeIndex === index ? 'Sembunyikan Detail' : 'Lihat Detail'}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}