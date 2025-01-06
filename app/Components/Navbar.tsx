"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaHistory, FaBuilding, FaProjectDiagram, FaHandshake, FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownTentang, setDropdownTentang] = useState(false);
  const [dropdownPartisipasi, setDropdownPartisipasi] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownTentang = () => {
    setDropdownTentang(!dropdownTentang);
  };

  const toggleDropdownPartisipasi = () => {
    setDropdownPartisipasi(!dropdownPartisipasi);
  };

  return (
    <nav className="sticky top-0 z-10 bg-sky-500 flex items-center justify-between w-full mx-auto px-9 py-5 relative z-30">

      {/* Logo dan Nama Perusahaan */}

      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image src="/icon/logo.png" alt="logo" width={90} height={50} />
          <span className="ml-3 text-black font-medium text-lg">CV. MultiRejeki Selaras</span>
        </Link>
      </div>

      {/* Menu Links untuk layar besar */}
      <ul className="hidden md:flex md:space-x-8 items-center">
        <li>
          <Link href="/MenuUtama/produk" className="text-white hover:text-gray-300">Produk</Link>
        </li>


        {/* Dropdown Tentang Tasri */}
        <li className="relative">
          <button onClick={toggleDropdownTentang} className="flex items-center text-white hover:text-gray-300 focus:outline-none">
            Tentang Tasri
            <FaChevronDown className={`ml-1 transition-transform ${dropdownTentang ? "rotate-180" : ""}`} />
          </button>
          {dropdownTentang && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <li className="bg-blue-100 hover:bg-blue-200">
                <a href="/MenuUtama/Sejarah" className="flex items-center px-4 py-2">
                  <FaHistory className="mr-2 text-blue-500" /> Sejarah
                </a>
              </li>
              <li className="bg-green-100 hover:bg-green-200">
                <a href="/MenuUtama/Reward" className="flex items-center px-4 py-2">
                  <FaBuilding className="mr-2 text-green-500" /> Pencapaian
                </a>
              </li>
              <li className="bg-yellow-100 hover:bg-yellow-200">
                <a href="/MenuUtama/Tim" className="flex items-center px-4 py-2">
                  <FaProjectDiagram className="mr-2 text-yellow-500" /> Tim CV. MRS
                </a>
              </li>
            </ul>
          )}
        </li>

        <li><a href="/MenuUtama/Galeri" className="text-white hover:text-gray-300">Galeri</a></li>

        <li><a href="/MenuUtama/artikel" className="text-white hover:text-gray-300">Artikel</a></li>

        {/* Dropdown Partisipasi */}
        <li className="relative">
          <button onClick={toggleDropdownPartisipasi} className="flex items-center text-white hover:text-gray-300 focus:outline-none">
            Partisipasi
            <FaChevronDown className={`ml-1 transition-transform ${dropdownPartisipasi ? "rotate-180" : ""}`} />
          </button>
          {dropdownPartisipasi && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <li className="bg-blue-100 hover:bg-blue-200">
                <a href="/MenuUtama/Colab" className="flex items-center px-4 py-2">
                  <FaHandshake className="mr-2 text-blue-500" /> Distributor
                </a>
              </li>
              <li className="bg-green-100 hover:bg-green-200">
                <a href="/MenuUtama/Pembelian" className="flex items-center px-4 py-2">
                  <FaShoppingCart className="mr-2 text-green-500" /> Pemesanan
                </a>
              </li>
              {/* 
              <li className="bg-yellow-100 hover:bg-yellow-200">
                <a href="/MenuUtama/Pendaftaran" className="flex items-center px-4 py-2">
                  <FaCalendarAlt className="mr-2 text-yellow-500" /> Daftar Event
                </a>
              </li>*/}
            </ul>
          )}
        </li>

        <li><a href="/MenuUtama/Kontak" className="text-white hover:text-gray-300">Kontak Kami</a></li>
      </ul>

      {/* Toggle Button untuk Mobile */}
      <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar Menu untuk layar mobile */}
      <div className={`fixed top-0 right-0 h-full w-1/2 bg-sky-600 p-6 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        {/* Close Icon */}
        <div className="flex justify-end">
          <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <ul className="flex flex-col space-y-4 mt-8">
          <li><a href="/MenuUtama/produk" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>Produk</a></li>

          {/* Dropdown Tentang Tasri di Mobile */}
          <li className="text-white text-lg">
            <button onClick={toggleDropdownTentang} className="flex items-center w-full text-left focus:outline-none">
              Tentang Tasri
              <FaChevronDown className={`ml-1 transition-transform ${dropdownTentang ? "rotate-180" : ""}`} />
            </button>
            {dropdownTentang && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="bg-blue-100 hover:bg-blue-200">
                  <a href="/MenuUtama/Sejarah" className="flex items-center text-black" onClick={toggleMenu}>
                    <FaHistory className="mr-2 text-blue-500" /> Sejarah
                  </a>
                </li>
                <li className="bg-green-100 hover:bg-green-200">
                  <a href="/MenuUtama/Reward" className="flex items-center text-black" onClick={toggleMenu}>
                    <FaBuilding className="mr-2 text-green-500" /> Pencapaian
                  </a>
                </li>
                <li className="bg-yellow-100 hover:bg-yellow-200">
                  <a href="/MenuUtama/Tim" className="flex items-center text-black" onClick={toggleMenu}>
                    <FaProjectDiagram className="mr-2 text-yellow-500" /> Tim CV. MRS
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li><a href="/MenuUtama/Galeri" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>Galeri</a></li>

          <li><a href="/MenuUtama/artikel" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>Artikel</a></li>

          {/* Dropdown Partisipasi di Mobile */}
          <li className="text-white text-lg">
            <button onClick={toggleDropdownPartisipasi} className="flex items-center w-full text-left focus:outline-none">
              Partisipasi
              <FaChevronDown className={`ml-1 transition-transform ${dropdownPartisipasi ? "rotate-180" : ""}`} />
            </button>
            {dropdownPartisipasi && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="bg-blue-100 hover:bg-blue-200">
                  <a href="/MenuUtama/Colab" className="flex items-center text-black" onClick={toggleMenu}>
                    <FaHandshake className="mr-2 text-blue-500" /> Distributor
                  </a>
                </li>
                <li className="bg-green-100 hover:bg-green-200">
                  <a href="/MenuUtama/Pembelian" className="flex items-center text-black" onClick={toggleMenu}>
                    <FaShoppingCart className="mr-2 text-green-500" /> Pesan Produk
                  </a>
                </li>
                {/* 
                <li className="bg-yellow-100 hover:bg-yellow-200">
                  <a href="/MenuUtama/Pendaftaran" className="flex items-center text-black" onClick={toggleMenu}>
                    <FaCalendarAlt className="mr-2 text-yellow-500" /> Daftar Event
                  </a>
                </li>*/}
              </ul>
            )}
          </li>

          <li><a href="/MenuUtama/Kontak" className="text-white text-lg hover:text-gray-300" onClick={toggleMenu}>Kontak Kami</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
