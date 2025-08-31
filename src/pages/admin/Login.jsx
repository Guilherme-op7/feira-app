import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.scss';

export default function LoginInterface({ onClose }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const loginCorreto = {
    email: "admin@teste.com",
    senha: "123456"
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (email === loginCorreto.email && senha === loginCorreto.senha) {

      navigate("/painelAdmin");
    } 
    
    else {

      setErro("E-mail ou senha incorretos!");
    }
  }

  return (
    <div className="tela-login-adm">
      <div className='logo-area'>
        <img src="/assets/images/selo.png" alt="Logo Feira de Profissões" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className='container2'>
          <label>E-mail de Acesso</label>
          <input
            className='email'
            type="text"
            placeholder="Seu Email de acesso"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Senha</label>
          <input
            className='senha'
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        {erro && <p className="erro">{erro}</p>}

        <div className='button'>
          <button className='acessar' type="submit">Acessar Sistema</button>
          <button className='voltar' type="button" onClick={onClose}>Voltar</button>
        </div>
      </form>
    </div>
  );
}
