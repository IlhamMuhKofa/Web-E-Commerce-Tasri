import Link from 'next/link';
import Image from 'next/image';

export default function EventsGaleri() {
  // Daftar URL gambar untuk Galeri Events
  const eventsImages = [
    '/images/event1.jpg',
    '/images/event2.jpg',
    '/images/event3.jpg',
    '/images/event4.jpg',
    '/images/event5.jpg',
    '/images/event6.jpg',
    '/images/event7.jpg',
    '/images/event8.jpg',
    '/images/event9.jpg',
    '/images/event10.jpg',
    '/images/event11.jpg',
    '/images/event12.jpg',
    '/images/event13.jpg',
    '/images/event14.jpg',
    '/images/event15.jpg',
    '/images/event16.jpg',
    '/images/event17.jpg',
    '/images/event18.jpg',
    '/images/event19.jpg',
    '/images/event20.jpg',
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Galeri Events</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {eventsImages.map((url, index) => (
          <div key={index} className="relative bg-gray-300 rounded-md h-32 sm:h-40 md:h-48 overflow-hidden">
            <Image src={url} alt={`Event ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
          </div>
        ))}
      </div>
      <Link href="/MenuUtama/Galeri" className="flex justify-center items-center mt-4 text-blue-600 font-semibold">
        ← Kembali ke Galeri Utama
      </Link>
    </div>
  );
}
