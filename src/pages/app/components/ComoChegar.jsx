export function ComoChegar() {
  return (
    <div className="comoChegar">
      <h1 className="comoChegar__titulo">Como Chegar</h1>
      <h2 className="comoChegar__subtitulo">
        Todas as informações que você precisa para participar da feira
      </h2>

      <div className="comoChegar__grid">
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

          <div className="comoChegar__formulario">
            <h4>Formulário de <span>Inscrição</span></h4>
            <form>
              <label>Nome Completo*</label>
              <input type="text" placeholder="Nome Completo*" required />
              <label>Telefone</label>
              <input type="email" placeholder="Email*" required />
              <label>E-mail</label>
              <input type="text" placeholder="Nome da Escola*" required />
              <label>Interesse em algum curso?</label>
              <input type="text" placeholder="Série / Ano*" required />
              <label>Previsão de chegada à feira</label>
              <input type="text" placeholder="Telefone*" required />
              <label>Como ficou sabendo da feira?</label>
              <input type="text" placeholder="Nome Completo*" required />
              <label>Escolaridade</label>
              <input type="email" placeholder="Email*" required />
              <label>Ja foi aluno do frei?*</label>
              <select name="" id="">
                <option value="">sim</option>
                <option value="">nao</option>
                <option value="">pretendo</option>
              </select>
              <button type="submit">Quero Participar</button>
            </form>
          </div>
        </div>

        <div className="bloco2">
          <div className="comoChegar__infoCard">
            <h3>Feira de Profissões 2025</h3>
            <p>Evento gratuito e aberto ao público</p>
            <p><strong>27 de Setembro</strong></p>
            <p>das 9h às 16h</p>
            <p><strong>Instituto Social Nossa Senhora de Fátima</strong></p>
            <p>#</p>
            <p>Zona Sul</p>
          </div>



          <div className="comoChegar__beneficios">
            <h4>O que você vai ganhar:</h4>
            <ul>
              <li> Material informativo dos cursos</li>
              <li> Palestras com profissionais de sucesso</li>
              <li> Visitação completa às instalações</li>
              <li> Conhecer as áreas de interesse</li>
              <li> Concorrer a brindes exclusivos</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ComoChegar;
