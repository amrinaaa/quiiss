import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import gambar1 from '../assets/elips.png'; 
import gambar2 from '../assets/bro.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Autentikasi pengguna dengan email dan password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Ambil data pengguna dari Firestore
      const db = getFirestore();
      const userDoc = await getDoc(doc(db, 'users', user.uid));

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;

        console.log("Data Pengguna:", userData);
        // Arahkan pengguna ke halaman beranda atau halaman yang diinginkan setelah login
        console.log("Login Berhasil")

        if (role === 'admin') {
          navigate('/dashboard/admin');
          } else if (role === 'author'){
            navigate('/dashboard/author');
            }else {
              navigate('/dashboard/user');
        }

      } else {
        console.error("Tidak ada data pengguna");
      }
    } catch (err) {
      console.error("Gagal Login", err);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center bg-white">
      <div
        style={{
          backgroundImage: `url(${gambar1})`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '350px auto',
        }}
        className="absolute inset-0 bg-cover bg-no-repeat"
      />
      <div
        style={{
          backgroundImage: `url(${gambar2})`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '400px auto',
        }}
        className="absolute inset-0 bg-cover bg-no-repeat"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full max-w-md p-8 bg-secondary shadow-md rounded-lg ml-20">
        <h2 className="text-2xl font-bold mb-6 text-black">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className="block text-sm font-medium text-black">Email:</label>
            <input 
              type="text" 
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor='password' className="block text-sm font-medium text-black">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green text-black py-2 px-4 rounded-md shadow-sm hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Masuk
          </button>
          <p className="text-center mt-4 text-sm">
            Belum punya akun? <Link to="/registrasi" className="text-black font-bold hover:underline">Daftar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
