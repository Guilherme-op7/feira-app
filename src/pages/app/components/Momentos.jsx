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
  ];

  const abrirImagem = (src) => setImagemSelecionada(src);
  const fecharImagem = () => setImagemSelecionada(null);
  
const nextSlide = () => {
  setIndice((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
};


  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
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

      <div
        className="galeria-carrossel"
        style={{ overflow: "hidden", width: "100%" }}
      >
        <div
          className="carrossel-wrapper"
          style={{
            display: "flex",
            width: `${fotos.length * 100}%`,
            transition: "transform 0.5s ease",
            transform: `translateX(-${(indice * 100) / fotos.length}%)`,
          }}
        >
          {fotos.map((foto, i) => (
            <img
              key={i}
              src={`/assets/images/${foto}`}
              alt={`Foto ${i + 1}`}
              className="galeria-img"
              onClick={() => abrirImagem(`/assets/images/${foto}`)}
              style={{ width: `${100 / fotos.length}%`, flexShrink: 0 }}
            />
          ))}
        </div>
      </div>

      <button className="btn-participar">
        <a href="#formulario">Quero participar da Feira 2025!</a>
      </button>

      {imagemSelecionada && (
        <div
          className="modal"
          onClick={fecharImagem}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <span
            className="fechar"
            onClick={fecharImagem}
            style={{
              position: "absolute",
              top: 20,
              right: 30,
              fontSize: "40px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            &times;
          </span>
          <img
            src={imagemSelecionada}
            alt="Imagem expandida"
            className="modal-img"
            style={{
              maxWidth: "90%",
              maxHeight: "80%",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Momentos;
