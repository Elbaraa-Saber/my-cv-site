import React from 'react';
import './App.scss';
import { Header } from './UI/Header/ui.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './UI/Footer/ui.tsx';
import { MainPage } from '../Pages/index.ts';


function App() {
  const arrPages = [
    { id: '1', name: 'Home', link: 'home' },
    { id: '2', name: 'About Me', link: 'aboutme' },
    { id: '4', name: 'My Experience', link: 'myexperience' },
    { id: '3', name: 'Projects', link: 'projects' },
    { id: '5', name: 'Contact', link: 'contact' }
  ];
  return (
    <Router>
      <div className="App">
      <div className='App__border'></div>
      <Header pages={arrPages} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Additional routes can go here */}
        </Routes>
        <MainPage/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
