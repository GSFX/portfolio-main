import React from 'react';
import './Main.css';

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
        <span>Hi! I'm Beaver</span>
        <br />
        <span>Front-end Developer</span>
      </div>
    </div>
  );
}
export default Main;
