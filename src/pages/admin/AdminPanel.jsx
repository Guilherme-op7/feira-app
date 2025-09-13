import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.scss";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("visitantes");

  const [busca, setBusca] = useState("");
  const [visitantes, setVisitantes] = useState([]);

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
    if (!nome.trim()) { alert("O campo Nome é obrigatório!"); return false; }
    if (!cpf.trim()) { alert("O campo CPF é obrigatório!"); return false; }
    if (!exAluno) { alert("Informe se você já foi aluno do Frei!"); return false; }
    return true;
  };

  const EnviarFormulario = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    try {
      await axios.post("http://localhost:5011/visitantes", FormularioD); 
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
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar inscrição.");
    }
  };

  useEffect(() => {
    if (!busca.trim()) {
      setVisitantes([]);
      return;
    }

    const buscar = async () => {
      try {
        let response;
        const apenasNumeros = busca.replace(/\D/g, "");

        if (apenasNumeros.length === 11) {
          response = await axios.get(`http://localhost:5011/visitantes/cpf/${apenasNumeros}`);
        } 
        
        else {
          response = await axios.get(`http://localhost:5011/visitantes/nome/${busca}`);
        }

        setVisitantes(Array.isArray(response.data) ? response.data : [response.data]);
      } 
      
      catch {
        setVisitantes([]);
      }
    };

    buscar();
  }, [busca]);

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <div className="logo-area">
          <img src="/assets/images/frei.png" alt="Logo Feira de Profissões" />
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
              placeholder="Buscar por nome ou CPF"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />

            <div className="lista-visitantes">
              {visitantes.map((v) => (
                <div className="visitante-card" key={v.id}>
                  <div className="visitante-info">
                    <strong>{v.nm_cadastrado || v.nome}</strong>
                    <span>{v.email_cadastrado || v.email}</span>
                    <span>CPF: {v.cpf_cadastrado || v.cpf}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {activeTab === "credenciamento" && (
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
        )}
      </div>
    </div>
  );
}
