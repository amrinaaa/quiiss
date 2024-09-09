import React from 'react';
import Registrasi from './components/Registrasi';
import Login from './components/Login';
import DashboardAdmin from './components/Admin/DashboardAdmin';
import DashboardUser from './components/Pengguna/DashboardUser';
import DashboardAuthor from './components/Author/DashboardAuthor';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Registrasi />} />
    <Route path='/registrasi' element={<Registrasi />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/dashboard/admin' element={<DashboardAdmin />}></Route>
    <Route path='/dashboard/user' element={<DashboardUser />}></Route>
    <Route path='/dashboard/author' element={<DashboardAuthor />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
