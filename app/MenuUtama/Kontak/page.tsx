"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    NamaLengkap: "",
    Email: "",
    NoHpWhatsapp: "",
    Pertanyaan: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.NamaLengkap || !formData.Email || !formData.Pertanyaan) {
      toast.error("Harap isi semua field yang wajib diisi.");
      return;
    }

    setIsSubmitting(true);
    try {
      const botToken = "7214266325:AAEip3PZcHrG-t6tnENlbfd3Gad0GryPftQ"; // Token Bot Telegram
      const chatId = "-1002422923158"; // ID Chat Telegram Anda
      const message = `📩 *Ada pertanyaan dari user nih* :\n\n Nama : ${formData.NamaLengkap}\n\n Email : ${formData.Email}\n\n No HP/Whatsapp : ${formData.NoHpWhatsapp || "Tidak Diisi"}\n\n Pertanyaan : ${formData.Pertanyaan}`;

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown", // Untuk styling pesan dengan Markdown
        }),
      });

      const result = await response.json();
      if (result.ok) {
        toast.success("Pesan Anda berhasil dikirim");
        setFormData({ NamaLengkap: "", Email: "", NoHpWhatsapp: "", Pertanyaan: "" });
      } else {
        toast.error(`Gagal mengirim pesan: ${result.description}`);
      }
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengirim pesan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <ToastContainer />
      <div className="lg:flex lg:space-x-8">
        {/* Bagian Kiri (Formulir) */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">CV. Multi Rejeki Selaras</h2>
          <div className="space-y-2 mb-6">
            <p className="flex items-center text-gray-700">
              <FaMapMarkerAlt className="h-5 w-5 mr-2 text-blue-500" />
              Padang Datar, Payakumbuh, Sumatra Barat, Indonesia
            </p>
            <p className="flex items-center text-gray-700">
              <FiMail className="h-5 w-5 mr-2 text-blue-500" />
              air.tasri@gmail.com
            </p>
            <p className="flex items-center text-gray-700">
              <FiPhone className="h-5 w-5 mr-2 text-blue-500" />
              +62 853-5522-2567
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
          <textarea
              name="NamaLengkap"
              value={formData.NamaLengkap}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              ></textarea>
            <textarea
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              ></textarea>
            <textarea
              name="NoHpWhatsapp"
              value={formData.NoHpWhatsapp}
              onChange={handleChange}
              placeholder="No Hp/Whatsapp"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <textarea
              name="Pertanyaan"
              value={formData.Pertanyaan}
              onChange={handleChange}
              placeholder="Pertanyaan"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className={`w-full text-white py-2 rounded-lg ${isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Mengirim..." : "Kirim"}
            </button>
          </form>
        </div>

        {/* Bagian Kanan (Peta Lokasi) */}
        <div className="lg:w-1/2 h-[460px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.569011315843!2d100.5998263!3d-0.220869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd54b9db660e727%3A0x859ac06513a12bca!2sCV.MULTIREJEKI%20SELARAS!5e0!3m2!1sen!2sid!4v1697123456789!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;