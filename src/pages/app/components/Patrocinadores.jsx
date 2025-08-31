import { useState, useEffect } from "react";
import '../styles/_patrocinadores.scss';

export function Patrocinadores() {
  const parceiros = [
    { id: 1, nome: "Parceiro 1", img: "/assets/images/Patrocinadores/patrocinador1.png" },
    { id: 2, nome: "patrocinador 2", img: "/assets/images/Patrocinadores/patrocinador2.png" },
    { id: 3, nome: "patrocinador 3", img: "/assets/images/Patrocinadores/patrocinador3.png" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(parceiros.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev =>
        prev + 1 < totalSlides ? prev + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => setCurrentSlide(index);

  const offset = (currentSlide * 100) / totalSlides;

  return (
    <div className="carousel-container">
      <h1>Patrocinadores</h1>
      <div className="linha-divisoria3"></div>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            width: `${(parceiros.length / itemsPerSlide) * 100}%`,
            transform: `translateX(-${offset}%)`,
            transition: "transform 0.6s ease-in-out"
          }}
        >
          {parceiros.map((parceiro) => (
            <div key={parceiro.id} className="carousel-slide2">
              <img src={parceiro.img} alt={parceiro.nome} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Patrocinadores;
