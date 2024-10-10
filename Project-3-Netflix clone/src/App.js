import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import Homepages from './HomePages/HomePages';
import SinglePage from './components/Watch/SinglePage';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Homepages/>}></Route>
      <Route path='/singlepage/:id' element={<SinglePage/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
