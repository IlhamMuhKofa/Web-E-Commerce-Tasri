"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EventsPage = () => {
  // Daftar event dengan URL gambar dan detail
  const events = [
    { id: 1, image: '/event/event-1.jpg', title: 'Ramadhan Bersama Tasri', date: 'Rabu, 10 Maret 2025', time: '16:15 AM', location: 'Gelanggang' },
    { id: 2, image: '/event/events-2.jpeg', title: 'Seminar Kebangsaan', date: 'Kamis, 15 April 2025', time: '10:00 AM', location: 'Auditorium' },
    { id: 3, image: '/event/event-3.jpg', title: 'Workshop Digital', date: 'Senin, 20 Mei 2025', time: '09:00 AM', location: 'Lab Komputer' },
    { id: 4, image: '/event/event-4.jpg', title: 'Weekend gateway', date: 'minggu, 27 Mei 2025', time: '09:00 AM', location: 'Bukit Tinggi' },
    { id: 5, image: '/event/event-5.jpg', title: 'Podcast', date: 'Selasa, 29 Mei 2025', time: '15:00 AM', location: 'CV. MultiRejeki Selaras' },
  ];

  // State untuk mengontrol index banner yang sedang ditampilkan
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mengatur pergeseran otomatis setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [events.length]);

  return (
    <div className="min-h-screen p-4 lg:p-8 bg-gray-50">
      {/* Banner Event */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-left mb-4">Events</h2>
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event) => (
              <div key={event.id} className="min-w-full h-64 relative">
                <img
                  src={event.image}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daftar Event Mendatang */}
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg font-bold text-center mb-4">Event Mendatang</h2>
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center border p-4 mb-4 rounded-md shadow-sm bg-gray-100"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div className="flex-grow">
              <p className="font-bold">{event.title}</p>
              <p className="text-sm text-gray-500">
                {event.date} {event.time}
              </p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
            <Link
              href={`/MenuUtama/Pendaftaran/${event.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center sm:text-left"
            >
              Daftar Sekarang
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
