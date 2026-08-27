import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import Heading from "./components/Heading/Heading";
import CompanyCard from "./components/AwardsCard/AwardsCard";
import AwardsFilter from "./components/AwardsFilter/AwardsFilter";
import Footer from "./components/Footer/Footer";
import { awards } from "./data/mockdata";

function App() {
  const [selectedGroup, setSelectedGroup] = useState("all");
  const awardGroups = [
    {
      id: "all",
      label: "All Awards",
    },
    ...[...new Set(awards.map((award) => award.group))].map((group) => ({
      id: group,
      label: group,
    })),
  ];
  const filteredAwards =
    selectedGroup === "all"
      ? awards
      : awards.filter((award) => award.group === selectedGroup);
  return (
    <>
      <Hero />
      <main>
        <Menu />
        <Heading />
        <AwardsFilter
          groups={awardGroups}
          selectedGroup={selectedGroup}
          onFilterChange={setSelectedGroup}
        />
        <div className="award-cards">
          {filteredAwards.map((award) => (
            <CompanyCard
              key={award.id}
              award={award}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;