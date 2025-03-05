"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function VitexNSAResults() {
  const [activeTab, setActiveTab] = useState('overview');

  const resultSections = [
    {
      id: 'diabetes',
      title: 'Diabetes & Penyembuhan Luka Kronis',
      description: 'Efektif untuk penderita diabetes, terutama yang mengalami luka sulit sembuh (misalnya luka diabetes).',
      keyCompounds: [
        { name: 'Lauric Acid & Oleic Acid', effect: 'Antiinflamasi & Antibakteri → Mencegah infeksi pada luka' },
        { name: 'Ethyl Palmitate & Ethyl Stearate', effect: 'Regenerasi sel & mempercepat penyembuhan jaringan' }
      ],
      benefits: [
        'Stabilisasi gula darah',
        'Membantu meningkatkan sensitivitas insulin',
        'Mengurangi peradangan kronis'
      ]
    },
    {
      id: 'stomach',
      title: 'Asam Lambung, Nyeri Lambung, & Keracunan Makanan',
      description: 'Membantu penderita asam lambung & maag, bahkan bisa mengatasi keracunan makanan.',
      keyCompounds: [
        { name: 'Lauric Acid', effect: 'Antibakteri kuat → Membunuh Helicobacter pylori (bakteri penyebab maag)' },
        { name: 'Oleic Acid', effect: 'Mengurangi iritasi lambung & menenangkan mukosa lambung' },
        { name: 'Palmitic Acid & Ethyl Esters', effect: 'Melindungi mukosa lambung dari asam berlebih & mempercepat penyembuhan luka lambung' }
      ],
      benefits: [
        'Mengatasi masalah asam lambung',
        'Melindungi mukosa lambung',
        'Membantu penyembuhan luka lambung'
      ]
    },
    {
      id: 'digestive',
      title: 'Diare & Muntah Berlebihan',
      description: 'Sangat efektif untuk penderita diare & muntah karena menyeimbangkan bakteri usus.',
      keyCompounds: [
        { name: 'Lauric Acid & Ethyl Laurate', effect: 'Membunuh bakteri penyebab diare (E. coli, Salmonella)' },
        { name: 'Oleic Acid', effect: 'Mengendurkan otot usus & mencegah kejang usus (mencegah diare kronis)' },
        { name: 'Palmitic Acid', effect: 'Mempercepat regenerasi sel usus yang rusak' }
      ],
      benefits: [
        'Menyeimbangkan bakteri usus',
        'Mencegah diare kronis',
        'Mengurangi muntah berlebihan'
      ]
    },
    {
      id: 'heart',
      title: 'Jantung Bengkak & Kesehatan Kardiovaskular',
      description: 'Baik untuk penderita jantung bengkak & masalah jantung lainnya.',
      keyCompounds: [
        { name: 'Lauric Acid & Oleic Acid', effect: 'Menurunkan kolesterol jahat (LDL) & meningkatkan kolesterol baik (HDL)' },
        { name: 'Palmitic Acid & Ethyl Esters', effect: 'Menjaga elastisitas pembuluh darah & mencegah penyumbatan' },
        { name: 'Antioksidan', effect: 'Melindungi sel jantung dari kerusakan akibat radikal bebas' }
      ],
      benefits: [
        'Menurunkan risiko penyakit kardiovaskular',
        'Meningkatkan kesehatan pembuluh darah',
        'Memberikan perlindungan antioksidan'
      ]
    }
  ];

  const additionalBenefits = [
    {
      title: 'Gangguan Saraf & Stres Oksidatif',
      description: 'Potensi membantu penderita gangguan memori',
      compounds: ['Oleic Acid', 'Lauric Acid'],
      details: 'Membantu melindungi sel saraf dan meningkatkan fungsi otak. Potensi untuk membantu penderita Alzheimer atau gangguan memori.'
    },
    {
      title: 'Peradangan Kronis & Penyakit Autoimun',
      description: 'Efek antiinflamasi untuk berbagai kondisi',
      compounds: ['Lauric Acid', 'Ethyl Esters'],
      details: 'Memiliki efek antiinflamasi kuat yang bisa membantu penderita radang sendi (arthritis), lupus, dan gangguan autoimun lainnya.'
    },
    {
      title: 'Fungsi Hati & Detoksifikasi',
      description: 'Membantu membersihkan racun dan regenerasi sel hati',
      compounds: ['Oleic Acid', 'Palmitic Acid'],
      details: 'Dapat membantu membersihkan racun dari hati dan mendukung regenerasi sel hati, cocok untuk penderita gangguan hati seperti fatty liver.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-green-600 text-white py-6 px-4">
            <h2 className="text-3xl font-bold text-center">
              Ringkasan Efektivitas <span className="text-yellow-300">Vitex NSA</span>
            </h2>
          </div>
          
          <div className="p-6">
            <div className="flex mb-6 border-b">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`flex-1 py-2 font-semibold ${activeTab === 'overview' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
              >
                Tinjauan Utama
              </button>
              <button 
                onClick={() => setActiveTab('additional')}
                className={`flex-1 py-2 font-semibold ${activeTab === 'additional' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
              >
                Manfaat Tambahan
              </button>
            </div>
            
            {activeTab === 'overview' && (
              <div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <p className="text-yellow-800 font-medium">
                    Catatan Penting: Seluruh kesimpulan berikut didasarkan pada hasil uji laboratorium komprehensif menggunakan metode GC-MS (Gas Chromatography-Mass Spectrometry) yang menganalisis komposisi dan potensi senyawa dalam Vitex NSA.
                  </p>
                </div>
                {resultSections.map((section) => (
                  <motion.div 
                    key={section.id} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 p-6 bg-green-50 rounded-xl border border-green-100"
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-green-600">Senyawa Kunci:</h4>
                        {section.keyCompounds.map((compound, index) => (
                          <div key={index} className="mb-3">
                            <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm font-medium mb-2 inline-block">
                              {compound.name}
                            </span>
                            <p className="text-sm text-gray-700">{compound.effect}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3 text-green-600">Manfaat:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {section.benefits.map((benefit, index) => (
                            <li 
                              key={index} 
                              className="text-sm text-gray-700"
                            >
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {activeTab === 'additional' && (
              <div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <p className="text-yellow-800 font-medium">
                    Berdasarkan analisis mendalam GC-MS, kami menemukan potensi manfaat tambahan yang belum sepenuhnya dieksplor sebelumnya.
                  </p>
                </div>
                <div className="space-y-6">
                  {additionalBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-green-50 p-6 rounded-xl border border-green-100"
                    >
                      <h3 className="text-2xl font-semibold mb-3 text-green-700">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{benefit.description}</p>
                      <p className="text-gray-700 mb-4">{benefit.details}</p>
                      <div className="flex gap-2">
                        {benefit.compounds.map((compound) => (
                          <span 
                            key={compound} 
                            className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm font-medium"
                          >
                            {compound}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600 italic">
                Kesimpulan Akhir: Vitex NSA bukan hanya efektif untuk diabetes, asam lambung, diare, dan jantung, tetapi juga berpotensi membantu gangguan saraf, peradangan kronis, dan detoksifikasi hati.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}