import './parallelogram.css';

interface Parralelogram {
  num: number;
}

export default function Parallelogram({ num }: Parralelogram) {
  return (
    <div className="parallelogram-container">
      <h2 className="vt323-regular">
        <span>[</span>
        STEP {num}
        <span>]</span>
      </h2>
    </div>
  );
}
