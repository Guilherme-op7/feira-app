
export function hero(){
  return (
    <div className="TL-inicial">
      <div className="conteudo">

      <div>
        <img
          className="frei-logo22"
          src="/assets/images/selo.png"
          alt="logo do frei"
        />
      </div>
        <h1>
          Descubra seu <span className="highlight1">futuro</span> na <br />
          <span className="highlight1"> 5ª</span> Feira das Profissões <br /> 2025!
        </h1>
        <div className="bloco">
          <p className="b">
            "Esforço que transforma, e o orgulho
            permanece"
          </p>

          <div className="botoes-hero">
            <button className="Programing"><a className="botao1" href="#programa">Ver Programação</a>  </button>
            <button  className="Inscricao"><a className="botao2" href="#formulario">Fazer minha Inscrição</a> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
