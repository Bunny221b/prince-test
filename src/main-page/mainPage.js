import React, { useState } from "react";
import "./mainPage.css";
import { GiHamburgerMenu } from "react-icons/gi";

const MainPage = () => {

    const [style, setStyle] = useState({
        display: 'none',
    });

    function setStyleFunction () {
        if (style.display === 'none') {
            setStyle({
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                padding: '15px',
                fontSize: 'larger',
                color: 'white',
                top: '80px',
                transition: 'top 2s ease, transform 2s ease',
            })
        } else {
            setStyle({
                display: 'none',
                transition: 'top 0.5s ease, transform 0.5s ease',
            })
        }
    }

  return (
    <div className="main-header">
      <div className="header">
        <div className="logo">
          <h1>Prince Utils</h1>
        </div>
        <div className="menu">
          <p>Home</p>
          <p>Services</p>
          <p>About us</p>
          <p>Contact</p>
        </div>
        <div className="ham-icon">
          <GiHamburgerMenu  onClick={setStyleFunction}/>
        </div>
      </div>
      <div className="topbar">
        <div style={style} className={`${style.display === 'none' && 'top-menu'}`}>
            <p>Home</p>
            <p>Services</p>
            <p>About us</p>
            <p>Contact</p>
            </div>
        </div>
    </div>
  );
};

export default MainPage;
