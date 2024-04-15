import './bar.css';

interface BarProps {
  color: string;
  name: string;
  amount: number;
}

export default function Bar({ color, name, amount }: BarProps) {
  const barClassName = `bar-scale bar-color-${color || ''}`;
  return (
    <div className="bar-container">
      <div className={barClassName}>bar color</div>
      <div>
        <h4 className="vt323-regular">{name}</h4>
        <p className="nunito-regular">{amount}</p>
      </div>
    </div>
  );
}
