import './benefits.css';
import Card from '../../../components/ui/card';

export default function Benefits() {
  return (
    <section className="benefits-container nunito-regular">
      <h2 className="vt323-regular" id="benefit-header">
        TAKE YOU THROUGH 1,000 LEVELS AND MASTER ROBOTICS IN 1 KIT
      </h2>
      <figure id="benefit-img">
        <img src="src/assets/untitled-Camera-1.png" alt="benefits robot" />
        <figcaption id="benefit-caption">
          Assembled robot powered by ESP32 with common robotic peripherals,
          motion sensor, microphone, speaker, LED matrix, WiFi and Bluetooth
          module.
        </figcaption>
      </figure>
      <Card
        image={{ src: 'src/assets/image-93.png', alt: 'Card 1' }}
        color="purple"
        title="A Cool Pet"
        text="Turn your robot to a high-tech pet that reacts to your movement, voice and commands"
        id="card-1"
      />
      <Card
        image={{ src: 'src/assets/image-94.png', alt: 'Card 2' }}
        color="purple"
        title="Personal Assistant"
        text="Turn your robot into a personal assistant that tells you time, read you news and study with you"
        id="card-2"
      />
      <Card
        image={{ src: 'src/assets/untitled-Camera-2.png', alt: 'Card 3' }}
        color="purple"
        title="Shapeshifting"
        text="Snap in your favorite peripherals and create a one-of-a-kind robot"
        id="card-3"
      />
      <Card
        image={{ src: 'src/assets/image-102.png', alt: 'Card 4' }}
        color="purple"
        title="Game Console"
        text="Develop and play hundreds of games, including Spade Invaders and Flappy Bird"
        id="card-4"
      />
    </section>
  );
}
