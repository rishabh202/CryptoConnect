import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Typography, Layout, Space } from 'antd';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News, Footer, Main } from "./components";
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'> <Navbar/></div>
      <div className='main'> 
      <Layout>
        <div className='routes'><Routes>
          <Route path='/'element={<Homepage />}/>
          <Route path='/exchnages'element={<Exchanges />} />
          <Route path='/cryptocurriencies'element={<Cryptocurrencies />} />
          <Route path='/crypto/:coinId'element={<CryptoDetails />} />
          <Route path='/news'element={<News />} />
          </Routes></div>
        </Layout> </div>
      <div className='footer'> </div>
    </div>
  )
}

export default App;
