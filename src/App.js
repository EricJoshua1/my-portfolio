import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/SkillsAndExperiences";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Projects";
import SocialLinks from "./Components/SocialLinks";
import React, { } from "react"
import useScrollSnap from "./hooks/useScrollSnap";

function App() {
  const containerRef = React.createRef();

  const [bind, unbind] = useScrollSnap(
    containerRef,
    { snapDestinationY: "90%" },
    () => console.log("snapped")
  );
  

  return (<>
    <NavBar />
    <div id="container" ref={containerRef} style={{ display: 'flex', flexDirection: 'column', 
      position: 'absolute', overflow: 'auto', top: 80, left: 0, width: '100%', height: '100%' }}>
        <div style={ {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  overflow: 'auto',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}}>

          <Home />
        </div>
      <About />
      <Portfolio />   
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  </>
  );
}

export default App;
