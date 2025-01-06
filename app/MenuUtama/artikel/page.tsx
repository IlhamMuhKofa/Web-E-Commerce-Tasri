'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const articles = [
  {
    id: 1,
    title: "Manfaat Air Minum Tasri untuk Hidup Sehat",
    excerpt: "Ketahui mengapa Air Minum Tasri menjadi pilihan tepat untuk menjaga tubuh tetap sehat dan segar.",
    imageUrl: "/artikel/digital.2.jpg",
  },
  {
    id: 2,
    title: "Air Minum Berkualitas dengan Harga Terjangkau",
    excerpt: "Air Minum Tasri tidak hanya menyegarkan, tapi juga ramah di kantong. Cocok untuk kebutuhan sehari-hari.",
    imageUrl: "/artikel/makanansehat.2.jpg",

  },
  {
    id: 3,
    title: "Tips Memilih Air Minum yang Aman dan Berkualitas",
    excerpt: "Pelajari cara memilih air minum yang aman dikonsumsi, seperti Air Minum Tasri.",
    imageUrl: "/artikel/traveling.2.jpg",
  },
  {
    id: 4,
    title: "Hidrasi Optimal dengan Air Minum Tasri",
    excerpt: "Mengapa hidrasi penting dan bagaimana Air Minum Tasri dapat memenuhi kebutuhan cairan tubuh Anda.",
    imageUrl: "/artikel/waktu.2.jpg",
  },
  {
    id: 5,
    title: "Perjalanan Air Minum Tasri dari Sumber ke Botol",
    excerpt: "Mengintip proses produksi Air Minum Tasri yang menjamin kualitas dan kesegarannya.",
    imageUrl: "/artikel/teknologi.2.jpg",
  },
  {
    id: 6,
    title: "Air Minum Tasri: Solusi Praktis untuk Aktivitas Sehari-hari",
    excerpt: "Selalu siap menemani setiap momen penting Anda, dari bekerja hingga berolahraga.",
    imageUrl: "/artikel/habbit.2.jpg",
  },
  {
    id: 7,
    title: "Mengapa Minum Air yang Cukup Sangat Penting?",
    excerpt: "Penjelasan tentang pentingnya hidrasi dan peran Air Minum Tasri dalam menjaga kesehatan.",
    imageUrl: "/artikel/sleep.jpg",
  },
  {
    id: 8,
    title: "Air Minum Tasri, Pilihan Tepat untuk Segala Usia",
    excerpt: "Air Minum Tasri cocok untuk anak-anak, dewasa, hingga lansia. Aman dan berkualitas untuk seluruh keluarga.",
    imageUrl: "/artikel/books.jpg",
  },
];

const ArticlesPage: React.FC = () => {
  const articlesPerPage = 6; // Jumlah artikel per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const { ref, inView } = useInView({ triggerOnce: true });

  // Artikel untuk halaman aktif
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  // Handler untuk navigasi ke halaman tertentu
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 my-8">
      {/* Article List */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <article
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between text-gray-500 text-xs">
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={`px-4 py-2 border rounded-md transition ${currentPage === pageNumber
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-100'
                }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlesPage;
