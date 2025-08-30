import { useState, useEffect } from 'react';
import '../styles/_depoimentos.scss';

export function Depoimentos() {
  const [currentDepoimento, setCurrentDepoimento] = useState(0);

  const depoimentosData = [
    {
      nome: "Miguel Silva",
      curso: "Comunicação Visual 2021 e Inglês 2022 - 2023",
      foto: "/assets/images/miguel.png",
      texto: (
        <>
          Técnico em <strong style={{ color: "white" }}>Comunicação Visual</strong> e Inglês nível B2 pelo  <strong style={{ color: "white" }}>Frei</strong>. Atualmente, formando em <strong style={{ color: "white" }}>Artes Visuais - Licenciatura</strong> e atuo como <strong style={{ color: "white" }}>professor eventual</strong> na rede estadual de São Paulo. O instituto foi um divisor de águas em minha trajetória.
        </>
      ),
      estilo: { height: "418px", width: "301px" }
    },

    {
      nome: "Maria Eduarda Rodrigues da Silva",
      curso: "Administração 2023 - Inglês Básico 2024",
      foto: "/assets/images/maria.png",
      texto: (
        <>
          Em 2023, fiz o curso de <strong style={{ color: "white" }}>Técnico em Administração</strong>, desenvolvendo trabalho em equipe e soluções.
          Em 2024, curso <strong style={{ color: "white" }}>Inglês Básico</strong> e, graças ao desempenho, fui convidada a trabalhar no <strong style={{ color: "white" }}>Instituto</strong>.
          <strong style={{ color: "white" }}>Maria Eduarda Rodrigues da Silva</strong> – Administração 2023 e Inglês Básico 2024
        </>

      ),
      estilo: { height: "418px", width: "301px" }
    },

    {
      nome: "Eric Alves Martins",
      curso: "Eletrotécnica 2009 – Inglês 2015",
      foto: "/assets/images/erik.png",
      texto: (
        <>
          Fui aluno do <strong style={{ color: "white" }}>Frei</strong>, iniciando em 2009 no curso de <strong style={{ color: "white" }}>Eletrotécnica</strong> e, em 2010, no curso de <strong style={{ color: "white" }}>Engenharia Elétrica</strong>, onde assumi cargos de liderança.
          Em 2018, fiz pós-graduação em <strong style={{ color: "white" }}>Gerenciamento de Projetos</strong> e, em 2021, fundei a empresa <strong style={{ color: "white" }}>Martins Metal</strong>, especializada em corte e dobra.
        </>


      ),
      estilo: { height: "418px", width: "301px" }
    },
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
      <h1 id="depoimentos" className="depoimentos-text-principal">Depoimentos</h1>
      <h2 className="depoimentos-text-subprincipal">
        Conheça as histórias de sucesso de quem transformou sua vida profissional <br /> conosco
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
              <p className="depoimentos1-text1">{depoimentoAtual.texto}</p>
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
}

export default Depoimentos;
