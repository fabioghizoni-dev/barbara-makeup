import { Link } from "react-router-dom";
import logo from "/rounded-logo.svg";

function Home() {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <h1>Bárbara Vitória</h1>
        <p>Body Piercer & Designer de Sobrancelhas</p>
      </header>
      <main>
        <a
          target="_blank"
          className="link-button"
          rel="noopener noreferrer"
          href="https://www.instagram.com/barbarabodyart_makeup"
        >
          Agendamentos e Orçamentos
        </a>
        <Link to="/gallery" className="link-button">
          Portfólio
        </Link>
        <a href="#" target="_blank" rel="noopener noreferrer" className="link-button">
          Cuidados Pós-Procedimento
        </a>
      </main>
      <footer>
        <p>
          Feito com ♡ por{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fabio_ghizoni">
            Fábio Henrique
          </a>
        </p>
      </footer>
    </>
  );
}

export default Home;
