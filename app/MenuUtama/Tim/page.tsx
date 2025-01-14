'use client';
import React, { useState } from 'react';

const teamData = {
  ceo: {
    name: 'H. Tito Idroes S.Sos.',
    position: 'CEO & Founder',
    imageUrl: '/tim/bapak tito.png',
  },
  hrLeaders: [
    { name: 'NAMA ORANG', position: 'HR Manager', imageUrl: '/tim/PP.jpg' },
    { name: 'NAMA ORANG', position: 'HRD Manager', imageUrl: '/tim/PP.jpg' },
    { name: 'NAMA ORANG', position: 'HR Manager', imageUrl: '/tim/PP.jpg' },
    { name: 'NAMA ORANG', position: 'HRD Manager', imageUrl: '/tim/PP.jpg' },
    { name: 'NAMA ORANG', position: 'HR Manager', imageUrl: '/tim/PP.jpg' },
  ],
  otherTeam: [
    { name: 'Team 1', imageUrl: '/tim/TEAM.jpg' },
    { name: 'Team 2', imageUrl: '/tim/TEAM.jpg' },
    { name: 'Team 3', imageUrl: '/tim/TEAM.jpg' },
    { name: 'Team 4', imageUrl: '/tim/TEAM.jpg' },
    { name: 'Team 5', imageUrl: '/tim/TEAM.jpg' },
    { name: 'Team 6', imageUrl: '/tim/TEAM.jpg' },
    { name: 'Team 7', imageUrl: '/tim/TEAM.jpg' },
    { name: 'Team 8', imageUrl: '/tim/TEAM.jpg' },
  ],
};

const TeamPage: React.FC = () => {
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
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto">
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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.otherTeam.map((member, index) => (
            <div
              key={index}
              className="relative group bg-gray-100 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">{member.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
