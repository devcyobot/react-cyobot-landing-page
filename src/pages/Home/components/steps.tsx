import './steps.css';
import Parallelogram from '../../../components/ui/parallelogram';

export default function Steps() {
  return (
    <section className="steps-container">
      <Parallelogram num={1} />
      <Parallelogram num={2} />
      <Parallelogram num={3} />
      <img src="src/assets/all-models.png" alt="All CYOBot models" />
    </section>
  );
}
