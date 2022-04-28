import React from 'react';
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
        <h1 className="header-title">Converter</h1>
        <p className="header-amount">
            1 euro
        </p>
    </header>
  )
}


export default Header;