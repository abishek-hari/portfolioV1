import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__nav'>
        <div className='div'>
          <Link to='/' className='header__logo'>
            A
          </Link>
          <Link to='/' className='header__logo-1'>
            B
          </Link>
          <Link to='/' className='header__logo-2'>
            I
          </Link>
        </div>
        <a
          href='https://drive.google.com/file/d/11gu6x95Vs5OZ5PQSKv8EHGaJiIMn7sR0/view'
          target='_blank'
          className='header__link'
        >
          RESUME
        </a>
      </div>
    </header>
  );
};

export default Header;
