import "./styles/main.scss";
import {
  Header, Hero, Instituto, Historia, Programacao, Estrutura, Participar, Depoimentos, Momentos, ComoChegar, Footer,
  Parceiros} from './components';

export default function App() {
  return (
    <div className="pagina-app">
      <Header />
      <Hero />
      <Instituto />
      <Historia />
      <Programacao />
      <Estrutura />
      <Participar />
      <Depoimentos />
      <Momentos />
      <ComoChegar />
      <Parceiros />
      <Footer />
    </div>
  );
}
