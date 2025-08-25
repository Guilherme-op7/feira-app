import { useState, useEffect } from 'react';

export function Depoimentos() {
  const [currentDepoimento, setCurrentDepoimento] = useState(0);

  const depoimentosData = [
    {
      nome: "Bruno de Oliveira",
      curso: "Cursos de Informática 2005 e Inglês 2006",
      foto: "/assets/images/bruno.png",
      texto: "Atualmente, além de executivo de TI, sou professor no Instituto onde nossa MISSÃO é EDUCAR, PREPARAR OS JOVENS PARA O MERCADO DE TRABALHO com habilidades técnicas, humanas e conceituais."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDepoimento((prev) => (prev + 1) % depoimentosData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [depoimentosData.length]);


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
              <img src={depoimentosData[currentDepoimento].foto} alt="Foto do depoente" />
            </div>
            <div className="depoimentos1-conteudo">
              <p className="depoimentos1-text1">
                Atualmente, além de executivo de TI, sou professor no Instituto onde nossa <strong style={{ color: 'white' }}>MISSÃO</strong>  é
                <strong style={{ color: 'white' }}> EDUCAR, PREPARAR OS JOVENS PARA o MERCADO DE TRABALHO</strong>  com habilidades técnicas, humanas e conceituais.
              </p>
              <p className="depoimentos1-text2">
                <strong style={{ color: 'white' }}>
                  Bruno de Oliveira - Cursos de Informática 2005 e Inglês 2006
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
