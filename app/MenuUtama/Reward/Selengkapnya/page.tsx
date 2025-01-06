import Link from "next/link";

export default function RewardDetail() {
    // Daftar deskripsi unik untuk setiap item penghargaan
    const rewardDescriptions = [
        "Penghargaan atas pencapaian luar biasa dalam inovasi.",
        "Penghargaan untuk kontribusi terbaik dalam komunitas.",
        "Penghargaan untuk hasil kerja keras dan dedikasi.",
        "Penghargaan khusus untuk tim dengan kinerja optimal.",
        "Penghargaan atas keunggulan dalam layanan pelanggan.",
        "Penghargaan untuk pencapaian luar biasa dalam penelitian.",
        "Penghargaan untuk peran kepemimpinan yang inspiratif.",
        "Penghargaan atas kontribusi signifikan dalam industri.",
        "Penghargaan atas komitmen pada keberlanjutan.",
        "Penghargaan untuk solusi inovatif dalam teknologi.",
        "Penghargaan untuk dedikasi dalam pendidikan masyarakat.",
        "Penghargaan atas peningkatan efisiensi operasional.",
        "Penghargaan untuk kreativitas dan inovasi.",
        "Penghargaan untuk dampak sosial yang positif.",
        "Penghargaan untuk kualitas layanan yang unggul.",
        "Penghargaan untuk pemikiran strategis dalam bisnis."
    ];

    // Daftar URL gambar untuk setiap item penghargaan
    const rewardImages = [
        "/images/reward1.jpg",
        "/images/reward2.jpg",
        "/images/reward3.jpg",
        "/images/reward4.jpg",
        "/images/reward5.jpg",
        "/images/reward6.jpg",
        "/images/reward7.jpg",
        "/images/reward8.jpg",
        "/images/reward9.jpg",
        "/images/reward10.jpg",
        "/images/reward11.jpg",
        "/images/reward12.jpg",
        "/images/reward13.jpg",
        "/images/reward14.jpg",
        "/images/reward15.jpg",
        "/images/reward16.jpg"
    ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Penghargaan Lainnya</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
                {[...Array(16)].map((_, index) => (
                    <div key={index} className="bg-gray-300 rounded-lg p-4">
                        {/* Tempat Gambar Penghargaan */}
                        <div className="h-24 bg-gray-400 rounded-md mb-2 overflow-hidden">
                            <img
                                src={rewardImages[index] || "/images/default.jpg"}
                                alt={`Penghargaan ${index + 1}`}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        {/* Deskripsi Penghargaan */}
                        <p className="text-sm text-center text-gray-600">
                            {rewardDescriptions[index] || "Deskripsi tidak tersedia"}
                        </p>
                    </div>
                ))}
            </div>
            <Link href="/MenuUtama/Reward" className="flex justify-center items-center mt-4 text-blue-600 font-semibold">
                ← Kembali ke Reward Utama
            </Link>
        </div>
    );
}
