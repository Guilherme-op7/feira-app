import '../styles/_participar.scss';
import { Mic, Building, Lightbulb } from "lucide-react";

export function Participar() {
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

          <div className="card-benefit gradient-roxo">
            <div className="card-benefit-header">
              <div className="icon-circle">
                <Mic />
              </div>
              <h3>Depoimentos Inspiradores</h3>
              <p>Visite Estandes de Nossos Parceiros</p>
            </div>
            <div className="card-benefit-body2">
              <p>
                Ouça histórias reais de profissionais que trilharam caminhos de
                 <span className='highlight'> sucesso</span> em suas áreas. Descubra dicas valiosas e inspire-se para
                sua jornada <span className='highlight'>  profissional</span>.
              </p>
            </div>
          </div>

          <div className="card-benefit gradient-azul">
            <div className="card-benefit-header">
              <div className="icon-circle">
                <Building />
              </div>
              <h3>Conheça a Estrutura</h3>
              <p>Visite nossos laboratórios e salas</p>
            </div>
            <div className="card-benefit-body">
              <p>
                Explore nossos laboratórios <span className='highlight'> modernos</span>, salas de aula equipadas e
                toda a infraestrutura que você utilizará durante o <span className='highlight'> curso</span>. Veja de
                perto onde seu <span className='highlight'> futuro</span> será construído.
              </p>
            </div>
          </div>

          <div className="card-benefit gradient-verde">
            <div className="card-benefit-header">
              <div className="icon-circle">
                <Lightbulb />
              </div>
              <h3>Tire suas Dúvidas</h3>
              <p>Descubra qual curso combina com você</p>
            </div>
            <div className="card-benefit-body2">
              <p>
                Converse com coordenadores e professores, faça e participe de atividades práticas para descobrir sua
                verdadeira vocação <span className='highlight'> profissional</span>.
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
    </section>
  );
}

export default Participar;
