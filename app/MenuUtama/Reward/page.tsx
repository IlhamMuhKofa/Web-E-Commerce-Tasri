'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const RewardPage: React.FC = () => {
  // URL gambar untuk "Penghargaan Terbaik"
  const bestRewardImageUrl = '/sertifikat/sertifikat 6.jpg';

  // Daftar URL gambar untuk "Penghargaan Lainnya"
  const otherRewardsImageUrls = [
    '/sertifikat/sertifikat 1.jpg',
    '/sertifikat/sertifikat 2.jpg',
    '/sertifikat/sertifikat 3.jpg',
    '/sertifikat/sertifikat 4.jpg',
    '/sertifikat/sertifikat 5.jpg',
    '/images/reward6.jpg',
    '/images/reward7.jpg',
    '/images/reward8.jpg',
  ];

  // Daftar deskripsi berbeda untuk setiap penghargaan
  const otherRewardsDescriptions = [
    'Penghargaan atas pencapaian luar biasa dalam inovasi.',
    'Penghargaan untuk kontribusi terbaik dalam komunitas.',
    'Penghargaan untuk hasil kerja keras dan dedikasi.',
    'Penghargaan khusus untuk tim dengan kinerja optimal.',
    'Penghargaan atas keunggulan dalam layanan pelanggan.',
    'Penghargaan untuk pencapaian luar biasa dalam penelitian.',
    'Penghargaan untuk peran kepemimpinan yang inspiratif.',
    'Penghargaan atas kontribusi signifikan dalam industri.'
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  const openModal = (imageUrl: React.SetStateAction<string>) => {
    setCurrentImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageUrl('');
  };

  return (
    <div className="container mx-auto p-4">
      {/* Penghargaan Terbaik */}
      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 m-4">Sertifikasi Halal</h2>
        <div className="bg-gray-200 rounded-lg p-4 m-4">
          <div
            className="bg-gray-400 rounded-md mb-2 overflow-hidden aspect-[1/1.414] h-40 mx-auto cursor-pointer"
            onClick={() => openModal(bestRewardImageUrl)}
          >
            <img
              src={bestRewardImageUrl}
              alt="Penghargaan Terbaik"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <p className="text-sm text-gray-600">Penghargaan atas dedikasi dan pencapaian luar biasa.</p>
        </div>
      </section>

      {/* Penghargaan Lainnya */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">Sertifikat Lainnya</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
          {otherRewardsImageUrls.map((url, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-4">
              <div
                className="bg-gray-400 rounded-md mb-2 overflow-hidden aspect-[1/1.414] h-40 mx-auto cursor-pointer"
                onClick={() => openModal(url)}
              >
                <img
                  src={url}
                  alt={`Penghargaan ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-gray-600">{otherRewardsDescriptions[index]}</p>
            </div>
          ))}
        </div>
        {/* 
        <Link href="/MenuUtama/Reward/Selengkapnya" className="flex justify-center items-center mt-4 text-blue-600 font-semibold">
          Selengkapnya <span className="ml-2">⟶</span>
        </Link>*/}
      </section>

      {/* Modal untuk melihat gambar secara utuh */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer" // Menambahkan cursor-pointer di sini
          onClick={closeModal} // Menutup modal saat area luar diklik
        >
          <div
            className="relative bg-white p-4 rounded-md max-w-xs w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat gambar diklik
          >
            <img src={currentImageUrl} alt="Penghargaan" className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RewardPage;
