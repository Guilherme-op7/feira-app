export function Historia() {
  return (
    <div className="history">
      <div className="left-box">
        <h2>Nossa História</h2>
        <div className="linha-divisoria"></div>
        <p>
          <strong style={{ color: 'grey' }}>A Escola Profissional Nossa Senhora <br /> de Fátima</strong> oferece formação
          técnica e <br /> cursos de qualificação em uma <br /> infraestrutura moderna, com
          salas <br /> equipadas, laboratórios, oficinas, <br />  biblioteca e auditório.
          <br />
          <br />
          Aqui, preparamos nossos alunos para entrar no mercado de trabalho
          com <span className="highlight">confiança</span> e
          <span className="highlight"> competitividade.</span>
        </p>

        <button>Conheça nosso Site!</button>
      </div>
      <div className="image-container">
        <img
          className="Xavier"
          src="/assets/images/xavier.png"
          alt="Fotografia do Frei Xavier fazendo uma palestra"
        />
      </div>
    </div>
  );
};

export default Historia;
