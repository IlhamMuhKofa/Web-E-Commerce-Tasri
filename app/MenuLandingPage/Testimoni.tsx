'use client';

import React from 'react';

// Data Testimonials
const testimonials = [
  {
    name: 'Rizky Maulana',
    position: 'Freelancer',
    image: '/testimoni/frelancer.jpg',
    feedback:
      'Awalnya cuma coba, tapi ternyata kualitasnya bagus banget. Sekarang saya rutin pakai buat keperluan sehari-hari',
    rating: 5,
  },
  {
    name: 'Dedi Wijaya',
    position: 'Mekanik',
    image: '/testimoni/mekanik.jpg',
    feedback:
      'Ini produk wajib punya! Gak cuma seger, tapi juga praktis. Udah saya rekomendasiin ke banyak teman',
    rating: 4,
  },
  {
    name: 'Indah Lestari',
    position: 'Guru',
    image: '/testimoni/guru.jpg',
    feedback:
      'Produk ini jadi solusi banget buat kebutuhan sehari-hari. Gak ribet dan hasilnya bener-bener memuaskan. Highly recommended deh!',
    rating: 5,
  },
  {
    name: 'Arif Setiawan',
    position: 'Pedagang',
    image: '/testimoni/pedagang.jpg',
    feedback:
      'Sebagai pedagang, saya selalu cari produk yang punya kualitas dan harga terjangkau. Ini salah satu yang terbaik menurut saya. Pelanggan saya juga banyak yang suka',
    rating: 5,
  },
  {
    name: 'Rani Anggraeni',
    position: 'Barista',
    image: '/testimoni/barista.jpg',
    feedback:
      'Saya biasanya pickly banget kalau beli barang, tapi ini sih juara. Dari segi kualitas dan harga, bener-bener worth it!',
    rating: 5,
  },
  {
    name: 'Yudi Santoso',
    position: 'Petani',
    image: '/testimoni/petani.jpg',
    feedback:
      'Saya beli buat kebutuhan dirumah dan dikebun. airnya seger dan juga harganya ramah di kantong. Bakal beli lagi deh buat stok!',
    rating: 5,
  },
  {
    name: 'Siti Nurjanah',
    position: 'Penjahit',
    image: '/testimoni/penjahit.jpg',
    feedback:
      'Barangnya sesuai pesanan dan pengirimannya juga tepat waktu. Udah saya pakai, dan hasilnya memuaskan. Terima kasih!',
    rating: 5,
  },
  {
    name: 'Fitri Ayu',
    position: 'Mahasiswi',
    image: '/testimoni/mahasiswi.jpg',
    feedback:
      'Harganya pas di kantong, tapi kualitasnya sama sekali gak murahan. Udah dua kali beli, dan pasti bakal balik lagi!',
    rating: 4,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-sky-500 py-16 overflow-visible"> {/* Tambahkan overflow-visible di sini */}
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Suara Pengguna</h2>
          <p className="text-lg text-white mt-2">
            Testimonial dari pelanggan yang telah merasakan manfaatnya
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative flex flex-col lg:flex-row gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/4 min-w-[280px] flex-shrink-0 overflow-visible"
            >
              {/* Card Content */}
              <div className="relative mt-8">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-gray-200"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-gray-600 italic text-sm mb-6">
                  "{testimonial.feedback}"
                </p>

                {/* Line and Rating */}
                <div className="flex flex-col items-center">
                  {/* Line Separator */}
                  <hr className="w-full border-t border-gray-300 mb-2" />
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                          }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
