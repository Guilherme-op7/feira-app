import { useState, useEffect } from 'react';
import '../styles/_programacao.scss';

export function Programacao() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const programacaoData = [
    {
      local: "Pátio",
      atividades: [
        "Estandes de empresas convidadas",
        "Casa da Mulher Paulistana",
        "Conexão Bem Maior",
        "Óticas Carol",
        "STB"
      ]
    },
    {
      local: "Demais estandes",
      atividades: [
        "CEDESP AVE MARIA",
        "Metalmecânica - Ajustador e Torneiro Mecânico",
        "Tecnologia de Redes e Manutenção de Computadores",
        "Troca de Livros",
        
      ]
    },
    {
      local: "Salas",
      atividades: [
        "Sala 4: Óticas Carol",
        "Sala 5: Caixa",
        "Sala 6: Inglês",
      ]
    },
    {
      local: "Primeiro Andar",
      atividades: [
        "Sala 18 - Administração: Empreendedorismo e Logistica",
        "Sala 19 - CREAS",
        "Sala 20 - Administração: Recursos Humanos, Contabilidade e Documentos Técnicos"
      ]
    },
    {
      local: "Segundo Andar",
      atividades: [
        "Sala 24 - Comunicação Visual: Corel Draw, Photoshop e Caricaturas",
        "Sala 25 - Informática: montagem, configuração e redes",
        "Sala 26 - Informática: programação",
        "Sala 27 - Elaboração de currículo"
      ]
    },
        {
      local: "Terceiro Andar - Auditório",
      atividades: [
        "Simulação de entrevista de emprego",
        "Oficina de Linkedin"
      ]
    },
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
      <div id="programa"className="program-header">
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

      <button className="Inscricao2"><a className="ancoragem" href="#formulario">Se inscreva agora!</a></button>
    </div>
  );
}

export default Programacao;
