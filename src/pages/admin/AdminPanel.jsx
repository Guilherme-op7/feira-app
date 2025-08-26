import React, { useState } from "react";
import "./AdminPanel.scss";

export default function App() {
 const [activeTab, setActiveTab] = useState("visitantes");

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <div className="logo-area">
          <img src="/assets/images/logo-frei.png" alt="Logo Feira de Profissões" />
          <div>
            <h1>Painel Administrativo</h1>
            <span>Bem-vindo, Administrador</span>
          </div>
        </div>
        <button className="btn-voltar">Voltar</button>
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

            <form>
              <input type="text" placeholder="Nome Completo*" required />
              <input type="text" placeholder="Telefone" />
              <input type="email" placeholder="E-mail" />
              <input type="text" placeholder="Interesse em algum curso?" />
              <input type="text" placeholder="Previsão de chegada à feira" />
              <input type="text" placeholder="Como ficou sabendo da feira?" />
              <input type="text" placeholder="Escolaridade" />
              <input type="text" placeholder="Já foi aluno da feira?" />
              <button type="submit">Cadastrar Visita</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
