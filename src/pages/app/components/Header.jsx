import { Link } from "react-router";
import '../styles/_header.scss'
export function Header() {
  return (
    <header className="container">
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
            <li>inicio</li>
            <li>programação</li>
            <li>cursos</li>
            <li>inscrição</li>
            <li>contato</li>
          </ul>
        </nav>
      </div>
      <div className="acesso">
       <Link to="/painelAdmin">
          <button className="Adm">Acesso Administrativo</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;