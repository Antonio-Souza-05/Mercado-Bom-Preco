import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">Mercado Bom Preço</div>

        <div className="search-bar">
          <input type="text" placeholder="Buscar produtos..." />
          <button>🔍</button>
        </div>

        <div className="header-icons">
          <span>📞 (77) 99999-9999</span>
          <span>🛒</span>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
