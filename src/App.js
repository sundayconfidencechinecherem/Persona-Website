import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogHome from './components/Blog/BlogHome';
import BlogPost from './components/Blog/BlogPost';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;