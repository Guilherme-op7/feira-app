import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./AdminPanel.scss";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("visitantes");

  const [FormularioD, setFormularioD] = useState({
    nome: "",
    cpf: "",
    exAluno: "",
    escolaridade: "",
    chegada: "",
    email: "",
    comoSoube: "",
    telefone: "",
  });

  const MudarCampo = (e) => {
    const { name, value } = e.target;
    setFormularioD((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const EnviarFormulario = async (e) => {
    e.preventDefault();

    alert("Formulário enviado!\n" + JSON.stringify(FormularioD, null, 2));
    
    try {
      await axios.post("#", FormularioD); 
      alert("Inscrição enviada com sucesso!");
      
      setFormularioD({
        nome: "",
        cpf: "",
        exAluno: "",
        escolaridade: "",
        chegada: "",
        email: "",
        comoSoube: "",
        telefone: "",
      });
    } 
    catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar inscrição.");
    }
  };

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <div className="logo-area">
          <img src="/assets/images/frei.jpg" alt="Logo Feira de Profissões" />
          <div>
            <h1>Painel Administrativo</h1>
            <span>Bem-vindo, Administrador</span>
          </div>
        </div>
        <div>
          <Link to="/">
            <button className="btn-voltar">Voltar</button>
          </Link>
        </div>
      </header>

      <div className="tabs">
        <button
          className={activeTab === "visitantes" ? "active" : ""}
          onClick={() => setActiveTab("visitantes")}
        >
          Visitantes
        </button>
        <button
          className={activeTab === "credenciamento" ? "active" : ""}
          onClick={() => setActiveTab("credenciamento")}
        >
          Credenciamento
        </button>
      </div>

      <div className="content-box">
        {activeTab === "visitantes" && (
          <div className="gerenciar">
            <h3>Gerenciar Visitantes</h3>
            <input
              type="text"
              placeholder="Buscar por nome, email, cpf..."
            />
          </div>
        )}

        {activeTab === "credenciamento" && (
          <div className="formulario">
            <h2>
              Formulário de <span>Inscrição</span>
            </h2>
            <p>Preencha o formulário abaixo</p>

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
        )}
      </div>
    </div>
  );
}
