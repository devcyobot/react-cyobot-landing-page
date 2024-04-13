import "./intro.css";

interface IntroProps {
  src: string;
  alt: string;
}

export default function Intro({ src, alt }: IntroProps) {
  return (
    <section>
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="vt323-regular">
            ENGINEER DOESN&rsquo;T HAVE TO BE THAT HARD...
          </h1>
          <form>
            <label htmlFor="user-email" className="nunito-regular">
              Find out where you belong:
              <div className="email">
                <input
                  type="text"
                  id="user-email"
                  placeholder="Your email"
                  className="nunito-regular"
                />
                <button type="submit" className="green-btn nunito-regular">
                  Star Quest
                </button>
              </div>
            </label>
          </form>
        </div>
        <img className="intro-img" src={src} alt={alt} />
      </div>
    </section>
  );
}
