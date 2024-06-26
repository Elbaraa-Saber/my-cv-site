// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Header } from './UI/Header/ui.tsx';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './UI/Footer/ui.tsx';
import { MainPage } from '../Pages/index.ts';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
