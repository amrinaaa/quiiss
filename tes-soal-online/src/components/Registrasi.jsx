import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const Registrasi = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nomor_hp, setNomor_hp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential= await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      const db = getFirestore();

      await setDoc(doc(db, 'users', user.uid), {
        nama,
        email,
        nomor_hp,
      });

      console.log("Akun berhasil didaftarkan", user);

      navigate('/login');
    } catch (err) {
      console.error("Gagal Registrasi", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Registrasi</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
            <label htmlFor='nama' className="block text-sm font-medium text-gray-700">Nama:</label>
            <input 
              type="text" 
              id="nama"
              name="nama"
              onChange={(e) => setNama(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email:</label>
            <input 
              type="text" 
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor='password' className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="nomorHp" className="block text-sm font-medium text-gray-700">Nomor HP:</label>
            <input
              type="text"
              id="nomorHp"
              name="nomorHp"
              onChange={(e) => setNomor_hp(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-primary text-white py-2 px-4 rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Daftar
          </button>
          <p className="text-center mt-4 text-sm">
            Sudah memiliki akun? <Link to="/login" className="text-primary hover:underline">Masuk</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registrasi;
