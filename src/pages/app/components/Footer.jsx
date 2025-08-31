import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import LoginInterface from "../../admin/Login";
import "../styles/_footer.scss";

export function Footer() {
  const [abrirLogin, setAbrirLogin] = useState(false);

  return (
    <footer className="rodape">
      <div id="contato" className="conteudo-rodape">
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
              Descubra seu <span className="destaque">futuro</span> na Feira das <br />
              Profissões 2025 — conecte-se <br /> com o <span className="destaque">mercado</span> e encontre o <br /> caminho
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
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
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
              <FaInstagram style={{ marginRight: "8px" }} />
              @institutonsfatima
            </a>
          </p>
          <p className="telefone">
            <a
              href="https://wa.me/5511963986252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ marginRight: "8px" }} />
              (11) 96398-6252 - WhatsApp
            </a>
          </p>
          <p className="telefone">
            <a href="tel:+551137985037">
              <FaPhone style={{ marginRight: "8px" }} />
              (11) 3798-5037 - Secretaria
            </a>
          </p>
        </div>
      </div>

      <div className="rodape-final">
        <p className="direitos-autorais">
          © 2025 Todos os direitos reservados - Instituto Social Nossa Senhora de Fátima.
        </p>
      </div>

      <div className="acesso">
        <button className="Adm" onClick={() => setAbrirLogin(true)}>
          Acesso Administrativo
        </button>
      </div>

      {abrirLogin && (
        <div className="overlay">
          <div className="modal-login">
            <LoginInterface onClose={() => setAbrirLogin(false)} />
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
