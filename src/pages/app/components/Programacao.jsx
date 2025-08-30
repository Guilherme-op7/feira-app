import { useState, useEffect } from 'react';
import '../styles/_programacao.scss';

export function Programacao() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(window.innerWidth <= 768 ? 1 : 2);

  const programacaoData = [
    { local: "Pátio", atividades: ["Estandes de empresas convidadas", "Casa da Mulher Paulistana", "Conexão Bem Maior", "Óticas Carol", "STB", "PWI Sistemas", "Biscoitê", "APS", "São Paulo Open Centre", "SEBO e Troca de Livros", "Oficina de Eletrotécnica", "Oficina de Auto Elétrica de Autos"] },

    { local: "Demais estandes", atividades: ["CEDESP AVE MARIA", "Metalmecânica - Ajustador e Torneiro Mecânico", "Tecnologia de Redes e Manutenção de Computadores", "Troca de Livros"] },

    { local: "Salas", atividades: ["Sala 4: Óticas Carol - Exame de Vista gratuito", "Sala 6: Inglês"] },

    { local: "Primeiro Andar", atividades: ["Sala 18 - Administração: Empreendedorismo e Logistica", "Sala 19 - CREAS", "Sala 20 - Administração: Recursos Humanos, Contabilidade e Documentos Técnicos"] },

    { local: "Segundo Andar", atividades: ["Sala 24 - Comunicação Visual: CorelDRAW, Photoshop", "Sala 25 - Informática: montagem, configuração e redes", "Sala 26 - Informática: programação", "Sala 27 - Elaboração de currículo"] },
    
    { local: "Terceiro Andar - Auditório", atividades: ["CEDESP Ave Maria", "CATE - Conhecimento sobre Mercado de Emprego","Simulação de entrevista de emprego", "ADE SAMPA", "Oficina de Linkedin"] },
  ];

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerPage(window.innerWidth <= 768 ? 1 : 2);
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.ceil(programacaoData.length / slidesPerPage));
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [slidesPerPage, programacaoData.length]);

  const totalSlides = Math.ceil(programacaoData.length / slidesPerPage);
  const startIndex = currentSlide * slidesPerPage;
  const visibleCards = programacaoData.slice(startIndex, startIndex + slidesPerPage);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="Programacao">
      <div id="programa" className="programacao-header">
        <h1>Programação por Local</h1>
        <div className="linha-divisoria22"></div>
      </div>

      <div className="programacao-container">
        {visibleCards.map((item, index) => (
          <div className="program-card-slide" key={index}>
            <h2>{item.local}</h2>
            <ul>
              {item.atividades.map((atividade, i) => (
                <li key={i}>{atividade}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="programacao-indicators">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>

      <button className="inscricao-btn">
        <a href="#formulario" className="ancoragem">Se inscreva agora!</a>
      </button>
    </div>
  );
}

export default Programacao;
