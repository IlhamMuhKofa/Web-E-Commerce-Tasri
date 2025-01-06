import React, { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AllMitra = () => {
  const logos = [
    '/mitra/1.png',
    '/mitra/2.png',
    '/mitra/10.png',
    '/mitra/4.png',
    '/mitra/5.png',
    '/mitra/6.png',
    '/mitra/7.jpg',
    '/mitra/8.png',
    '/mitra/9.png',
    '/mitra/3.png',

    '/mitra/11.png',
    '/mitra/12.png',
    '/mitra/13.png',
    '/mitra/14.png',
    '/mitra/36.png',
    '/mitra/16.png',
    '/mitra/41.png',
    '/mitra/18.png',
    '/mitra/19.png',
    '/mitra/20.png',

    '/mitra/21.png',
    '/mitra/22.png',
    '/mitra/23.png',
    '/mitra/24.png',
    '/mitra/25.png',
    '/mitra/26.png',
    '/mitra/27.jpg',
    '/mitra/28.png',
    '/mitra/29.png',
    '/mitra/30.png',

    '/mitra/31.png',
    '/mitra/32.png',
    '/mitra/33.png',
    '/mitra/34.png',
    '/mitra/35.png',
    '/mitra/15.png',
    '/mitra/37.png',
    '/mitra/38.png',
    '/mitra/39.png',
    '/mitra/40.png',
  ]
  return (
    <div>
      {/* Mitra Tasri Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Mitra Tasri</h2>
          <p className="text-lg mb-8">
            Ini adalah kumpulan mitra terpercaya yang telah bekerja sama dengan kami untuk menghadirkan produk dan layanan terbaik.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-6">
            {logos.map((logo, index) => (
              <div key={index} className="bg-white p-6 rounded-lg flex justify-center items-center">
                <Suspense fallback={<div>Loading...</div>}>
                  <Image
                    src={logo}
                    alt={`Distributor ${index + 1}`}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="object-contain"
                  />
                </Suspense>
              </div>
            ))}
          </div>
          <Link href="/MenuUtama/Colab" className="flex justify-center items-center mt-4 text-blue-600 font-semibold">
            ← Kembali Halaman sebelumnya
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AllMitra
