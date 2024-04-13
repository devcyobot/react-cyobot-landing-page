import "./screen.css";

interface ScreenProps {
  image: {
    src: string;
    alt: string;
  };
  language: string;
  caption: string;
}

export default function Screen({ image, language, caption }: ScreenProps) {
  return (
    <figure className="screen-figure">
      <img src={image.src} alt={image.alt} />
      <figcaption className="vt323-regular">
        <span className="bracket">[</span>
        {language}
        <span className="bracket">] </span>
        {caption}
      </figcaption>
    </figure>
  );
}
