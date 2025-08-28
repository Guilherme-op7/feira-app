import './Login.scss'

export default function LoginInterface() {
    return (
        <div class="tela-login-adm">
            <div className='logo-area'>
                <img src="/assets/images/feira.png" alt="Logo Feira de Profissões" />
            </div>

            <form>
                <div className='container2'>
                    <label>E-mail de Acesso</label>
                    <input className='email' type="text" placeholder="Seu Email de acesso" required />
                    <label>Senha</label>
                    <input className='senha' type="text" placeholder="Digite sua Senha" />
                </div>

                <div className='button'>
                    <button className='acessar' type="submit">Acessar Sistema</button>
                    <button className='voltar' type="submit">Voltar</button>
                </div>
            </form>
        </div>

    )
} 