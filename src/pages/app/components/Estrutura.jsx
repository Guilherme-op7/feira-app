import { useState, useEffect } from "react";
import { Monitor, DoorClosed, Building } from "lucide-react";
import "../styles/_estrutura.scss";

export function Estrutura() {
  const fotos = [
    "/assets/images/PREDIO 1.jpg",
    "/assets/images/PREDIO 2.jpg"
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);


  return (
    <div className="Estrutura-Mom">
      <h1 className="Estructure-title">Nossas Unidades</h1>
      <p className="Estructure-text">
        Venha conhecer nossos ambientes <span className="highlight">modernos</span> e inspiradores para estudar
      </p>


      <div className="container">
        <div className="estrutura-image-container">
          <div className="carousel">
            <img src={fotos[indice]} alt={`Foto do prédio ${indice + 1}`} />

          </div>
        </div>

        <div className="Cards-Estrutura">
          <div className="Qp1">
            <h1 className="card-title">
              <span className="icon-wrapper">
                <Monitor className="icon" />
              </span>
              Laboratórios de Informática
            </h1>
            <p>
              Equipados com computadores <span className="highlight">modernos</span> e softwares
              atualizados, ideais para práticas, pesquisas e desenvolvimento de{" "}
              <span className="highlight">projetos.</span>
            </p>
          </div>

          <div className="Qp2">
            <h1 className="card-title">
              <span className="icon-wrapper">
                <DoorClosed className="icon" />
              </span>
              Salas Com Espaço Amplo
            </h1>
            <p>
              Ambientes <span className="highlight">confortáveis</span>, bem iluminados e
              <span className="highlight"> organizados</span>, garantindo mais
              <span className="highlight"> liberdade</span> e interação nas atividades.
            </p>
          </div>

          <div className="Qp3">
            <h1 className="card-title">
              <span className="icon-wrapper">
                <Building className="icon" />
              </span>
               Oficinas de Mecânica e Tornearia
            </h1>
            <p>
              <span className="highlight">Oficinas</span> totalmente equipadas para prática e aprendizado técnico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estrutura;
