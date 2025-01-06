'use client';
import React from 'react';

const ManfaatSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Gambar */}
      <div className="flex justify-center">
        <img
          src="/produk/botol600.png" // Ganti dengan path gambar Anda
          alt="Tasri Bottle"
          className="max-h-96 w-auto object-contain"
        />
      </div>

      {/* Konten */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Kenapa Harus Tasri?</h2>
        <p className="text-gray-600 text-justify mb-6 mr-12">
          Tasri hadir sebagai pilihan terbaik untuk memenuhi kebutuhan hidrasi Anda.
          Diproduksi dengan standar tinggi, Tasri menawarkan kualitas air mineral yang sehat,
          alami, dan terpercaya. Nikmati kesegaran murni dari sumber air pegunungan yang tersertifikasi dan aman untuk seluruh keluarga.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="flex-shrink-0">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                ✓
              </span>
            </div>
            <p className="ml-3 text-gray-700">Kualitas Terbaik</p>
          </li>
          <li className="flex items-center">
            <div className="flex-shrink-0">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                ✓
              </span>
            </div>
            <p className="ml-3 text-gray-700">Mineral Sehat</p>
          </li>
          <li className="flex items-center">
            <div className="flex-shrink-0">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                ✓
              </span>
            </div>
            <p className="ml-3 text-gray-700">Sudah Tersertifikasi</p>
          </li>
          <li className="flex items-center">
            <div className="flex-shrink-0">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                ✓
              </span>
            </div>
            <p className="ml-3 text-gray-700">Sumber Air Pegunungan</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ManfaatSection;
