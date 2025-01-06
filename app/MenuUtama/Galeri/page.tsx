import Image from 'next/image';
import Link from 'next/link';

const Galeri = () => {
  // Daftar URL gambar untuk bagian Perusahaan
  const perusahaanImages = [
    '/Galeri/1.jpg',
    '/Galeri/2.jpg',
    '/images/company3.jpg',
    '/images/company4.jpg',
    '/images/company5.jpg',
    '/images/company6.jpg',
    '/images/company7.jpg',
    '/images/company8.jpg',
  ];

  // Daftar URL gambar untuk bagian Events
  const eventsImages = [
    '/images/event1.jpg',
    '/images/event2.jpg',
    '/images/event3.jpg',
    '/images/event4.jpg',
    '/images/event5.jpg',
    '/images/event6.jpg',
    '/images/event7.jpg',
    '/images/event8.jpg',
  ];

  return (
    <div id="galeri" className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">Galeri</h1>
      <p className="text-center text-gray-600 mb-8">Galeri foto perusahaan dan events terbaru</p>

      {/* Perusahaan Section */}
      <section id="perusahaan" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 m-4">Perusahaan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 m-4">
          {perusahaanImages.map((url, index) => (
            <div key={index} className="relative bg-gray-300 rounded-md h-32 sm:h-40 md:h-48 overflow-hidden">
              <Image src={url} alt={`Perusahaan ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
            </div>
          ))}
        </div>
        {/* Link ke halaman Galeri Perusahaan 
        <Link href="/MenuUtama/Galeri/Perusahaan" className="flex justify-center items-center mt-4 text-blue-600 font-semibold">
          Selengkapnya <span className="ml-2">⟶</span>
        </Link>*/}
      </section>

      {/* Events Section 
      <section id="events">
        <h2 className="text-2xl font-semibold mb-4 m-4">Events</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 m-4">
          {eventsImages.map((url, index) => (
            <div key={index} className="relative bg-gray-300 rounded-md h-32 sm:h-40 md:h-48 overflow-hidden">
              <Image src={url} alt={`Event ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
            </div>
          ))}
        </div>
        <Link href="/MenuUtama/Galeri/Events" className="flex justify-center items-center mt-4 text-blue-600 font-semibold">
          Selengkapnya <span className="ml-2">⟶</span>
        </Link>
      </section>*/}
    </div>
  );
};

export default Galeri;
