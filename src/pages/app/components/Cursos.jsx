
export function Cursos() {
  return (
    <div className="Cursos">
      <h1> Conheça Nossos Cursos </h1>
      <p>
        Descubra qual caminho <span className="highlight">profissional</span>{" "}
        combina com você. Explore nossos
        <span className="highlight"> cursos técnicos</span> e se prepare para
        o mercado de trabalho.
      </p>
      <div className="Quadros-Cursos">
        <div className="CV curso-card">
          <img
            src="/assets/images/cv.png"
            alt="imagem ilustrativa administração"
          />
          <h1 className="CV-text">
            Forme-se para liderar empresas e desenvolver seu próprio negócio
          </h1>
          <p className="CV-text">Áreas: Empresas, Startups, Consultoria</p>
        </div>
        <div className="Info curso-card">
          <img
            src="/assets/images/info.png"
            alt="imagem ilustrativa comunicação visual"
          />
          <h1 className="Info-text">TI e Programação em Alta</h1>
          <p className="Info-text">
            Forme-se para liderar empresas e desenvolver seu próprio negócio
          </p>
          <p className="Info-text">
            Áreas: Empresas, Startups, Consultoria{" "}
          </p>
        </div>
        <div className="Admn curso-card">
          <img
            src="/assets/images/adm.png"
            alt="imagem ilustrativa informatica"
          />
          <h1 className="Admn-text">
            Administração
          </h1>
          <p className="Admn-text">
            Forme-se para liderar empresas e desenvolver seu próprio negócio
          </p>
          <p className="Admn-text"> Áreas: Empresas, Startups, Consultoria</p>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
