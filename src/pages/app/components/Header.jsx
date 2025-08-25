export function Header() {
  return (
    <header className="container">
      <div>
        <img
          className="frei-logo"
          src="/assets/images/logo-frei.png"
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
        <button className="Adm">Acesso Administrativo</button>
      </div>
    </header>
  );
};

export default Header;
