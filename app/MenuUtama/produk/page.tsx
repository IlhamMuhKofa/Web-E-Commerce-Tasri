"use client"

import React from 'react';

const ProductPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Product Header */}
      <h1 className="text-4xl font-bold text-center mb-5">
        Tasri Hadir untuk semua <span className="text-blue-500">Aktivitas Mu!</span>
      </h1>

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Example product cards */}
        {[
          { src: "/produk/cup120.png", title: "Cup 120 ml", description: "Isi 60 buah per karton" },
          { src: "/produk/cup220.png", title: "Cup 220 ml", description: "Isi 48 buah per karton" },
          { src: "/produk/galon.png", title: "Galon 19 Liter", description: "Galon isi Ulang" },
          { src: "/produk/botol350.png", title: "Botol 350 ml", description: "Isi 24 buah per karton" },
          { src: "/produk/botol600.png", title: "Botol 600 ml", description: "Isi 24 buah per karton" },
          { src: "/produk/botol1500.png", title: "Botol 1.500 ml", description: "Isi 12 buah per karton" },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.src}
              alt={product.title}
              className="mx-auto mb-2 w-full h-40 object-contain"
            />
            <h2 className="text-lg font-semibold h-6">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>

      {/* Description Section 
      <div className="bg-blue-500 text-white text-center mt-8 p-4 rounded-md">
        <h2 className="text-xl font-semibold">Tasri – Pilihan Tepat untuk Hidup Sehat</h2>
        <p className="mt-2 text-justify ml-5 mr-5 mb-3">
          Kemasan Tasri yang praktis dan elegan membuatnya cocok untuk menemani Anda di mana saja. Dari aktivitas olahraga, bekerja, hingga bersantai bersama keluarga, Tasri memastikan Anda tetap terhidrasi dengan baik. Rasakan kemurnian alam dalam setiap tetes Tasri – kesegaran yang Anda butuhkan untuk hari yang lebih produktif dan penuh energi.
        </p>
      </div>
      */}

      {/* Fixed Video Section 
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-lg">
          <video
            src="/ASRI.mp4" // Path atau URL file video
            title="Introduction Video"
            className="w-full h-64 rounded-md shadow-md"
            controls // Tambahkan ini untuk kontrol manual
            preload="metadata" // Mengatur agar video tidak di-load penuh sampai diputar
          ></video>
        </div>
      </div>*/}

    </div>
  );
};

export default ProductPage;
