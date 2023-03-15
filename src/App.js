import React from 'react';
import { Route, Routes } from 'react-router-dom';
// App CSS
import './App.css';
// Components
import Header from './components/Header';
// Pages
import Main from './pages/Main';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/skills'} element={<Skills />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    </div>
  );
}

export default App;
