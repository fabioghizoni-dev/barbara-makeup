import { Link } from "react-router-dom";

function Care() {
  return (
    <div className="care-container">
      <Link to="/" className="back-button">
        Voltar
      </Link>
      <h2>Cuidados Pós-Procedimento</h2>
      <div className="care-section">
        <h3>Body Piercing</h3>
        <ul>
          <li>Lave bem as mãos antes de tocar no piercing.</li>
          <li>
            Limpe a área com soro fisiológico 0,9% duas vezes ao dia.
          </li>
          <li>
            Não gire ou mova a joia desnecessariamente.
          </li>
          <li>Evite piscinas, saunas e banhos de mar durante a cicatrização.</li>
          <li>Não durma sobre o piercing.</li>
          <li>
            Evite roupas apertadas que possam pressionar ou irritar a área.
          </li>
        </ul>
      </div>
      <div className="care-section">
        <h3>Design de Sobrancelhas</h3>
        <ul>
          <li>
            Evite molhar as sobrancelhas nas primeiras 24 horas após o procedimento.
          </li>
          <li>Não utilize produtos com álcool na área das sobrancelhas.</li>
          <li>Evite coçar ou esfregar a região.</li>
          <li>
            Penteie as sobrancelhas diariamente com uma escovinha apropriada.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Care;
