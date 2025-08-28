import "./styles/main.scss";
import {
  Header, Hero, Instituto, Historia, Programacao, Cursos, Estrutura, Participar, Depoimentos, Momentos, ComoChegar, Footer, SaberMais,
  Parceiros} from './components';

export default function App() {
  return (
    <div className="pagina-app">
      <Header />
      <Hero />
      <Instituto />
      <Historia />
      <Programacao />
      <Cursos />
      <SaberMais />
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
