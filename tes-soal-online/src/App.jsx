import React from 'react';
import Registrasi from './components/Registrasi';
import Login from './components/Login';
import Home from './components/Home'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Registrasi />} />
    <Route path='/registrasi' element={<Registrasi />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/home' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
