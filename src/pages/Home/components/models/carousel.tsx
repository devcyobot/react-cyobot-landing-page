import Card from '../../../../components/ui/card';
import './carousel.css';

export default function Carousel() {
  return (
    <div className="image-container">
      <Card
        image={{
          src: 'src/assets/pack-adventurer-model-left.png',
          alt: 'Explorer model',
        }}
      />
      <div className="active-image-container">
        <Card
          image={{
            src: 'src/assets/inter.png',
            alt: 'Adventurer model',
          }}
          color="yellow"
        />
      </div>
      <Card
        image={{
          src: 'src/assets/pack-adventurer-model-right.png',
          alt: 'Pioneer model',
        }}
      />
    </div>
  );
}
