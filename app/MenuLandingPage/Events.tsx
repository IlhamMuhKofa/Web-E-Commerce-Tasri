// components/Events.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Events: React.FC = () => {
  return (
    <section className="text-center p-4 md:p-8 lg:p-12">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Events Mendatang</h2>

      {/* Display the event image */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-48 md:h-64 lg:h-80 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/event-1.jpg"
            alt="Event Poster"
            layout="fill"
            style={{ objectFit: 'cover' }} // Mengganti objectFit dengan style
          />
        </div>
      </div>

      {/* Link to more events */}
      <div className="flex justify-end mt-4">
        <Link href="/MenuUtama/Pendaftaran" className="text-blue-600 font-semibold hover:underline flex items-center">
          Selengkapnya
          <span className="ml-2">➔</span>
        </Link>
      </div>
    </section>
  );
};

export default Events;
