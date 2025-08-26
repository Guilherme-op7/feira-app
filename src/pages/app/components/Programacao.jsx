import { useState, useEffect } from 'react';
import '../styles/_programacao.scss';

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
    },
    {
      local: "Primeiro Andar",
      atividades: [
        "Palestra: Mercado de TI - 9h30 às 10h30",
        "Oficina de Design Gráfico - 11h às 12h",
        "Apresentação de Administração - 13h30 às 14h30",
        "Roda de Conversa com Ex-alunos - 15h às 16h"
      ]
    }
  ];

  const totalSlides = Math.ceil(programacaoData.length / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const startIndex = currentSlide * 2;
  const visibleCards = programacaoData.slice(startIndex, startIndex + 2);

  return (
    <div className="Program">
      <div className="program-header">
        <h1>Programação por Local</h1>
        <div className="linha-divisoria1"></div>
      </div>

      <div className="carousel-slide">
        {visibleCards.map((item, index) => (
          <div className="program-card" key={index}>
            <h1>{item.local}</h1>
            <ul>
              {item.atividades.map((atividade, i) => (
                <li key={i}>{atividade}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="carousel-indicators22">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>

      <button className="Inscricao2">Se inscreva agora!</button>
    </div>
  );
}

export default Programacao;
