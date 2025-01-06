'use client';
import React, { useState } from 'react';

const teamData = {
  teamCategories:
    ['Tim Produksi',
      'Tim Accounting',
      'Tim IT',
      'Tim Sales',
      'Tim Gudang',
      'Tim Satpam',
      'Tim Supervisor',
      'Tim Tambahan 1'
    ], // Kategori hanya untuk "Team Lainnya"
  members: [
    //tim produksi
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim Produksi', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim Produksi', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Produksi', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim Produksi', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Produksi', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim Produksi', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim Produksi', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Produksi', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim Produksi', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Produksi', imageUrl: '/tim/tim3.1.jpg' },
    // Tambahkan lebih banyak anggota tim di sini
    //tim accounting
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim Accounting', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim Accounting', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Accounting', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim Accounting', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Accounting', imageUrl: '/tim/tim3.1.jpg' },
    //tim it
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim IT', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim IT', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim IT', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim IT', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim IT', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim IT', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim IT', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim IT', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim IT', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim IT', imageUrl: '/tim/tim3.1.jpg' },
    //tim sales
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim Sales', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim Sales', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Sales', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim Sales', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Sales', imageUrl: '/tim/tim3.1.jpg' },
    //tim gudang
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim Gudang', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim Gudang', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Gudang', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim Gudang', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Gudang', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim Gudang', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim Gudang', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Gudang', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim Gudang', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Gudang', imageUrl: '/tim/tim3.1.jpg' },
    //tim satpam
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim Satpam', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim Satpam', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Satpam', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim Satpam', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Satpam', imageUrl: '/tim/tim3.1.jpg' },
    //tim supervisor
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim Supervisor', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim Supervisor', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Supervisor', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim Supervisor', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Supervisor', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Sophia Lee', position: 'UI/UX Designer', category: 'Tim Supervisor', imageUrl: '/tim/tim1.jpg' },
    { name: 'Michael Tan', position: 'Software Engineer', category: 'Tim Supervisor', imageUrl: '/tim/tim2.jpeg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Supervisor', imageUrl: '/tim/tim3.1.jpg' },
    { name: 'Daniel Kim', position: 'Product Manager', category: 'Tim Supervisor', imageUrl: '/tim/tim4.jpg' },
    { name: 'Emily Chen', position: 'Marketing Specialist', category: 'Tim Supervisor', imageUrl: '/tim/tim3.1.jpg' },
  ],
  ceo: {
    name: 'H. Tito Idroes S.Sos.',
    position: 'CEO & Founder',
    imageUrl: '/tim/bapak tito.png',
  },
  hrLeaders: [
    { name: 'Ilham Muh Kofa S.Tr.Kom.', position: 'HR Manager', imageUrl: '/tim/Ilham.jpg' },
    { name: 'Dexy Alfaro S.Tr.Kom.', position: 'HRD Manager', imageUrl: '/tim/Dexy.jpg' },
    { name: 'Ilham Muh Kofa S.Tr.Kom.', position: 'HR Manager', imageUrl: '/tim/Ilham.jpg' },
    { name: 'Dexy Alfaro S.Tr.Kom.', position: 'HRD Manager', imageUrl: '/tim/Dexy.jpg' },
    { name: 'Ilham Muh Kofa S.Tr.Kom.', position: 'HR Manager', imageUrl: '/tim/Ilham.jpg' },
  ],
};

const TeamPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(teamData.teamCategories[0]);

  // Filter anggota berdasarkan kategori
  const filteredMembers = teamData.members.filter((member) => member.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 my-12 space-y-8">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Tim CV. MultiRejeki Selaras</h1>
        <p className="text-lg text-gray-600">Kenali lebih dekat tim kami yang berdedikasi.</p>
      </header>

      {/* CEO Section */}
      <section className="text-center mb-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <img
              src={teamData.ceo.imageUrl}
              alt={teamData.ceo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold">{teamData.ceo.name}</h2>
          <p className="text-xl text-gray-600">{teamData.ceo.position}</p>
        </div>
      </section>

      {/* HR Leaders Section */}
      <section className="space-y-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Para Pemimpin HR</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamData.hrLeaders.map((leader, index) => (
            <div
              key={index}
              className="text-center bg-white shadow-md rounded-lg p-6 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden mx-auto">
                <img
                  src={leader.imageUrl}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">{leader.name}</h3>
              <p className="text-gray-600 text-lg">{leader.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Lainnya Section */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800">Team Lainnya</h2>
        </div>

        {/* Kategori Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center lg:space-x-4 gap-4 mb-8">
          {teamData.teamCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium ${selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Anggota Tim Lainnya */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white shadow-md rounded-lg p-2 transform hover:scale-105 transition"
            >
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-2">
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-xs">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
