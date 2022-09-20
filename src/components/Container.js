import React from 'react'
import Navbar from './Navbar'
import {    BrowserRouter,
            Routes,
            Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Blog from '../pages/Blog'
import Error404 from '../pages/Error404'


const Container = () => {
    return (
      <>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
        <Contact />
      </>
    );
  };
  
  export default Container;
