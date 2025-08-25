export function Estrutura() {
  return (
    <div className="Estrutura-Mom">
      <h1 className="Estructure-title">Nossa estrutura</h1>
      <p className="Estructure-text">
        Conheça nossos laboratórios, salas{" "}
        <span className="highlight">modernas</span> e espaços de aprendizado{" "}
      </p>
     <div className='container'>
       <div className="estrutura-image-container">
        <img src="/assets/images/fachada.png" alt="Foto do prédio" />
      </div>

      <div className="Cards-Estrutura">
        <div className="Qp1">
          <h1>Laboratórios de Informática</h1>
          <p>
            Equipados com computadores{" "}
            <span className="highlight">modernos</span> e softwares
            atualizados, ideais para práticas, pesquisas e desenvolvimento de{" "}
            <span className="highlight">projetos.</span>
          </p>
        </div>
        <div className="Qp2">
          <h1>Salas Com Espaço Amplo</h1>
          <p>
            Ambientes <span className="highlight">confortáveis,</span> bem
            iluminados e <span className="highlight">organizados</span>,
            garantindo mais <span className="highlight">liberdade</span> e
            interação nas atividades.
          </p>
        </div>
        <div className="Qp3">
          <h1>Auditório Para Uso</h1>
          <p>
            Estrutura preparada para{" "}
            <span className="highlight">palestras</span>,{" "}
            <span className="highlight">workshops</span> e{" "}
            <span className="highlight">apresentações</span>, com som e
            projeção de alta qualidade.
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Estrutura;
