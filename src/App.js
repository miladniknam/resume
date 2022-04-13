import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import HeaderNameSection from "./sections/HeaderNameSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import NavSection from "./sections/NavSection";

function App() {
  return (
    <div className="App">
      <NavSection />
      <HeaderNameSection />
      <AboutSection />
      <SkillSection />
    </div>
  );
}

export default App;
