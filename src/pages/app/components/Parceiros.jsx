import { useState, useEffect } from "react";
import '../styles/_parceiros.scss'

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

    const totalSlides = Math.ceil(parceiros.length / 3);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex(prev => (prev + 3) % parceiros.length);
        }, 3000);
        return () => clearInterval(interval);
    },);

    const goToSlide = (slideIndex) => {
        setStartIndex(slideIndex * 3);
    };

    return (
        <div className="carousel-container">
            <h1>Nossos Parceiros</h1>
            <div className="carousel-track">
                {parceiros.slice(startIndex, startIndex + 3).map(parceiro => (
                    <img
                        key={parceiro.id}
                        src={parceiro.img}
                        alt={parceiro.nome}
                        className="carousel-img"
                    />
                ))}
            </div>
            <div className="carousel-indicators">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <span
                        key={idx}
                        className={`indicator ${startIndex / 3 === idx ? 'active' : ''}`}
                        onClick={() => goToSlide(idx)}
                    />
                ))}
            </div>
        </div>
    );
}
export default Parceiros