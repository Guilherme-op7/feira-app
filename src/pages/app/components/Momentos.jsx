import { useState, useEffect } from "react";

export function Momentos() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [indice, setIndice] = useState(0);

  const fotos = [
    "foto1.png",
    "foto2.png",
    "foto3.png",
    "foto4.png",
    "foto5.png",
    "foto6.png",
    "foto6.png",
    "foto6.png",
  ];

  const abrirImagem = (src) => setImagemSelecionada(src);
  const fecharImagem = () => setImagemSelecionada(null);



  const nextSlide = () => {
    setIndice((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="momentos-section">
      <h1 className="titulo">Reviva os Melhores Momentos</h1>
      <p className="descricao">
        Confira as fotos e vídeos da nossa última feira e veja por que mais de
        2.000 <span className="destaque"> visitantes </span>
        fizeram parte deste evento transformador!
      </p>

      <div className="galeria-carrossel">


        <div className="carrossel-wrapper">
          {fotos.map((foto, i) => (
            <img
              key={i}
              src={`/assets/images/${foto}`}
              alt={`Foto ${i + 1}`}
              className={`galeria-img ${i === indice ? "active" : ""}`}
              onClick={() => abrirImagem(`/assets/images/${foto}`)}
              style={{
                transform: `translateX(-${indice * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            />
          ))}
        </div>


      </div>

      <button className="btn-participar"><a href="#formulario">Quero participar da Feira 2025!</a></button>

      {imagemSelecionada && (
        <div className="modal" onClick={fecharImagem}>
          <span className="fechar">&times;</span>
          <img
            src={imagemSelecionada}
            alt="Imagem expandida"
            className="modal-img"
          />
        </div>
      )}
    </div>
  );
}

export default Momentos;
