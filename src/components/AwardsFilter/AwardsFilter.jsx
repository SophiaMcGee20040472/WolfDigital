import AwardSelect from "../AwardSelect/AwardSelect";
import "./AwardsFilter.css";

const AwardsFilter = ({
  groups,
  selectedGroup,
  onFilterChange,
}) => {
  return (
    <section className="awards-filter">
      <div className="awards-filter__top">
        <div className="awards-filter__intro">
          <span className="awards-filter__eyebrow">
            Explore our awards
          </span>
          <h2 className="awards-filter__heading">
            Award-winning work,
            <br />
            <span>by group.</span>
          </h2>
        </div>
        <AwardSelect
          groups={groups}
          selectedGroup={selectedGroup}
          onFilterChange={onFilterChange}
        />
      </div>
    </section>
  );
};

export default AwardsFilter;