import "./card.css";

interface CardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  text: string;
  id: string;
}

export default function Card({ image, title, text, id }: CardProps) {
  return (
    <div className="card-container" id={id}>
      <img src={image.src} alt={image.alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
