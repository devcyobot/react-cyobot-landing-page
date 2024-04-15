import './time.css';
import Bar from '../../../../components/ui/bar';

interface TimeProps {
  image: {
    src: string;
    alt: string;
  };
  atr: Attribute[];
}

interface Attribute {
  name: string;
  amount: number;
}

export default function Time({ image, atr }: TimeProps) {
  return (
    <div className="time-container">
      <h4 className="nunito-bold">Time Attribute</h4>
      <img src={image.src} alt={image.alt} />
      <div className="bar-container-wrapper">
        <Bar color="green" name={atr[0].name} amount={atr[0].amount} />
        <Bar color="yellow" name={atr[1].name} amount={atr[1].amount} />
        <Bar color="red" name={atr[2].name} amount={atr[2].amount} />
      </div>
    </div>
  );
}
