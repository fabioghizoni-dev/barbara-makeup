import { Link } from "react-router-dom";

function Care() {
  return (
    <div className="care-container">
      <Link to="/" role="link" className="back-button">
        Voltar
      </Link>
      <h2>Cuidados Pós-Procedimento</h2>
      <div className="care-section">
        <h3>Body Piercing</h3>
        <ul role="list">
          <li role="listitem">Lave bem as mãos antes de tocar no piercing.</li>
          <li role="listitem">Limpe a área com soro fisiológico 0,9% duas vezes ao dia.</li>
          <li role="listitem">Não gire ou mova a joia desnecessariamente.</li>
          <li role="listitem">Evite piscinas, saunas e banhos de mar durante a cicatrização.</li>
          <li role="listitem">Não durma sobre o piercing.</li>
          <li role="listitem">Evite roupas apertadas que possam pressionar ou irritar a área.</li>
        </ul>
      </div>
      <div className="care-section">
        <h3>Design de Sobrancelhas</h3>
        <ul role="list">
          <li role="listitem">Evite molhar as sobrancelhas nas primeiras 24 horas após o procedimento.</li>
          <li role="listitem">Não utilize produtos com álcool na área das sobrancelhas.</li>
          <li role="listitem">Evite coçar ou esfregar a região.</li>
          <li role="listitem">Penteie as sobrancelhas diariamente com uma escovinha apropriada.</li>
        </ul>
      </div>
    </div>
  );
}

export default Care;
