"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-4">Vitex NSA</h3>
              <p className="text-gray-300 text-sm">
                Solusi kesehatan alami untuk meningkatkan kualitas hidup Anda. Dengan bahan-bahan berkualitas tinggi dan formula yang teruji.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#produk" className="text-gray-300 hover:text-white transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#safety" className="text-gray-300 hover:text-white transition-colors">
                  Panduan Keamanan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-gray-300">+62 857 9696 6254</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-gray-300">nikmatalamsyariahagribisnis@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Vitex NSA. Dikembangkan oleh{" "}
            <span className="font-medium text-green-400">Utsmnseff</span>
          </p>
          
        </div>
      </div>
    </footer>
  );
}