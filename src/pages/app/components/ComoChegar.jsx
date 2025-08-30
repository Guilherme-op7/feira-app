import { useState } from "react";
import axios from "axios";

export function ComoChegar() {
  const [FormularioD, setFormularioD] = useState({
    nome: "",
    telefone: "",
    email: "",
    escola: "",
    curso: "",
    chegada: "",
    comoSoube: "",
    escolaridade: "",
    exAluno: "",
    cpf: "",
    interesse: "",
  });

  const MudarCampo = (e) => {
    const { name, value } = e.target;
    setFormularioD((prev) => ({ ...prev, [name]: value }));
  };

  const validarFormulario = () => {
    const { nome, cpf, exAluno } = FormularioD;

    if (!nome.trim()) {
      alert("O campo Nome é obrigatório!");
      return false;
    }
    if (!cpf.trim()) {
      alert("O campo CPF é obrigatório!");
      return false;
    }
    if (!exAluno) {
      alert("Informe se você já foi aluno do Frei!");
      return false;
    }

    return true;
  };

  const EnviarFormulario = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    try {
      await axios.post("#", FormularioD);
      alert("Inscrição enviada com sucesso!");
      setFormularioD({
        nome: "",
        telefone: "",
        email: "",
        escola: "",
        curso: "",
        chegada: "",
        comoSoube: "",
        escolaridade: "",
        exAluno: "",
        cpf: "",
        interesse: "",
      });
    } 
    
    catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar inscrição.");
    }
  };

  return (
    <div className="comoChegar">
      <h1 className="comoChegar__titulo">Como Chegar</h1>
      <div className="linha-divisoria3"></div>
      <h2 className="comoChegar__subtitulo">
        Todas as informações que você precisa para participar da feira
      </h2>

      <div className="comoChegar__rei">
        <div className="bloco1">
          <div className="comoChegar__mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.4694105945433!2d-46.708575971501226!3d-23.68033329866432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce502d2289a843%3A0x14406b17b30d0174!2sInstituto%20Social%20Nossa%20Senhora%20de%20Fátima!5e0!3m2!1spt-BR!2sbr!4v1756042382515!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Local"
            ></iframe>
          </div>

          <div id="formulario" className="comoChegar__formulario">
            <h4>Formulário de <span>Inscrição</span></h4>
            <form onSubmit={EnviarFormulario}>
              <label>Nome Completo*</label>
              <input
                type="text"
                name="nome"
                value={FormularioD.nome}
                onChange={MudarCampo}
                placeholder="Nome Completo*"
                required
              />

              <label>CPF*</label>
              <input
                type="text"
                name="cpf"
                value={FormularioD.cpf}
                onChange={MudarCampo}
                placeholder="CPF*"
                required
              />

              <label>Já foi aluno do Frei?*</label>
              <select
                name="exAluno"
                value={FormularioD.exAluno}
                onChange={MudarCampo}
                required
              >
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
                <option value="pretendo">Pretendo</option>
              </select>

              <label>Escolaridade</label>
              <select
                name="escolaridade"
                value={FormularioD.escolaridade}
                onChange={MudarCampo}
              >
                <option value="">Selecione</option>
                <option value="Ensino Fundamental">Ensino Fundamental</option>
                <option value="Ensino Médio">Ensino Médio</option>
                <option value="Ensino Superior">Ensino Superior</option>
                <option value="Outro">Outro</option>
              </select>

              <label>Previsão de chegada à feira</label>
              <input
                type="time"
                name="chegada"
                value={FormularioD.chegada}
                onChange={MudarCampo}
                required
              />

              <label>E-mail</label>
              <input
                type="email"
                name="email"
                value={FormularioD.email}
                onChange={MudarCampo}
                placeholder="Email"
              />

              <label>Como ficou sabendo da feira?</label>
              <select
                name="comoSoube"
                value={FormularioD.comoSoube}
                onChange={MudarCampo}
              >
                <option value="">Selecione</option>
                <option value="Amigos">Amigos</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Panfletos">Panfletos</option>
              </select>

              <label>Telefone</label>
              <input
                type="text"
                name="telefone"
                value={FormularioD.telefone}
                onChange={MudarCampo}
                placeholder="Telefone"
              />

              <button type="submit">Quero Participar</button>
            </form>
          </div>
        </div>

        <div className="bloco2">
          <div className="comoChegar__infoCard">
            <header>
              <img
                className="iconeSuperior"
                src="/assets/images/iconSuperior.png"
                alt="Icone superior"
              />
              <h3>Feira de Profissões 2025</h3>
              <p className="subtitulo">Evento gratuito e aberto ao público</p>
            </header>

            <section>
              <div className="lado_esquerdo">
                <img src="/assets/images/iconRelogio.png" alt="icone de relogio laranja" />
                <p><strong>27 de Setembro</strong></p>
                <p>das 9h às 14h</p>
              </div>
              <div className="lado_direito">
                <img src="/assets/images/iconMarcador.png" />
                <p><strong>Instituto Social Nossa Senhora de Fátima</strong></p>
                <p>Zona Sul</p>
              </div>
            </section>
          </div>

          <div className="comoChegar__beneficios">
            <h4>O que você vai ganhar:</h4>
            <ul>
              <li>Material informativo dos cursos</li>
              <li>Encontro com profissionais de sucesso</li>
              <li>Visitação completa às instalações</li>
              <li>Conhecer as áreas de interesse</li>
              <li>Receber brindes exclusivos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComoChegar;
