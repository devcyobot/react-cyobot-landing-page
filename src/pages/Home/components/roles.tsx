import "./roles.css";
import Hexagon from "../../../components/ui/hexagon";

export default function Roles() {
  return (
    <section className="roles-container">
      <h2 className="vt323-regular">UNLOCK ROLES IN ROBOTICS ENGINEERING</h2>
      <div className="hex-container">
        <div className="hex-group">
          <Hexagon text="ROBOTICS ENGINEER" />
          <Hexagon text="NETWORK ENGINEER" />
        </div>
        <Hexagon text="MECHA-TRONICS ENGINEER" />
        <div className="hex-group">
          <Hexagon text="EMBEDDED SYSTEM ENGINEER" />
          <Hexagon text="DESIGN ENGINEER" />
        </div>
        <Hexagon text="INTERN" />
      </div>
      <div className="roles-display">
        <div className="roles-display-inner">
          <img
            src="src/assets/green_rectangle.png"
            alt="temporary placeholder"
          />
        </div>
      </div>
    </section>
  );
}
