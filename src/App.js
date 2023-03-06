import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// Components
import Header from './components/Header';
// Pages
import Main from './pages/Main';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/skills'} element={<Skills />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/contacts'} element={<Contacts />} />
        </Routes>
    </div>
  );
}

export default App;
