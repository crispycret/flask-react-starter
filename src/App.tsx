import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './assets/css/App.css';

import {Props} from './helpers/props'

import Authentication from './components/auth/Authentication'
import Logout from './components/auth/Logout';

import Navbar from './components/nav/Navbar';
import Footer from './components/nav/Footer';


import Home from './pages/Home';
import LoginRegiseter from './pages/LoginRegiseter';
import UserList from './pages/UserList';
import NoPage from './pages/NoPage';



function App() {


  const props = Props()


  useEffect(() =>{

  }, [])

  return (
    <>
      <Authentication {...props} />
      <Navbar  {...props} />

      <div id="main">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home {...props} />} />
            <Route path='/' element={<Home {...props} />} />
            <Route path='/login' element={<LoginRegiseter {...props} />} />
            <Route path='/register' element={<LoginRegiseter  {...props} />} />
            <Route path='/logout' element={<Logout {...props} />} />
            <Route path='/users' element={<UserList {...props} />} />
            <Route path='*' element={<NoPage {...props} />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </>

  );
}

export default App;
