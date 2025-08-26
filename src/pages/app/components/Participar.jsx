import '../styles/_participar.scss';
import { Mic, Building, Lightbulb } from "lucide-react";
export function Participar() {
  const benefits = [
    {
      icon: Mic,
      title: "Palestras Inspiradoras",
      description: "Converse com profissionais de sucesso",
      details:
        "Ouça histórias reais de profissionais que trilharam caminhos de sucesso em suas áreas. Descubra dicas valiosas e inspire-se para sua jornada profissional.",
      gradient: "gradient-roxo",
    },
    {
      icon: Building,
      title: "Conheça a Estrutura",
      description: "Visite nossos laboratórios e salas",
      details:
        "Explore nossos laboratórios modernos, salas de aula equipadas e toda a infraestrutura que você utilizará durante o curso. Veja de perto onde seu futuro será construído.",
      gradient: "gradient-azul",
    },
    {
      icon: Lightbulb,
      title: "Tire suas Dúvidas",
      description: "Descubra qual curso combina com você",
      details:
        "Converse com coordenadores e professores, faça testes vocacionais e participe de atividades práticas para descobrir sua verdadeira vocação profissional.",
      gradient: "gradient-verde",
    },
  ];

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

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className={`card-benefit ${benefit.gradient}`}>
                <div className="card-benefit-header">
                  <div className="icon-circle">
                    <Icon />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
                <div className="card-benefit-body">
                  <p>{benefit.details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="Oportunity">
          <h1>Não Fique de Fora desta Oportunidade!</h1>
          <button className="Inscreva-button">
            Inscreva-se Gratuitamente Agora!
          </button>
        </div>
      </div>
    </section>
  );
}

export default Participar;
