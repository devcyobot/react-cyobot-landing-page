import './card.css';

interface CardProps {
  image: {
    src: string;
    alt: string;
  };
  color?: string;
  title?: string;
  text?: string;
  id?: string;
}

export default function Card({ image, color, title, text, id }: CardProps) {
  const containerClassName = `card-container border-${color || ''}`;
  return (
    <div className={containerClassName} id={id}>
      <img src={image.src} alt={image.alt} />
      <h3 className="nunito-bold">{title}</h3>
      <p className="nunito-regular">{text}</p>
    </div>
  );
}

Card.defaultProps = {
  color: '',
  title: '',
  text: '',
  id: '',
};
