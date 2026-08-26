import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import Heading from "./components/Heading/Heading";
import CompanyCard from "./components/AwardsCard/AwardsCard";
import { awards } from "./data/mockdata";

function App() {
  return (
    <>
      <Hero />
      <main>
        <Menu />
        <Heading />
        <div className="award-cards">
          {awards.map((award) => (
            <CompanyCard
              key={award.id}
              award={award}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;