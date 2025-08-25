import '../styles/_participar.scss'

export function Participar() {
  return (
    <div className="Participe-Mom">
      <h1 className="Participe-Text">Por que Participar?</h1>

      <div className="Cards-Participar">
        <div className="QpParticipar card1">
          <div className="card-header">
            <img src="/assets/images/Frame.png" alt="Microfone" />
          </div>
          <div className="card-body">
            <h1>Depoimentos Inspiradoras</h1>
            <h2>Visite nossos laboratórios e salas</h2>
            <p>
              Ouça histórias reais de profissionais que trilharam caminhos de{" "}
              <span className="highlight">sucesso</span> em suas áreas.
              Descubra <span className="highlight">dicas valiosas</span> e
              inspire-se para sua jornada
              <span className="highlight">profissional</span>.
            </p>
          </div>
        </div>

        <div className="QpParticipar card2">
          <div className="card-header">
            <img src="/assets/images/Frame.png" alt="Estrutura" />
          </div>
          <div className="card-body">
            <h1>Conheça a Estrutura</h1>
            <h2>Visite nossos laboratórios e salas</h2>
            <p>
              Explore nossos laboratórios
              <span className="highlight">modernos</span>, salas de aula
              equipadas e toda a infraestrutura que você utilizará durante o
              curso. Veja de perto onde seu futuro será construído.
            </p>
          </div>
        </div>

        <div className="QpParticipar card3">
          <div className="card-header">
            <img src="/assets/images/Frame.png" alt="Dúvidas" />
          </div>
          <div className="card-body">
            <h1>Tire suas Dúvidas</h1>
            <h2>Descubra qual curso combina com você</h2>
            <p>
              Converse com coordenadores e professores, faça testes
              <span className="highlight">vocacionais</span> e participe de
              <span className="highlight">atividades práticas</span> para
              descobrir sua verdadeira vocação
              <span className="highlight">profissional</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="Oportunity">
        <h1>Não Fique de Fora desta Oportunidade!</h1>
        <button className="Inscreva-button">
          Inscreva-se Gratuitamente Agora!
        </button>
      </div>
    </div>
  );
};

export default Participar;
