import { useState, useEffect } from "react";
import '../styles/_parceiros.scss';

export function Parceiros() {
  const parceiros = [
    { id: 1, nome: "Parceiro 1", img: "/assets/images/parceiro.png" },
    { id: 2, nome: "Parceiro 2", img: "/assets/images/parceiro2.png" },
    { id: 3, nome: "Parceiro 3", img: "/assets/images/parceiro3.png" },
    { id: 4, nome: "Parceiro 4", img: "/assets/images/parceiro3.png" },
    { id: 5, nome: "Parceiro 5", img: "/assets/images/parceiro2.png" },
    { id: 6, nome: "Parceiro 6", img: "/assets/images/parceiro.png" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(parceiros.length / itemsPerSlide);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setStartIndex(prev => (prev + 1) % parceiros.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile, parceiros.length]);

  const goToSlide = (slideIndex) => {
    setStartIndex(slideIndex * itemsPerSlide);
  };

  const getCurrentItems = () => {
    if (!isMobile) {
      return parceiros.slice(startIndex, startIndex + itemsPerSlide);
    }
    return [parceiros[startIndex % parceiros.length]];
  };

  return (
    <div className="carousel-container">
      <h1>Nossos Parceiros</h1>
      <div className="linha-divisoria3"></div>

      <div className="carousel-track">
        {getCurrentItems().map(parceiro => (
          <div key={parceiro.id} className="carousel-slide">
            <img src={parceiro.img} alt={parceiro.nome} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${Math.floor(startIndex / itemsPerSlide) === idx ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Parceiros