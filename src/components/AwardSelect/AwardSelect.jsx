import { useEffect, useRef, useState } from "react";

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
      className="awards-filter__selector"
    >
      <span className="awards-filter__selector-label">
        Currently viewing
      </span>
      <button
        type="button"
        className={`awards-filter__trigger ${
          isOpen ? "awards-filter__trigger--open" : ""
        }`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="awards-filter__selected">
          {selected?.label ?? "All Awards"}
        </span>
      </button>
      {isOpen && (
        <div
          className="awards-filter__panel"
          role="listbox"
        >
          <div className="awards-filter__panel-header">
            <span>Select an award group</span>
            <span>{groups.length - 1} groups</span>
          </div>
          <div className="awards-filter__options">
            {groups.map(({ id, label }, index) => {
              const isSelected = id === selectedGroup;
              return (
                <button
                  key={id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`awards-filter__option ${
                    isSelected
                      ? "awards-filter__option--selected"
                      : ""
                  }`}
                  onClick={() => handleSelect(id)}
                >
                  <span className="awards-filter__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="awards-filter__option-name">
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