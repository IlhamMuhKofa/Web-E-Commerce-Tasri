"use client";

import { image } from "framer-motion/client";
import dynamic from "next/dynamic";
import { title } from "process";
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderPage = dynamic(
  () =>
    Promise.resolve(() => {
      const [selectedImages, setSelectedImages] = useState<string[]>([]);
      const [selectedProduct, setSelectedProduct] = useState<any>(null); // Produk terpilih
      const [selectedProvince, setSelectedProvince] = useState("");
      const [cities, setCities] = useState<string[]>([]);
      const [regions, setRegions] = useState<any[]>([]);
      const [quantityOptions, setQuantityOptions] = useState<string[]>([]); // Opsi jumlah pesanan
      const [isQuantityDisabled, setIsQuantityDisabled] = useState(true); // Kontrol untuk form jumlah pesanan

      useEffect(() => {
        // Memuat data JSON dari folder public
        const fetchRegions = async () => {
          const response = await fetch("/indonesiaCity.json");
          const data = await response.json();
          setRegions(data); // Menyimpan data provinsi dan kota
        };

        fetchRegions();
      }, []);

      const products = [
        {
          image: "/produk/cup120.png",
          title: "Cup 120 ml",
          description: "Isi 60 buah perkarton",
          unit: "kardus",
        },
        {
          image: "/produk/cup220.png",
          title: "Cup 220 ml",
          description: "Isi 48 buah perkarton",
          unit: "kardus",
        },
        {
          image: "/produk/botol350.png",
          title: "Botol 350 ml",
          description: "Isi 24 buah perkarton",
          unit: "kardus",
        },
        {
          image: "/produk/botol600.png",
          title: "Cup 600 ml",
          description: "Isi 24 buah perkarton",
          unit: "kardus",
        },
        {
          image: "/produk/botol1500.png",
          title: "Botol 1500 ml",
          description: "Isi 12 buah perkarton",
          unit: "kardus",
        },
        {
          image: "/produk/galon.png",
          title: "Galon 19 liter",
          description: "Galon isi ulang",
          unit: "galon",
        },
      ];

      const handleProductClick = (product: any) => {
        // Toggle produk terpilih dan animasi ceklis
        if (selectedProduct?.image === product.image) {
          setSelectedProduct(null);
          setSelectedImages([]);
          setQuantityOptions([]);
          setIsQuantityDisabled(true); // Nonaktifkan jumlah pesanan
          setFormData((prev) => ({ ...prev, JenisPesanan: '' })); // Reset JenisPesanan
        } else {
          setSelectedProduct(product);
          setSelectedImages([product.image]);
          updateQuantityOptions(product.unit);
          setIsQuantityDisabled(false); // Aktifkan jumlah pesanan
          setFormData((prev) => ({ ...prev, JenisPesanan: product.title })); // Set JenisPesanan
        }
      };

      const updateQuantityOptions = (unit: string) => {
        const options = Array.from({ length: 10 }, (_, i) => `${i + 1} ${unit}`);
        setQuantityOptions(options);
      };

      const handleProvinceChange = (event: { target: { value: any } }) => {
        const selectedProvince = event.target.value;
        setSelectedProvince(selectedProvince);

        // Update formData dengan Provinsi
        setFormData((prev) => ({ ...prev, Provinsi: selectedProvince }));

        const provinceData = regions.find(
          (region) => region.province === selectedProvince
        );
        setCities(provinceData ? provinceData.cities : []);
      };

      const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCity = event.target.value;

        // Update formData dengan Kota
        setFormData((prev) => ({ ...prev, Kota: selectedCity }));
      };

      const [formData, setFormData] = useState({
        JenisPesanan: '',
        Jumlah: '',
        NamaPenerima: '',
        Provinsi: '',
        Kota: '',
        Alamat: '',
        NoHpWhatsapp: '',
      });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validasi form
        if (!formData.NamaPenerima || !formData.Alamat || !formData.NoHpWhatsapp) {
          toast.error("Harap isi semua field yang wajib diisi."); // Ganti statusMessage
          return;
        }

        if (!formData.JenisPesanan) {
          toast.error("Harap pilih produk terlebih dahulu.");
          return;
        }

        if (!formData.Jumlah) {
          toast.error("Harap pilih jumlah pesanan.");
          return;
        }

        setIsSubmitting(true); // Tampilkan loading state
        try {
          const botToken = "7214266325:AAEip3PZcHrG-t6tnENlbfd3Gad0GryPftQ"; // Token Bot Telegram
          const chatId = "-1002422923158"; // ID Chat Telegram Anda
          const message = `
        🛎️ *Ada Oderan nih* :\n\n Jenis Pesanan : ${formData.JenisPesanan}\n\n Jumlah : ${formData.Jumlah}\n\n Nama : ${formData.NamaPenerima}\n\n Provinsi : ${formData.Provinsi}\n\n Kota : ${formData.Kota}\n\n Alamat : ${formData.Alamat}\n\n No HP : ${formData.NoHpWhatsapp || "Tidak Diisi"}
      `;

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
            toast.success("Pesan Anda berhasil dikirim ");
            setFormData({ JenisPesanan: '', Jumlah: '', NamaPenerima: '', Provinsi: '', Kota: '', Alamat: '', NoHpWhatsapp: '' }); // Reset form
          } else {
            toast.error(`Gagal mengirim pesan: ${result.description}`);
          }
        } catch (error) {
          toast.success("Pesan berhasil terkirim");
          setFormData({ JenisPesanan: '', Jumlah: '', NamaPenerima: '', Provinsi: '', Kota: '', Alamat: '', NoHpWhatsapp: '' }); // Reset form
        } finally {
          setIsSubmitting(false);
        }
      };

      return (
        <div className="flex flex-col lg:flex-row lg:items-start justify-center min-h-screen p-4 lg:p-8 bg-gray-50 space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Bagian Katalog Produk */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 p-4 lg:p-8 bg-white shadow-lg rounded-md">
            <h2 className="col-span-2 text-lg font-bold text-center mb-2">
              Katalog Produk
            </h2>
            <p className="col-span-2 text-center text-gray-600 mb-4">
              Silahkan pilih produk yang akan anda pesan
            </p>
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col items-center border p-2 rounded-md shadow-md cursor-pointer relative ${selectedImages.includes(product.image)
                  ? "border-blue-500 bg-blue-50"
                  : "hover:bg-blue-50"
                  }`}
                onClick={() => handleProductClick(product)}
              >
                {selectedImages.includes(product.image) && (
                  <div className="absolute top-2 right-2 text-blue-500">
                    <FaCheck />
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-32 object-contain rounded-md mb-2"
                />
                <p className="font-bold text-sm text-center">{product.title}</p>
                <p className="text-xs text-gray-500 text-center">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bagian Formulir Pemesanan */}

          <div className="lg:w-1/3 bg-white p-6 rounded-md shadow-lg flex flex-col justify-between">
            <h2 className="text-lg font-bold mb-4">Formulir Pemesanan</h2>
            <ToastContainer />
            {/* Gambar Produk yang Dipilih */}
            {selectedImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 mb-4">
                {selectedImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Selected Product"
                    className="w-full h-32 object-contain rounded-md"
                  />
                ))}
              </div>
            ) : (
              <div className="w-full h-32 bg-gray-200 rounded-md mb-4 text-center flex items-center justify-center">
                <p className="text-gray-500">Tidak ada produk yang dipilih</p>
              </div>
            )}

            {/* Formulir */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Jenis Pesanan */}
              <input
                name="JenisPesanan"
                type="text"
                value={formData.JenisPesanan}
                disabled
                placeholder="Jenis Pesanan"
                className="w-full p-2 border border-gray-300 rounded-md"
                readOnly
              />

              {/* Jumlah Pesanan */}
              <select
                name="Jumlah"
                value={formData.Jumlah}
                onChange={(e) => setFormData((prev) => ({ ...prev, Jumlah: e.target.value }))}
                disabled={isQuantityDisabled}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Jumlah Pesanan</option>
                {quantityOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="NamaPenerima"
                value={formData.NamaPenerima}
                onChange={handleChange}
                placeholder="Nama Penerima / Nama Toko"
                className="w-full p-2 border border-gray-300 rounded-md"
              />

              {/* Pilihan Provinsi */}
              <select
                name="Provinsi"
                value={formData.Provinsi}
                onChange={handleProvinceChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Pilih Provinsi</option>
                {regions.map((region) => (
                  <option key={region.province} value={region.province}>
                    {region.province}
                  </option>
                ))}
              </select>

              {/* Pilihan Kota */}
              <select
                name="Kota"
                value={formData.Kota}
                onChange={handleCityChange}
                disabled={!selectedProvince}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Pilih Kota</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <textarea
                name="Alamat"
                value={formData.Alamat}
                onChange={handleChange}
                placeholder="Masukkan Alamat secara lengkap"
                className="w-full p-2 border border-gray-300 rounded-md"
              />

              {/* Lainnya */}
              <input
                type="text"
                name="NoHpWhatsapp"
                value={formData.NoHpWhatsapp}
                onChange={handleChange}
                placeholder="No Hp/Whatsapp"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className={`w-full text-white py-2 rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Pesan sekarang"}
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }),
  { ssr: false }
);

export default OrderPage;
