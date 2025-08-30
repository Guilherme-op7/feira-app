import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="inicio" className="container232">
      <div>
        <img
          className="frei-logo"
          src="/assets/images/frei.jpg"
          alt="logo do frei"
        />
      </div>

      <button
        className={`hamburguer ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navegation ${menuOpen ? "open" : ""}`}>
        <ul className="list">
          <li><a href="#inicio" onClick={toggleMenu}>início</a></li>
          <li><a href="#programa" onClick={toggleMenu}>programação</a></li>
          <li><a href="#formulario" onClick={toggleMenu}>inscrição</a></li>
          <li><a href="#contato" onClick={toggleMenu}>contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
