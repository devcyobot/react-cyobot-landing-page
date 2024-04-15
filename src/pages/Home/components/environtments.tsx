import Screen from '../../../components/ui/screen';
import './environments.css';

export default function Environments() {
  return (
    <section className="screens-container">
      <h2 className="vt323-regular">SELECT YOUR BEST ENVIRONMENTS</h2>
      <div className="screens-group">
        <Screen
          image={{ src: 'src/assets/python.png', alt: 'Python Screen' }}
          language="PYTHON"
          caption="SUITABLE FOR ..."
        />
        <Screen
          image={{ src: 'src/assets/block.png', alt: 'Block Screen' }}
          language="BLOCK"
          caption="SUITABLE FOR K-12/BEGINNER"
        />
      </div>
      <Screen
        image={{ src: 'src/assets/c++.png', alt: 'C/C++ Screen' }}
        language="C/C++"
        caption="SUITABLE FOR ..."
      />
    </section>
  );
}
