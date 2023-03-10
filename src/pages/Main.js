import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Main.scss';

function Main() {
  const text = ['Frontend Developer', 'React Developer'];
  const [val, setVal] = useState('');
  let [i, setI] = useState(1);
  let [j, setJ] = useState(0);

  useEffect(() => {
    const index = setInterval(() => {
      const a = text[j].slice(0, i + 1);
      setVal(a);
      setI(i++);
      if (i > text[j].length) {
        return;
      }
      if (i === text[j].length) {
        setI(0);
        setJ(++j);
        console.log(j);
        if (text.length === j) {
          setJ(0);
          setI(1);
        }
      }
    }, Math.random() * 300);
    return () => {
      clearInterval(index);
    };
  });

  return (
    <>
        <div className="MainBlockD">
        <div id="CardMain"></div>
          <div className="MainInfo">
            <p className="HiThere">Hi there</p>
            <h2>I'm Beaver</h2>
            <label>{val}</label>
            <NavLink to={'/about'}>about me ⏎</NavLink>
          </div>
        </div>
    </>
  );
}

export default Main;
