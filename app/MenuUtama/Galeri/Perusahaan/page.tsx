import Link from 'next/link';
import Image from 'next/image';

export default function PerusahaanGaleri() {
  // Daftar URL gambar untuk Galeri Perusahaan
  const perusahaanImages = [
    '/images/company1.jpg',
    '/images/company2.jpg',
    '/images/company3.jpg',
    '/images/company4.jpg',
    '/images/company5.jpg',
    '/images/company6.jpg',
    '/images/company7.jpg',
    '/images/company8.jpg',
    '/images/company9.jpg',
    '/images/company10.jpg',
    '/images/company11.jpg',
    '/images/company12.jpg',
    '/images/company13.jpg',
    '/images/company14.jpg',
    '/images/company15.jpg',
    '/images/company16.jpg',
    '/images/company17.jpg',
    '/images/company18.jpg',
    '/images/company19.jpg',
    '/images/company20.jpg',
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Galeri Perusahaan</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {perusahaanImages.map((url, index) => (
          <div key={index} className="relative bg-gray-300 rounded-md h-32 sm:h-40 md:h-48 overflow-hidden">
            <Image src={url} alt={`Perusahaan ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
          </div>
        ))}
      </div>
      <Link href="/MenuUtama/Galeri" className="flex justify-center items-center mt-4 text-blue-600 font-semibold">
        ← Kembali ke Galeri Utama
      </Link>
    </div>
  );
}
