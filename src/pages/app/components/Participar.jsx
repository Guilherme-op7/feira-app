import { useEffect, useState } from "react";
import '../styles/_participar.scss';
import { Mic, Building, Lightbulb } from "lucide-react";

export function Participar() {
  const cards = [
    {
      gradient: "gradient-roxo",
      icon: <Mic />,
      title: "Depoimentos Inspiradores",
      subtitle: "Visite Estandes de Nossos Parceiros",
      body: <>Ouça histórias reais de profissionais que trilharam caminhos de <span className="highlight">sucesso</span> em suas áreas. Descubra dicas valiosas e inspire-se para sua jornada <span className="highlight">profissional</span>.</>
    },
    {
      gradient: "gradient-azul",
      icon: <Building />,
      title: "Conheça a Estrutura",
      subtitle: "Visite nossos laboratórios e salas",
      body: <>Explore nossos laboratórios <span className="highlight">modernos</span>, salas de aula equipadas e toda a infraestrutura que você utilizará durante o <span className="highlight">curso</span>. Veja de perto onde seu <span className="highlight">futuro</span> será construído.</>
    },
    {
      gradient: "gradient-verde",
      icon: <Lightbulb />,
      title: "Tire suas Dúvidas",
      subtitle: "Descubra qual curso combina com você",
      body: <>Converse com coordenadores e professores, faça e participe de atividades práticas para descobrir sua verdadeira vocação <span className="highlight">profissional</span>.</>
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % cards.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section id="programacao" className="participar">
      <div className="container-participar">
        <div className="header-participar">
          <h2>Por que Participar?</h2>
          <p>
            A Feira de Profissões é muito mais que uma apresentação de cursos.
            É sua oportunidade de vivenciar o futuro que você quer construir.
          </p>
        </div>

        <div className="benefits-grid desktop">
          {cards.map((card, index) => (
            <div key={index} className={`card-benefit ${card.gradient}`}>
              <div className="card-benefit-header">
                <div className="icon-circle">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
              <div className="card-benefit-body2">{card.body}</div>
            </div>
          ))}
        </div>

        <div className="benefits-grid mobile">
          <div className="mobile-slide">
            <div className={`card-benefit ${cards[currentIndex].gradient}`}>
              <div className="card-benefit-header">
                <div className="icon-circle">{cards[currentIndex].icon}</div>
                <h3>{cards[currentIndex].title}</h3>
                <p>{cards[currentIndex].subtitle}</p>
              </div>
              <div className="card-benefit-body2">{cards[currentIndex].body}</div>
            </div>
          </div>

          <div className="carousel-indicators">
            {cards.map((_, idx) => (
              <span
                key={idx}
                className={`indicator ${currentIndex === idx ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>

        <div className={`Oportunity mobile-opportunity`}>
          <h1>Não Fique de Fora desta Oportunidade!</h1>
          <button className="Inscreva-button">
            <a className="ancoragem" href="#formulario">Inscreva-se Gratuitamente Agora!</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Participar;
