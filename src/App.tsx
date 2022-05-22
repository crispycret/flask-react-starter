import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './assets/css/App.css';

import {Props} from './helpers/props'

import Navbar from './components/nav/Navbar';
import Footer from './components/nav/Footer';
import Logout from './components/auth/Logout';


import Home from './pages/Home';
import Authentication from './pages/Authentication';
import UserList from './pages/UserList';
import NoPage from './pages/NoPage';



function App() {


  const props = Props()


  useEffect(() =>{

  }, [])

  return (
    <>
      <Navbar  {...props} />

      <div id="main">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home {...props} />} />
            <Route path='/' element={<Home {...props} />} />
            <Route path='/login' element={<Authentication {...props} />} />
            <Route path='/register' element={<Authentication  {...props} />} />
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
