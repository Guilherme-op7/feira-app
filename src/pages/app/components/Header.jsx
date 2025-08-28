import { Link } from "react-router";

export function Header() {
  return (
    <header id="inicio" className="container">
      <div>
        <img
          className="frei-logo"
          src="/assets/images/feira.png"
          alt="logo do frei"
        />
      </div>
      <div className="navegation">
        <nav>
          <ul className="list">
            <li><a href="inicio">inicio</a></li>
            <li><a href="#programa">programação</a></li>
            <li><a href="#cursos">cursos</a></li>
            <li><a href="#formulario">inscrição</a></li>
            <li><a href="#contato">contato</a></li>
          </ul>
        </nav>
      </div>
     
    </header>
  );
};

export default Header;
