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
          Jóias
        </Link>
        <Link to="/care" className="link-button">
          Cuidados Pós-Procedimento
        </Link>
      </main>
      <footer>
        <p>
          By -{" "}
          <a
            role="link"
            target="_blank"
            className="link-insta"
            rel="noopener noreferrer"
            href="https://www.instagram.com/fabio_ghizoni"
          >
            Fábio Ghizoni
          </a>
          :{" "}
          <a
            role="link"
            target="_blank"
            className="link-insta"
            rel="noopener noreferrer"
            href="https://www.instagram.com/renew_diggital"
          >
            RENEW
          </a>
        </p>
      </footer>
    </>
  );
}

export default Home;
