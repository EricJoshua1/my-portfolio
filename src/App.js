import About from "./Components/About";
import Contact from "./Components/Contact";
// import Experience from "./Components/SkillsAndExperiences";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Home />
        <About />
        <Portfolio />
        <Skills />
        {/* <Experience /> */}
        <Contact />
      </main>
      <SocialLinks />
    </div>
  );
}

export default App;
