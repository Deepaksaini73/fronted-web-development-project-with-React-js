import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import PremiumBook from './pages/Premium-book';
import OwnPublish from './pages/OwnPublish';
import Booklist from './Components/Booklist/Booklist';
import Bookdetail from './Components/Bookdetail/Bookdetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About />} />
        <Route path="premium-books" element={<PremiumBook />} />
        <Route path="own-publish" element={<OwnPublish />} />
        <Route path="/book" element={<Booklist />} />
        <Route path="/book/:id" element={<Bookdetail />} />
    </Routes>
  </BrowserRouter>
  </AppProvider>
);
