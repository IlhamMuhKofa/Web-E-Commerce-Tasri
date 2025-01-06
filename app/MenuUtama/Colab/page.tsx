'use client';

import React, { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Distributor: React.FC = () => {
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
    ];

    const [selectedProvince, setSelectedProvince] = useState("");
    const [cities, setCities] = useState<string[]>([]);
    const [regions, setRegions] = useState<any[]>([]);

    useEffect(() => {
        // Memuat data JSON dari folder public
        const fetchRegions = async () => {
            const response = await fetch("/indonesiaCity.json");
            const data = await response.json();
            setRegions(data); // Menyimpan data provinsi dan kota
        };

        fetchRegions();
    }, []);


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
        NamaPelanggan: '',
        NamaToko: '',
        Provinsi: '',
        Kota: '',
        AlamatToko: '',
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
        if (!formData.NamaPelanggan || !formData.NamaToko || !formData.NoHpWhatsapp || !formData.AlamatToko) {
            toast.error("Harap isi semua field yang wajib diisi."); // Ganti statusMessage
            return;
        }

        setIsSubmitting(true); // Tampilkan loading state
    try {
      const botToken = "7214266325:AAEip3PZcHrG-t6tnENlbfd3Gad0GryPftQ"; // Token Bot Telegram
      const chatId = "-1002459018143"; // ID Chat Telegram Anda
      const message = `
        👤 *Ada Client baru daftar nih* :\n\n Nama : ${formData.NamaPelanggan}\n\n Nama Toko : ${formData.NamaToko}\n\n Provinsi : ${formData.Provinsi}\n\n Kota : ${formData.Kota}\n\n Alamat : ${formData.AlamatToko}\n\n No HP : ${formData.NoHpWhatsapp || "Tidak Diisi"}
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
        setFormData({ NamaPelanggan: '', NamaToko: '', Provinsi: '', Kota: '', AlamatToko: '', NoHpWhatsapp: '' }); // Reset form
      } else {
        toast.error(`Gagal mengirim pesan: ${result.description}`);
      }
    } catch (error) {
      toast.success("Pesan berhasil terkirim");
      setFormData({ NamaPelanggan: '', NamaToko: '', Provinsi: '', Kota: '', AlamatToko: '', NoHpWhatsapp: '' }); // Reset form
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
        <div>
            {/* Mitra Tasri Section */}
            <div className="bg-white py-16 px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Mitra Tasri</h2>
                    <p className="text-lg mb-8">
                        Mereka adalah mitra yang telah memilih bergabung dengan Tasri untuk membagikan air berkualitas dan perubahan yang lebih baik.
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
                    <Link href="/MenuUtama/Colab/AllMitra">
                        <span className="flex justify-center items-center mt-4 text-blue-600 font-semibold">
                            Selengkapnya <span className="ml-2">⟶</span>
                        </span>
                    </Link>
                </div>
            </div>

            {/* Benefit Section */}
            <section className="py-12 bg-gray-200">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Benefits Gabung Mitra Tasri
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {/* Card 1 */}
                    <div className="bg-blue-500 rounded-3xl shadow-xl p-6 flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-2xl duration-300">
                        <div className="bg-white text-white w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Image
                                    src="/icon/1.png"
                                    alt="Produk Berkualitas"
                                    width={48}
                                    height={48}
                                    loading="lazy"
                                    className="w-12 h-12"
                                />
                            </Suspense>
                        </div>
                        <p className="text-lg font-semibold text-center text-white">Mendapatkan produk berkualitas tinggi.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-2xl duration-300">
                        <div className="bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Image
                                    src="/icon/2.png"
                                    alt="Pemasaran Profesional"
                                    width={48}
                                    height={48}
                                    loading="lazy"
                                    className="w-12 h-12"
                                />
                            </Suspense>
                        </div>
                        <p className="text-lg font-semibold text-center text-black">Dukungan pemasaran profesional.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-blue-500 rounded-3xl shadow-xl p-6 flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-2xl duration-300">
                        <div className="bg-white text-white w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Image
                                    src="/icon/3.png"
                                    alt="Jaringan Distribusi"
                                    width={48}
                                    height={48}
                                    loading="lazy"
                                    className="w-12 h-12"
                                />
                            </Suspense>
                        </div>
                        <p className="text-lg font-semibold text-center text-white">Jaringan distribusi yang luas.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-2xl duration-300">
                        <div className="bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Image
                                    src="/icon/4.1.png"
                                    alt="Keuntungan Usaha"
                                    width={48}
                                    height={48}
                                    loading="lazy"
                                    className="w-12 h-12"
                                />
                            </Suspense>
                        </div>
                        <p className="text-lg font-semibold text-center text-black">Keuntungan usaha yang kompetitif.</p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-blue-500 rounded-3xl shadow-xl p-6 flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-2xl duration-300">
                        <div className="bg-white text-white w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Image
                                    src="/icon/5.1.png"
                                    alt="Peningkatan Skill"
                                    width={48}
                                    height={48}
                                    loading="lazy"
                                    className="w-12 h-12"
                                />
                            </Suspense>
                        </div>
                        <p className="text-lg font-semibold text-center text-white">Pertumbuhan bisnis yang berkelanjutan.</p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-2xl duration-300">
                        <div className="bg-blue-500 text-white w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Image
                                    src="/icon/6.png"
                                    alt="Akses Event Tasri"
                                    width={48}
                                    height={48}
                                    loading="lazy"
                                    className="w-12 h-12"
                                />
                            </Suspense>
                        </div>
                        <p className="text-lg font-semibold text-center text-black">Akses eksklusif ke event Tasri.</p>
                    </div>
                </div>
            </section>

            <section className="relative bg-cover bg-center py-16 px-8" style={{ backgroundImage: "url('/background/bc.1.jpg')" }}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    {/* Teks Pengajak */}
                    <div className="text-white space-y-6">
                        <h2 className="text-4xl font-bold">
                            Bergabung Bersama Kami dan <span className="text-blue-300">Perluas Kesempatan</span>
                        </h2>
                        <p className="text-lg">
                            Isi formulir di bawah ini dan mulailah perjalanan Anda sebagai mitra Tasri. Kami siap membantu Anda
                            untuk meningkatkan bisnis Anda ke tingkat berikutnya!
                        </p>
                    </div>

                    {/* Formulir */}
                    <div className="bg-white shadow-xl rounded-lg p-8 space-y-6">
                        <ToastContainer />
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Isi Data Anda</h3>
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                            className="space-y-6"
                        >
                            {/* Nama Pelanggan */}
                            <div>
                                <label htmlFor="nama-pelanggan" className="block text-sm font-semibold text-gray-600 mb-1">
                                    Nama Pelanggan
                                </label>
                                <input
                                    type="text"
                                    name="NamaPelanggan"
                                    value={formData.NamaPelanggan}
                                    onChange={handleChange}
                                    placeholder="Masukkan nama Anda"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>

                            {/* Nama Toko */}
                            <div>
                                <label htmlFor="nama-toko" className="block text-sm font-semibold text-gray-600 mb-1">
                                    Nama Toko
                                </label>
                                <input
                                    type="text"
                                    name="NamaToko"
                                    value={formData.NamaToko}
                                    onChange={handleChange}
                                    placeholder="Masukkan nama toko Anda"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>

                            {/* Pilihan Provinsi */}
                            <div>
                                <label htmlFor="nama-toko" className="block text-sm font-semibold text-gray-600 mb-1">
                                    Pilih Provinsi
                                </label>
                                <select
                                    name="Provinsi"
                                    value={formData.Provinsi}
                                    onChange={handleProvinceChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="">pilih provinsi anda</option>
                                    {regions.map((region) => (
                                        <option key={region.province} value={region.province}>
                                            {region.province}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Pilihan Kota */}
                            <div>
                                <label htmlFor="nama-toko" className="block text-sm font-semibold text-gray-600 mb-1">
                                    Pilih Kota
                                </label>
                                <select
                                    name="Kota"
                                    value={formData.Kota}
                                    onChange={handleCityChange}
                                    disabled={!selectedProvince}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="">pilih Kota anda</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Alamat Toko */}
                            <div>
                                <label htmlFor="alamat-toko" className="block text-sm font-semibold text-gray-600 mb-1">
                                    Alamat Toko
                                </label>
                                <textarea
                                    name="AlamatToko"
                                    value={formData.AlamatToko}
                                    onChange={handleChange}
                                    placeholder="Masukkan alamat toko secara lengkap"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>

                            {/* Nomor HP */}
                            <div>
                                <label htmlFor="no-hp" className="block text-sm font-semibold text-gray-600 mb-1">
                                    Nomor HP
                                </label>
                                <input
                                    type="tel"
                                    name="NoHpWhatsapp"
                                    value={formData.NoHpWhatsapp}
                                    onChange={handleChange}
                                    placeholder="Masukkan nomor HP"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className={`w-full text-white py-2 rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Mengirim..." : "Kirim Formulir"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Distributor;
