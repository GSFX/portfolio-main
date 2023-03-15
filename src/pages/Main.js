import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css';

// Animation for Stars
function generateRandomBoxShadow(n) {
  let value = '';
  for (let i = 0; i < n; i++) {
    value += `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
    if (i !== n - 1) {
      value += ',';
    }
  }
  return value;
}


function Main() {
  const shadowsSmall = generateRandomBoxShadow(700);
  const shadowsMedium = generateRandomBoxShadow(200);
  const shadowsBig = generateRandomBoxShadow(100);

  return (
    <div className="container">
      <div id="stars" style={{ boxShadow: shadowsSmall }}></div>
      <div id="stars2" style={{ boxShadow: shadowsMedium }}></div>
      <div id="stars3" style={{ boxShadow: shadowsBig }}></div>
      <div id="title">
        <span className='HiThere'>Hi There!</span>
        <br />
        <span className='ImBeaver'>I'm Beaver</span>
        <br />
        <span className='Front'>Front-end Developer_</span>
        <br />
        <NavLink to={'/about'} ><span className='about-me'>about me ⏎</span></NavLink>
      </div>
    </div>
  );
}
export default Main;
