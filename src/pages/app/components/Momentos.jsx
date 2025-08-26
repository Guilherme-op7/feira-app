import { useState } from "react";

export function Momentos() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const abrirImagem = (src) => {
    setImagemSelecionada(src);
  };

  const fecharImagem = () => {
    setImagemSelecionada(null);
  };

  return (
    <div className="momentos-section">
      <h1 className="titulo">Reviva os Melhores Momentos</h1>
      <p className="descricao">
        Confira as fotos e vídeos da nossa última feira e veja por que mais de
        2.000 <span className="destaque"> visitantes </span>
        fizeram parte deste evento transformador!
      </p>

      <div className="galeria">
        {["foto1.png", "foto2.png", "foto3.png", "foto4.png", "foto5.png", "foto6.png"].map(
          (foto, index) => (
            <img
              key={index}
              src={`/assets/images/${foto}`}
              alt={`Foto ${index + 1}`}
              className="galeria-img"
              onClick={() => abrirImagem(`/assets/images/${foto}`)}
            />
          )
        )}
      </div>

      <button className="btn-participar">Quero participar da Feira 2025!</button>

      {imagemSelecionada && (
        <div className="modal" onClick={fecharImagem}>
          <span className="fechar">&times;</span>
          <img src={imagemSelecionada} alt="Imagem expandida" className="modal-img" />
        </div>
      )}
    </div>
  );
}

export default Momentos;
