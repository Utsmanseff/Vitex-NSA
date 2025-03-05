"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Safety() {
  const [activeSection, setActiveSection] = useState<'safe' | 'caution' | null>(null);

  const safetyData = {
    safe: [
      {
        title: 'Obat Diabetes',
        shortDesc: 'Menstabilkan gula darah secara alami tanpa menurunkan terlalu drastis',
        medicines: ['Metformin', 'Acarbose'],
        fullDescription: `Vitex NSA menstabilkan gula darah secara alami tanpa menurunkan terlalu drastis. Aman diminum bersama, tetapi perlu pemantauan kadar gula darah agar tidak turun terlalu rendah (hipoglikemia).`
      },
      {
        title: 'Obat Kolesterol',
        shortDesc: 'Membantu menurunkan kolesterol jahat (LDL) dan meningkatkan HDL',
        medicines: ['Simvastatin', 'Atorvastatin'],
        fullDescription: `Vitex NSA juga membantu menurunkan kolesterol jahat (LDL) dan meningkatkan HDL. Bisa dikombinasikan, tetapi tetap perlu pemantauan efeknya agar dosis statin tidak perlu terlalu tinggi.`
      },
      {
        title: 'Obat Hipertensi',
        shortDesc: 'Membantu meningkatkan elastisitas pembuluh darah',
        medicines: ['Amlodipine', 'Captopril'],
        fullDescription: `Vitex NSA membantu meningkatkan elastisitas pembuluh darah & menurunkan tekanan darah. Bisa dikonsumsi bersama, tetapi tetap pantau tekanan darah agar tidak turun terlalu rendah.`
      },
      {
        title: 'Antibiotik',
        shortDesc: 'Memiliki efek antibakteri alami',
        medicines: ['Amoxicillin', 'Azithromycin'],
        fullDescription: `Vitex NSA memiliki efek antibakteri alami, sehingga bisa membantu mempercepat pemulihan. Tidak ada interaksi negatif dengan antibiotik, tetapi tetap perhatikan dosis antibiotiknya.`
      },
      {
        title: 'Obat Lambung',
        shortDesc: 'Menyeimbangkan asam lambung secara alami',
        medicines: ['Antasida', 'Omeprazole', 'Ranitidine'],
        fullDescription: `Vitex NSA membantu menyeimbangkan asam lambung secara alami tanpa membuatnya terlalu basa. Bisa dikombinasikan, tetapi jika pasien sudah merasa lebih baik, dosis obat lambung bisa dikurangi bertahap.`
      }
    ],
    caution: [
      {
        title: 'Obat Steroid & Imunosupresan',
        shortDesc: 'Potensi interaksi dengan sistem imun',
        medicines: ['Dexamethasone', 'Prednisone'],
        fullDescription: `Vitex NSA meningkatkan daya tahan tubuh, sedangkan steroid & imunosupresan menekan sistem imun. Jika diminum bersamaan, bisa mengurangi efektivitas obat steroid. Solusi: Jika pasien butuh steroid, dosis Vitex NSA sebaiknya dikurangi atau dikonsumsi di waktu berbeda.`
      },
      {
        title: 'Obat Pengencer Darah',
        shortDesc: 'Risiko peningkatan pendarahan',
        medicines: ['Warfarin', 'Aspirin', 'Clopidogrel'],
        fullDescription: `Vitex NSA bisa meningkatkan sirkulasi darah & mengurangi inflamasi pembuluh darah. Jika dikombinasikan, bisa meningkatkan risiko pendarahan jika dosisnya tidak diawasi. Solusi: Jika pasien menggunakan pengencer darah, mulai dengan dosis kecil Vitex NSA & pantau efeknya.`
      },
      {
        title: 'Obat Kemoterapi & Terapi Hormon',
        shortDesc: 'Potensi interaksi dengan terapi kanker',
        medicines: ['Obat Kemoterapi', 'Terapi Hormon Kanker'],
        fullDescription: `Vitex NSA bisa mempengaruhi hormon & daya tahan tubuh, yang bisa berinteraksi dengan beberapa obat kemoterapi. Pada kanker yang bergantung hormon (payudara, prostat, dll.), ada risiko Vitex mempengaruhi keseimbangan hormon terapi. Solusi: Jika sedang dalam kemoterapi, konsultasikan dulu sebelum mengonsumsi Vitex NSA.`
      },
      {
        title: 'Obat Antidepresan & Obat Tidur',
        shortDesc: 'Risiko perubahan efek obat psikotropika',
        medicines: ['Diazepam', 'Fluoxetine'],
        fullDescription: `Vitex NSA membantu menyeimbangkan serotonin & dopamin secara alami. Jika diminum bersama antidepresan, bisa menyebabkan efek samping seperti kantuk berlebihan atau perubahan mood. Solusi: Jika pasien sudah merasa lebih baik, dokter bisa mempertimbangkan untuk mengurangi dosis obat kimianya.`
      }
    ]
  };

  const renderSection = (type: 'safe' | 'caution') => {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white shadow-2xl rounded-2xl p-8 mt-6"
      >
        <h3 className={`text-2xl font-extrabold mb-6 text-center ${type === 'safe' ? 'text-green-700' : 'text-red-700'}`}>
          {type === 'safe' ? ' Obat yang Aman Dikonsumsi' : ' Obat yang Perlu Diwaspadai'}
        </h3>
        {safetyData[type].map((item, index) => (
          <div 
            key={index} 
            className={`mb-6 pb-6 border-b last:border-b-0 ${
              type === 'safe' ? 'border-green-100' : 'border-red-100'
            }`}
          >
            <h4 className={`text-xl font-bold mb-3 ${type === 'safe' ? 'text-green-600' : 'text-red-600'}`}>
              {item.title}
            </h4>
            <p className={`font-semibold mb-2 ${type === 'safe' ? 'text-green-500' : 'text-red-500'}`}>
              {item.shortDesc}
            </p>
            <div className="mb-3">
              <span className="font-bold text-black">Contoh Obat: </span>
              <span className="text-blue-700">{item.medicines.join(', ')}</span>
            </div>
            <p className={`${type === 'safe' ? 'text-green-800' : 'text-red-800'} font-medium`}>
              {item.fullDescription}
            </p>
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="safety" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-12 text-green-900">
          Panduan Keamanan Vitex NSA
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-6 mb-8">
            <button 
              onClick={() => setActiveSection(activeSection === 'safe' ? null : 'safe')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all shadow-lg ${
                activeSection === 'safe' 
                  ? 'bg-green-600 text-white scale-105' 
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
               Obat Aman
            </button>
            <button 
              onClick={() => setActiveSection(activeSection === 'caution' ? null : 'caution')}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all shadow-lg ${
                activeSection === 'caution' 
                  ? 'bg-red-600 text-white scale-105' 
                  : 'bg-red-100 text-red-800 hover:bg-red-200'
              }`}
            >
               Obat Berisiko
            </button>
          </div>

          <AnimatePresence>
            {activeSection === 'safe' && renderSection('safe')}
            {activeSection === 'caution' && renderSection('caution')}
          </AnimatePresence>

          {!activeSection && (
            <div className="text-center text-2xl font-bold text-green-900">
              Pilih Kategori untuk Melihat Detail Interaksi Obat
            </div>
          )}

          <div className="mt-10 bg-yellow-100 p-6 rounded-2xl text-center">
            <p className="text-xl font-bold text-yellow-900 mb-4"> Tips Penggunaan</p>
            <p className="text-yellow-800 font-semibold">
              Jika ragu, cara paling aman adalah memisahkan konsumsi Vitex NSA & obat kimia sekitar 2-3 jam. 
              Ini memberi waktu bagi tubuh untuk menyerap masing-masing dengan baik tanpa interaksi langsung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}