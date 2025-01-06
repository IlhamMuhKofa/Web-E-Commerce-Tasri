'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Sejarah = () => {
    const [scrollY, setScrollY] = useState(0);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
            {/* Section: Sejarah Tasri */}
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sejarah Tasri</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 ml-8 items-start mb-16"
                >
                    <div className="space-y-4 order-last md:order-first">
                        <h3 className="text-xl font-semibold text-gray-800">Didirikan pada tahun 2004</h3>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-gray-700 text-justify leading-relaxed"
                        >
                            oleh dua anak dari Kota Payakumbuh, Sumatra Barat, yaitu H. Tito Idroes, S.Sos dan Hj. Ir. Diana Anggraini. Kota Payakumbuh, yang terkenal dengan Gunung Sago, terletak di Kabupaten Lima Puluh Kota. Sebagian kaki Gunung Sago berada di wilayah Payakumbuh. Gunung ini sudah tidak aktif selama ratusan tahun, namun tetap memiliki hutan lebat yang menjadi sumber air yang melimpah bagi masyarakat setempat. Hingga saat ini, Gunung Sago tetap kokoh dan terjaga karena hutan sekitarnya dilindungi dan tidak ditebang secara liar.
                            Secara geografis, Kota Payakumbuh dan Kabupaten Lima Puluh Kota terletak di antara Kota Padang dan Pekanbaru. Jaraknya kurang lebih sama ke kedua kota tersebut, sehingga wilayah ini menjadi jalur utama perjalanan antara provinsi Sumatra Barat dan Riau.
                        </motion.p>
                    </div>
                    <div className="space-y-4">
                        <Image
                            src="/sejarah/brosur.png" // Pastikan path file benar
                            alt="Sejarah Tasri"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </motion.div>

                {/* Section: Pendiri Tasri */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pendiri Tasri</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 mr-20 items-start"
                >
                    <div className="space-y-4">
                        <Image
                            src="/sejarah/paktito.png" // Pastikan path file benar
                            alt="Pendiri Tasri"
                            width={400}
                            height={300}
                            className="rounded-lg shadow-lg md:ml-auto"
                        />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800">H. Tito Idroes S.Sos.</h3>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-gray-700 text-justify leading-relaxed "
                        >
                            Kami terus berkembang dan berinovasi untuk menjadi pemimpin dalam industri ini. Dengan teknologi canggih dan sumber daya manusia yang handal, Tasri berkomitmen untuk terus membawa produk berkualitas ke masyarakat luas dan menjaga lingkungan sekitar.
                            Perusahaan Tasri didirikan pada tahun 2004 oleh dua anak dari Kota Payakumbuh, Sumatra Barat, yaitu H. Tito Idroes, S.Sos dan Hj. Ir. Diana Anggraini. Kota Payakumbuh, yang terkenal dengan Gunung Sago, terletak di Kabupaten Lima Puluh Kota. Sebagian kaki Gunung Sago berada di wilayah Payakumbuh. Gunung ini sudah tidak aktif selama ratusan tahun, namun tetap memiliki hutan lebat yang menjadi sumber air yang melimpah bagi masyarakat setempat. Hingga saat ini, Gunung Sago tetap kokoh dan terjaga karena hutan sekitarnya dilindungi dan tidak ditebang secara liar.
                            Secara geografis, Kota Payakumbuh dan Kabupaten Lima Puluh Kota terletak di antara Kota Padang dan Pekanbaru. Jaraknya kurang lebih sama ke kedua kota tersebut, sehingga wilayah ini menjadi jalur utama perjalanan antara provinsi Sumatra Barat dan Riau.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Section: Video */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-10 mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Video Sejarah Tasri</h2>
                    <div className="w-full max-w-4xl mx-auto">
                        <video
                            controls
                            className="w-full rounded-lg shadow-lg"
                            width="426"
                            height="240"
                        >
                            <source src="/sejarah/TASRI.mp4" type="video/mp4" /> {/* Pastikan path file benar */}
                            <p>
                                Browser Anda tidak mendukung video HTML5. Silakan unduh videonya{' '}
                                <a href="/sejarah/TASRI.mp4" className="text-blue-500 underline">di sini</a>.
                            </p>
                        </video>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Sejarah;
