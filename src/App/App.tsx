import React from 'react';
import './App.scss';
import { Header } from './UI/Header/ui.tsx';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './UI/Footer/ui.tsx';
import { MainPage } from '../Pages/index.ts';


function App() {
  const arrPages = [
    { id: '1' , name: 'Home', link: '/'},
    { id: '2' , name: 'About Me', link: '/'},
    { id: '3' , name: 'Projects', link: '/'},
    { id: '4' , name: 'My Experience', link: '/'},
    { id: '5' , name: 'Contact', link: '/'}
  ]
  return (
    <Router>
      <div className="App">
      <div className='App__border'></div>
        <Header pages={arrPages}/>
        <MainPage/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
