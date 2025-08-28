import { useState, useEffect, useRef } from "react";
import "../styles/_cursos.scss";

export function Cursos() {
  const cursos = [
    {
      id: 1,
      img: "https://static.wixstatic.com/media/5b91ad_f1c840f496fd49d7b1a1d967d3ae9ef4~mv2.jpg",
      titulo: "Forme-se para liderar empresas",
      descricao: "Forme-se para liderar empresas e desenvolver seu próprio negócio",
      areas: "Áreas: Empresas, Startups, Consultoria",
    },
    {
      id: 2,
      img: "https://static.wixstatic.com/media/5b91ad_f1c840f496fd49d7b1a1d967d3ae9ef4~mv2.jpg",
      titulo: "Forme-se para liderar empresas",
      descricao: "Forme-se para liderar empresas e desenvolver seu próprio negócio",
      areas: "Áreas: Empresas, Startups, Consultoria",
    },
    {
      id: 3,
      img: "/assets/images/info.png",
      titulo: "TI e Programação em Alta",
      descricao: "Forme-se para liderar empresas e desenvolver seu próprio negócio",
      areas: "Áreas: Empresas, Startups, Consultoria",
    },
    {
      id: 4,
      img: "/assets/images/adm.png",
      titulo: "Administração",
      descricao: "Forme-se para liderar empresas e desenvolver seu próprio negócio",
      areas: "Áreas: Empresas, Startups, Consultoria",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);


  const cardWidth = 388; 


  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth <= 768 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(cursos.length / cardsPerView));
    }, 3000);
    return () => clearInterval(interval);
  }, [cursos.length, cardsPerView]);




  const stopDrag = () => {
    setIsDragging(false);

    const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
    carouselRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  const totalSlides = Math.ceil(cursos.length / cardsPerView);

  return (
    <div className="Cursos">
      <h1>Conheça Nossos Cursos</h1>
      <p>
        Descubra qual caminho <span className="highlight">profissional</span>{" "}
        combina com você. Explore nossos
        <span className="highlight"> cursos técnicos</span> e se prepare para
        o mercado de trabalho.
      </p>

      <div className={`Quadros-Cursos carousel-wrapper ${isDragging ? "dragging" : ""}`}>
        <div
          className="Quadros-Cursos carousel"
          ref={carouselRef}

          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}

          onTouchEnd={stopDrag}
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {cursos.map((curso) => (
            <div key={curso.id} className="curso-card">
              <img src={curso.img} alt={curso.titulo} />
              <h1>{curso.titulo}</h1>
              <p>{curso.descricao}</p>
              <p>{curso.areas}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${currentIndex === idx ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Cursos;
