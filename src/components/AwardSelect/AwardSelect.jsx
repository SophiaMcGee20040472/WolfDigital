import { useEffect, useRef, useState } from "react";
import "./AwardSelect.css";

const AwardSelect = ({
  groups,
  selectedGroup,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const selected = groups.find(
    ({ id }) => id === selectedGroup
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!selectRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  const handleSelect = (id) => {
    onFilterChange(id);
    setIsOpen(false);
  };

  return (
    <div
      ref={selectRef}
      className="award-select"
    >
      <span className="award-select__label">
        Currently viewing
      </span>
      <button
        type="button"
        className={`award-select__trigger ${
          isOpen ? "award-select__trigger--open" : ""
        }`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="award-select__selected">
          {selected?.label ?? "All Awards"}
        </span>
      </button>
      {isOpen && (
        <div
          className="award-select__panel"
          role="listbox"
        >
          <div className="award-select__panel-header">
            <span>Select an award group</span>
            <span>
              {Math.max(groups.length - 1, 0)} groups
            </span>
          </div>
          <div className="award-select__options">
            {groups.map(({ id, label }, index) => {
              const isSelected = id === selectedGroup;
              return (
                <button
                  key={id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`award-select__option ${
                    isSelected
                      ? "award-select__option--selected"
                      : ""
                  }`}
                  onClick={() => handleSelect(id)}
                >
                  <span className="award-select__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="award-select__option-name">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardSelect;