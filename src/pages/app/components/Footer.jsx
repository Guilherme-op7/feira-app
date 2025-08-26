export function Footer() {
  return (
    <footer className="rodape">
      <div className="conteudo-rodape">
        <div className="coluna-rodape2">
          <img
            src="/assets/images/frei.jpg"
            alt="Logo Instituto"
            className="logo-instituto"
          />
          <div className="info-instituto">
            <h3 className="titulo-secao">
              Instituto Social <br /> Nossa Senhora De Fátima
            </h3>
                      <div className="linha-divisoria"></div>
            <p className="slogan">
              Descubra seu <span className="destaque">futuro</span> na Feira de <br />
              Profissões 2025 — conecte-se <br /> com o <span className="destaque"> mercado</span> e encontre o <br /> caminho
              ideal para sua carreira!
            </p>
          </div>
        </div>


        <div className="coluna-rodape">
          <h3 className="titulo-secao">Horários e Endereço</h3>
          <div className="linha-divisoria"></div>
          <p className="horario">27 de Setembro das 9h às 14h</p>
          <p className="endereco">
            Instituto Social Nossa Senhora de Fátima <br />
            Av. Cel. Octaviano de Freitas Costa, 463 <br />
            Veleiros - São Paulo - SP <br />
            04773-000
          </p>
        </div>

        <div className="coluna-rodape">
          <h3 className="titulo-secao">Links Rápidos</h3>
          <div className="linha-divisoria"></div>
          <ul className="menu-rodape">
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#cursos">Nossos Cursos</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        <div className="coluna-rodape">
          <h3 className="titulo-secao">Contato</h3>
          <div className="linha-divisoria"></div>
          <p className="instagram">
            <a
              href="https://instagram.com/institutonsfatima"
              target="_blank"
              rel="noopener noreferrer"
            >
              @institutonsfatima
            </a>
          </p>
          <p className="telefone">
            <a
              href="https://wa.me/5511963986252"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 96398-6252 - WhatsApp
            </a>
          </p>
          <p className="telefone">
            <a href="tel:+551137985037">(11) 3798-5037 - Secretaria</a>
          </p>
        </div>
      </div>

      <div className="rodape-final">
        <p className="direitos-autorais">
          © 2025 Todos os direitos reservados - Instituto Social Nossa Senhora
          de Fátima.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
