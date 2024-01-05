import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
// import Resume from "./Resume";
import Experience from "./Experience";

const App: React.FC = () => {
  return (
    <div className="container-fluid layout">
      <div className="col-6 sticky-lg-top sidebar">
        {/* Content for your fixed sidebar */}
        <About />
        <Header />
        <Contact />
      </div>
      <div className="col-6 main-content">
        {/* Long description, Experience, Projects, etc. */}
        {/* <section>
          <h2>About</h2>
          <p>Long description...</p>
        </section> */}
        <section>
          <Experience />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
      </div>
    </div>
  );
};

export default App;
