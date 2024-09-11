import React from 'react';
import { NavLink } from 'react-router-dom';

const Body = () => {
  return (
    <div className="pt-16 px-4">
      <h1 className="text-4xl font-bold text-left mb-4">
        Tingkatkan Kemampuanmu dengan Tes Soal Online Terlengkap
      </h1>
      <p className="text-left mb-8">Pengalaman tes online terbaik</p>

      {/* Flex container to align buttons side by side */}
      <div className="flex space-x-4">
        <NavLink 
          to="/mulai-tes" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Mulai Tes Sekarang
        </NavLink>
        <NavLink 
          to="/buat-soal" 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Buat Soal Sendiri
        </NavLink>
      </div>
    </div>
  );
};

export default Body;
