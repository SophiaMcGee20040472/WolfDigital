import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#">Testimonials</a>
        <a href="#">Contact</a>
        <a href="#">Our Story</a>
        <a href="#">Blog & Insights</a>
        <a href="#">Awards</a>
        <a href="#">Careers</a>

        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="X">𝕏</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Wolfgang Digital</span>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;