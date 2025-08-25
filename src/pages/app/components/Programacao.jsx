import { useState, useEffect } from 'react';

export function Programacao() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const programacaoData = [
    {
      local: "Pátio",
      atividades: [
        "Apresentação de Robótica - 9h às 10h",
        "Demonstração de Impressão 3D - 10h30 às 11h30",
        "Workshop de Programação - 13h às 14h",
        "Exposição de Projetos - 14h30 às 16h"
      ]
    },
    {
      local: "Primeiro Andar",
      atividades: [
        "Palestra: Mercado de TI - 9h30 às 10h30",
        "Oficina de Design Gráfico - 11h às 12h",
        "Apresentação de Administração - 13h30 às 14h30",
        "Roda de Conversa com Ex-alunos - 15h às 16h"
      ]
    },
    {
      local: "Auditório",
      atividades: [
        "Abertura Oficial - 9h às 9h30",
        "Palestra Principal - 10h às 11h",
        "Apresentação de Cases - 14h às 15h",
        "Encerramento - 15h30 às 16h"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % programacaoData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [programacaoData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % programacaoData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + programacaoData.length) % programacaoData.length);
  };

  return (
    <div className="Program">
      <div className="program-header">
        <h1>Programação por Local</h1>
        <div className="linha-divisoria"></div>
      </div>

      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>
          ‹
        </button>

        <div className="carousel-slide">
          <div className="program-card">
            <h1>{programacaoData[currentSlide].local}</h1>
            <ul>
              {programacaoData[currentSlide].atividades.map((atividade, index) => (
                <li key={index}>{atividade}</li>
              ))}
            </ul>
          </div>
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {programacaoData.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button className="Inscricao2">Se inscreva agora!</button>
    </div>
  );
};

export default Programacao;
