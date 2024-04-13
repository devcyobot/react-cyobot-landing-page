import "./hexagon.css";

interface HexagonProps {
  text: string;
}

export default function Hexagon({ text }: HexagonProps) {
  return (
    <div className="hex">
      <p className="hex-text vt323-regular">{text}</p>
    </div>
  );
}
