import React, { useState } from 'react';
import './App.css';
import { Header } from './UI/Header/ui.tsx';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './UI/Footer/ui.tsx';
import { MainPage } from '../Pages/index.ts';


function App() {
  const [language , setLanguage] = useState<"Russian" | "English">('Russian');
  return (
    <Router>
      <div className="App">
        <Header selectedLang={language} setSelectedLang={setLanguage}/>
        <MainPage selectedLang={language}/>
        <Footer selectedLang={language}/>
      </div>
    </Router>
  );
}

export default App;
