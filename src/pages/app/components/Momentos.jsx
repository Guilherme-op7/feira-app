export function Momentos() {
  return (
    <div className="momentos-section">
      <h1 className="titulo">Reviva os Melhores Momentos</h1>
      <p className="descricao">
        Confira as fotos e vídeos da nossa última feira e veja por que mais de 2.000 
        <span className="destaque"> visitantes </span>
        fizeram parte deste evento transformador!
      </p>

      <div className="galeria">
        <img
          src="/assets/images/foto1.png"
          alt="Foto 1"
          className="galeria-img"
        />
        <img
          src="/assets/images/foto2.png"
          alt="Foto 2"
          className="galeria-img"
        />
        <img
          src="/assets/images/foto3.png"
          alt="Foto 3"
          className="galeria-img"
        />
        <br />
        <img
          src="/assets/images/foto4.png"
          alt="Foto 4"
          className="galeria-img"
        />
        <img
          src="/assets/images/foto5.png"
          alt="Foto 5"
          className="galeria-img"
        />
        <img
          src="/assets/images/foto6.png"
          alt="Foto 6"
          className="galeria-img"
        />
      </div>

      <button className="btn-participar">
        Quero participar da Feira 2025!
      </button>
    </div>
  );
};

export default Momentos;
