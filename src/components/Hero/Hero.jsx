import "./Hero.css";
import heroImage from "../../assets/hero4.webp";

const Hero = () => {
  return (
    <section className="hero" aria-label="Awards hero section">
      <img
        className="hero-image"
        src={heroImage}
        alt=""
        width="1920"
        height="1080"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <h1 className="hero-title">Our Awards</h1>
    </section>
  );
};
export default Hero;
