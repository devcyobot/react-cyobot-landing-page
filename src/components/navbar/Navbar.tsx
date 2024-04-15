import './navbar.css';

interface NavbarProps {
  src: string;
  alt: string;
}

export default function Navbar({ src, alt }: NavbarProps) {
  return (
    <header>
      <img className="logo-img" src={src} alt={alt} />
      <nav>
        <ul className="menu-links nunito-regular">
          <li>Home</li>
          <li>About</li>
          <li>Downloads</li>
          <li>Event</li>
        </ul>
      </nav>
      <button type="button" className="shop-btn nunito-bold">
        Shop
      </button>
    </header>
  );
}
