import { useState, useEffect } from 'react';
import '../styles/_depoimentos.scss';

export function Depoimentos() {
  const [currentDepoimento, setCurrentDepoimento] = useState(0);

  const depoimentosData = [
    {
      nome: "Bruno de Oliveira",
      curso: "Cursos de Informática 2005 e Inglês 2006",
      foto: "/assets/images/bruno.png",
      texto: (
        <>
          Atualmente, além de executivo de TI, sou professor no Instituto, onde nossa{" "}
          <strong style={{ color: "white" }}>MISSÃO</strong> é  <strong style={{ color: "white" }}> EDUCAR, PREPARAR OS JOVENS PARA O MERCADO DE TRABALHO
          </strong>, com habilidades técnicas, humanas e conceituais.
          .
        </>
      ),
      estilo: { height: "418px", width: "301px" }
    },
    {
      nome: "Mateus Lemos",
      curso: "Curso de Comunicação Visual - 2024",
      foto: "https://static.wixstatic.com/media/5b91ad_20f508e9964242aaa8c01484174aaded~mv2.png/v1/crop/x_0,y_98,w_960,h_1085/fill/w_494,h_558,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Imagem%20do%20WhatsApp%20de%202024-11-19%20%C3%A0(s)%2010.png",
      texto: (
        <>
          Cursei <strong style={{ color: "white" }}>Comunicação Visual no Frei</strong> e, ainda no ano letivo,
          <strong style={{ color: "white" }}> consegui um emprego pela Conexão Trabalho</strong>.
          Com apoio da <strong style={{ color: "white" }}>Cássia</strong>, do professor<strong style={{ color: "white" }}> Natan</strong> e de toda a equipe,
          fui aprovado na entrevista. No fim do curso, percebi minha afinidade com a área e decidi seguir carreira em
          <strong style={{ color: "white" }}> Design Gráfico</strong>, planejando ingressar na faculdade.
        </>

      ),
      estilo: { height: "418px", width: "301px" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDepoimento((prev) => (prev + 1) % depoimentosData.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [depoimentosData.length]);

  const depoimentoAtual = depoimentosData[currentDepoimento];

  return (
    <div className="depoimentos-mom">
      <h1 className="depoimentos-text-principal">Depoimentos</h1>
      <h2 className="depoimentos-text-subprincipal">
        Conheça as histórias de sucesso de quem transformou sua vida
        profissional <br /> conosco
      </h2>

      <div className="depoimentos-carousel">
        <div className="depoimentos-slide">
          <div className="depoimentos1">
            <div className="depoimentos1-imagem">
              <img
                src={depoimentoAtual.foto}
                alt={`Foto de ${depoimentoAtual.nome}`}
                style={{ ...depoimentoAtual.estilo, objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <div className="depoimentos1-conteudo">
              <p className="depoimentos1-text1">
                {depoimentoAtual.texto}
              </p>
              <p className="depoimentos1-text2">
                <strong style={{ color: 'white' }}>
                  {depoimentoAtual.nome} - {depoimentoAtual.curso}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="depoimentos-indicators">
        {depoimentosData.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentDepoimento ? 'active' : ''}`}
            onClick={() => setCurrentDepoimento(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Depoimentos;
