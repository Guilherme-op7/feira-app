import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.scss';

export default function LoginInterface({ onClose }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="tela-login-adm">
      <div className='logo-area'>
        <img src="/assets/images/selo.png" alt="Logo Feira de Profissões" />
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setErro("");
          setCarregando(true);

          try {
            const resposta = await axios.post("http://localhost:4000/login", {
              email,
              senha,
            });

            const { token, usuario } = resposta.data;
            const usuarioComAdmin = { ...usuario, isAdmin: usuario.tipo === "admin" };

            localStorage.setItem("token", token);
            localStorage.setItem("usuario", JSON.stringify(usuarioComAdmin));

            if (usuario.tipo === "admin") {
              navigate("/painelAdmin");
            } 
            
            else {
              navigate("/");
            }
          } catch (err) {
            console.error("Erro no login:", err);
            setErro("E-mail ou senha incorretos!");
          } finally {
            setCarregando(false);
          }
        }}
      >
        <div className='container2'>
          <label>E-mail de Acesso</label>
          <input
            className='email'
            type="email"
            placeholder="Seu Email de acesso"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={carregando}
          />
          <label>Senha</label>
          <input
            className='senha'
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            disabled={carregando}
          />
        </div>

        {erro && <p className="erro">{erro}</p>}

        <div className='button'>
          <button 
            className='acessar' 
            type="submit"
            disabled={carregando || !email || !senha}
          >
            {carregando ? "Entrando..." : "Acessar Sistema"}
          </button>
          <button 
            className='voltar' 
            type="button" 
            onClick={onClose}
            disabled={carregando}
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
