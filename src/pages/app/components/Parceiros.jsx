import { useState, useEffect } from "react";
import '../styles/_parceiros.scss';

export function Parceiros() {
  const parceiros = [
    { id: 1, nome: "Parceiro 1", img: "/assets/images/Parceiros/parceiro1.png" },
    { id: 2, nome: "Parceiro 2", img: "/assets/images/Parceiros/parceiro2.png" },
    { id: 3, nome: "Parceiro 3", img: "/assets/images/Parceiros/parceiro3.png" },
    { id: 4, nome: "Parceiro 4", img: "/assets/images/Parceiros/parceiro4.png" },
    { id: 5, nome: "Parceiro 5", img: "/assets/images/Parceiros/parceiro5.png" },
    { id: 6, nome: "Parceiro 6", img: "/assets/images/Parceiros/parceiro6.png" },
    { id: 7, nome: "Parceiro 7", img: "/assets/images/Parceiros/parceiro7.png" },
    { id: 8, nome: "Parceiro 8", img: "/assets/images/Parceiros/parceiro8.png" },
    { id: 9, nome: "Parceiro 9", img: "/assets/images/Parceiros/parceiro9.png" },
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
      <h1>Nossos Parceiros</h1>
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
            <div key={parceiro.id} className="carousel-slide">
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

export default Parceiros;
