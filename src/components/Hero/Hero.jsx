import "./Hero.css";
import heroImage from "../../assets/hero4.webp";

export default function Hero() {
  return (
    <section className="hero" aria-label="Awards hero section">
      <img
        className="hero-image"
        src={heroImage}
        alt=""
        loading="lazy"
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <h1 className="hero-title">Our Awards</h1>
    </section>
  );
}
