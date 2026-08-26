import { useState } from "react";
import "./AwardsCard.css";

const AwardsCard = ({ award }) => {
  const [isOpen, setIsOpen] = useState(false);

  const resultsId = `company-results-${award.id}`;

  return (
    <article className={`award-card ${isOpen ? "is-open" : ""}`}>
      <div className="award-card__layout">
        <div className="award-card__left">
          <div className="award-card__info">
            <div className="award-card__logo">
              <img
                src={award.logo}
                alt={`${award.year} ${award.title}`}
                loading="lazy"
              />
            </div>
            <h2 className="award-card__title">{award.title}</h2>
            <p className="award-card__year">{award.year}</p>
          </div>
          <button
            type="button"
            className="award-card__toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls={resultsId}
          >
            <span>
              {isOpen
                ? `Hide ${award.title} Winners`
                : `See ${award.title} Winners`}
            </span>

            <span className="award-card__icon" aria-hidden="true">
              {isOpen ? "−" : "+"}
            </span>
          </button>
        </div>
        {isOpen && (
          <div className="award-card__results" id={resultsId}>
            <div className="award-card__labels">
              <span>Category</span>
              <span>Awards</span>
            </div>
            <div className="award-card__rows">
              {award.categories?.map((category, index) => (
                <div
                  className="award-card__row"
                  key={`${award.id}-category-${index}`}
                >
                  <span className="award-card__category">{category.name}</span>
                  <span className="award-card__winner">{category.winner}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default AwardsCard;
