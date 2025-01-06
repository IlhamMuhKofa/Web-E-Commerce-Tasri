'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Banner: React.FC = () => {
  const router = useRouter(); // Tetap gunakan useRouter di sini

  return (
    <div
      className="relative flex flex-col items-start justify-center text-white py-20 md:py-32 px-8 md:px-16"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '88vh',
      }}
    >
      <style jsx>{`
        div {
          background-image: url('/background/tes-1.2.png');
        }
        @media (max-width: 768px) {
          div {
            background-image: url('/background/tes-2.1.png'); /* Ganti dengan URL gambar mobile Anda */
          }
        }
      `}</style>

      <h1 className="text-4xl font-bold md:text-6xl -translate-y-28">
        Pilihan Tepat? <br />
        Tasri, Pastinya
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-lg -translate-y-28">
        Minum air murni dari Tasri setiap hari untuk mendukung kesehatan Anda dan keluarga dengan mudah dan praktis.
      </p>
      <button
        className="mt-6 px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 rounded-md transition -translate-y-32"
        onClick={() => {
          router.push('/MenuUtama/produk'); // Navigasi ke halaman produk
        }}
      >
        Lihat Produk
      </button>
    </div>
  );
};

export default Banner;
