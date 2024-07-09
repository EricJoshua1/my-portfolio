import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import SkillsAndExperiences from "./Components/SkillsAndExperiences";
import SocialLinks from "./Components/SocialLinks";


function App() {
  return (
    <div>
     <NavBar />
     <Home />
     <About />
     <Projects />
     <SkillsAndExperiences />
     <Contact />
     <SocialLinks />
    </div>
  );
}

export default App;
