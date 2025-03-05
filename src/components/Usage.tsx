"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function VitexNSADosage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const dosageSections = [
    {
      title: "Dosis untuk Anak-anak",
      id: "children",
      note: "Minimal usia 3 tahun, berat badan 10 kg",
      details: [
        "Jika mengalami sakit perut akibat keracunan makanan, dapat diberikan tambahan 2-3 tetes.",
        "Durasi tunggu: 15-25 menit untuk melihat efeknya."
      ]
    },
    {
      title: "Dosis untuk Dewasa",
      id: "adults",
      details: [
        "Perawatan harian:",
        "Pagi: 2-3 tetes.",
        "Malam: 2-3 tetes sebelum tidur (total harian: 6 tetes)."
      ]
    },
    {
      title: "Penderita Diabetes",
      id: "diabetes",
      details: [
        "Pagi: 5 tetes sebelum makan.",
        "Malam: 5 tetes sebelum tidur.",
        "Tambahan:",
        "- Pastikan konsumsi air putih yang cukup sepanjang hari.",
        "- Jika kadar gula darah tinggi, dosis dapat ditingkatkan 3-5 tetes per porsi (total 6-10 tetes per hari)."
      ]
    },
    {
      title: "Penderita Asam Lambung (GERD)",
      id: "gerd",
      details: [
        "Gejala: Perut kembung, penuh, perih, dan sesak.",
        "Dosis sesuai tingkat keparahan:",
        "- Ringan: 3-5 tetes",
        "- Sedang: 5-7 tetes",
        "- Sakit: 7-10 tetes",
        "- Sangat sakit: 10 tetes",
        "Jika dalam 30 menit belum membaik, tambahkan 10 tetes untuk kondisi sangat sakit."
      ]
    },
    {
      title: "Penderita Diare & Disentri",
      id: "diarrhea",
      details: [
        "Dosis awal: 10 tetes",
        "Dosis lanjutan berdasarkan frekuensi BAB:",
        "- BAB ke-2: 10 tetes",
        "- BAB ke-3: 5 tetes",
        "- BAB ke-4: 5 tetes",
        "- BAB ke-5: 5 tetes",
        "- BAB ke-6: 6 tetes",
        "Jika kondisi tidak membaik, segera hubungi tenaga medis terdekat."
      ]
    },
    {
      title: "Penderita Sakit Kepala, Sesak Napas, dan Nyeri Dada",
      id: "headache",
      details: [
        "Ringan: 10 tetes setelah aktivitas",
        "Berat: 10-15 tetes setelah gejala muncul",
        "Sangat sakit: 10-15 tetes"
      ]
    },
    {
      title: "Penderita Batu Ginjal & Asam Urat",
      id: "kidney",
      details: [
        "Dosis: 5-10 tetes sebelum makan",
        "Frekuensi: 2x sehari (pagi dan malam)",
        "Catatan: Konsultasi lebih lanjut tersedia 24 jam jika diperlukan"
      ]
    }
  ];

  const conclusionDetails = [
    "Dosis harian untuk menjaga kesehatan: 2-3 tetes pagi & malam",
    "Dosis untuk penyakit tertentu disesuaikan dengan tingkat keparahan gejala",
    "Jika kondisi tidak membaik dalam waktu tertentu, segera hubungi petugas medis",
    "Pastikan konsumsi air yang cukup dan segera konsultasi jika membutuhkan penyesuaian dosis lebih lanjut"
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
              Panduan <span className="text-yellow-300">Dosis Vitex NSA</span>
            </h2>
          </div>
          
          <div className="p-6">
            {dosageSections.map((section) => (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 border border-green-100 rounded-lg"
              >
                <div 
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                  className="flex justify-between items-center p-4 bg-green-50 cursor-pointer hover:bg-green-100 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-green-800">
                    {section.title}
                    {section.note && (
                      <span className="text-sm text-green-600 ml-2">
                        ({section.note})
                      </span>
                    )}
                  </h3>
                  {openSection === section.id ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-green-600" />}
                </div>
                
                {openSection === section.id && (
                  <div className="p-4 bg-white">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {section.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4"
            >
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Kesimpulan Penting</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {conclusionDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-yellow-800 italic">
                Catatan: Selalu konsultasi untuk panduan penggunaan yang tepat.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}