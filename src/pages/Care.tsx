import { Link } from "react-router-dom";
import "../styles/Care.css";

// Componente reutilizável para cada seção de cuidados
function CareSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="care-section">
      <h3>{title}</h3>
      <ul role="list">
        {items.map((item, index) => (
          <li key={index} role="listitem">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Dados dos cuidados
const careData = {
  bodyPiercing: {
    title: "Body Piercing",
    items: [
      "Lave bem as mãos antes de tocar no piercing.",
      "Limpe a área com soro fisiológico 0,9% duas vezes ao dia.",
      "Não gire ou mova a joia desnecessariamente.",
      "Evite piscinas, saunas e banhos de mar durante a cicatrização.",
      "Não durma sobre o piercing.",
      "Evite roupas apertadas que possam pressionar ou irritar a área.",
    ],
  },
  makeup: {
    title: "Maquiagem",
    items: [
      "Remova completamente a maquiagem antes de dormir.",
      "Utilize um demaquilante de qualidade, adequado ao seu tipo de pele.",
      "Lave o rosto com um sabonete facial suave após remover a maquiagem.",
      "Hidrate bem a pele para mantê-la saudável e preparada para futuras aplicações.",
    ],
  },
};

function Care() {
  return (
    <div className="care-container">
      <Link to="/" role="link" className="back-button">
        Voltar
      </Link>
      <h2>Cuidados Pós-Procedimento</h2>
      <CareSection
        title={careData.bodyPiercing.title}
        items={careData.bodyPiercing.items}
      />
      <CareSection title={careData.makeup.title} items={careData.makeup.items} />
    </div>
  );
}

export default Care;