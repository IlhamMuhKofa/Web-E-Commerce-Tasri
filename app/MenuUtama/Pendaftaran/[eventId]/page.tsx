"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterEventPage = () => {
  const [formData, setFormData] = useState({
    JenisEvent: "", // Menambahkan kolom Title Event
    Riwayat: "", // Kolom Riwayat Event
    NamaLengkap: "",
    Umur: "",
    NoHpWhatsapp: "",
    Alamat: "",
    Alasan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useParams();
  const router = useRouter();
  const eventId = params?.eventId;
  const [selectedEvent, setSelectedEvent] = useState<{ id: string; image: string; title: string } | null>(null);

  // Data event simulasi
  const events = [
    { id: "1", image: "/event/event-1.jpg", title: "Ramadhan Bersama Tasri" },
    { id: "2", image: "/event/events-2.jpeg", title: "Seminar Kebangsaan" },
    { id: "3", image: "/event/event-3.jpg", title: "Workshop Digital" },
    { id: "4", image: "/event/event-4.jpg", title: "Weekend Gateway" },
    { id: "5", image: "/event/event-5.jpg", title: "Podcast" },
  ];

  // Set data event berdasarkan ID
  useEffect(() => {
    const event = events.find((event) => event.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setFormData((prev) => ({
        ...prev,
        JenisEvent: event.title, // Menyimpan Title Event di kolom
      }));
    }
  }, [eventId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi form
    if (!formData.NamaLengkap || !formData.Umur || !formData.Alamat || !formData.JenisEvent || !formData.Riwayat) {
      toast.error("Harap isi semua field yang wajib diisi.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Event",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.status === "success") {
        toast.success("Pendaftaran berhasil");
        setFormData({
          JenisEvent: selectedEvent?.title || "",
          Riwayat: "",
          NamaLengkap: "",
          Umur: "",
          NoHpWhatsapp: "",
          Alamat: "",
          Alasan: "",
        });
        setTimeout(() => {
          router.push("/MenuUtama/Pendaftaran"); // Redirect ke halaman utama
        }, 1000);
      } else {
        toast.error("Gagal mendaftar: " + result.message);
      }
    } catch (error) {
      toast.success("Pendaftaran berhasil");
      setFormData({
        JenisEvent: selectedEvent?.title || "",
        Riwayat: "",
        NamaLengkap: "",
        Umur: "",
        NoHpWhatsapp: "",
        Alamat: "",
        Alasan: "",
      });
      setTimeout(() => {
        router.push("/MenuUtama/Pendaftaran"); // Redirect ke halaman utama
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8 bg-gray-50">
      <ToastContainer />
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">Event Pendaftaran</h2>

        {/* Gambar Event yang Dipilih */}
        {selectedEvent ? (
          <img src={selectedEvent.image} alt="Selected Event" className="w-full h-32 object-contain rounded-md mb-4" />
        ) : (
          <div className="w-full h-32 bg-gray-200 rounded-md mb-4"></div>
        )}

        {/* Formulir Pendaftaran */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Jenis Event Title */}
          <input
            type="text"
            name="JenisEvent"
            disabled
            value={formData.JenisEvent}
            onChange={handleChange}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            placeholder="Jenis Event"
          />

          {/* Riwayat Event */}
          <select
            name="Riwayat"
            value={formData.Riwayat}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Berapa kali anda mengikuti event di Tasri
            </option>
            <option value="Ini Pertama Kali">Ini Pertama Kali</option>
            <option value="Lebih dari 2x">Lebih dari 2x</option>
            <option value="Lebih dari 5x">Lebih dari 5x</option>
          </select>

          {/* Nama Lengkap */}
          <input
            type="text"
            name="NamaLengkap"
            value={formData.NamaLengkap}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          {/* Umur */}
          <input
            type="number"
            name="Umur"
            value={formData.Umur}
            onChange={handleChange}
            placeholder="Umur"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          {/* No Hp / WhatsApp */}
          <input
            type="text"
            name="NoHpWhatsapp"
            value={formData.NoHpWhatsapp}
            onChange={handleChange}
            placeholder="No Hp / WhatsApp"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          {/* Alamat */}
          <textarea
            name="Alamat"
            value={formData.Alamat}
            onChange={handleChange}
            placeholder="Alamat"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          <textarea
            name="Alasan"
            value={formData.Alasan}
            onChange={handleChange}
            placeholder="Alasan anda mengikuti event ini"
            className="w-full p-2 border border-gray-300 rounded-md"
          />

          {/* Tombol Aksi */}
          <button
            type="submit"
            className={`w-full text-white py-2 rounded-lg ${isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Mengirim..." : "Daftar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterEventPage;
