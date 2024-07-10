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
   
        <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />  
      <Skills />
      {/* <Experience /> */}
      <Contact />

      <SocialLinks />
    </div>
  
  );
}

export default App;
