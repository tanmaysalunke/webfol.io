import React, { useState, useEffect, useRef } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"; // Sun icon
import NightsStayIcon from "@mui/icons-material/NightsStay"; // Moon icon
import "./App.scss";
import Nav from "./Nav";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Description from "./Description";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  //Scroll Behavior
  const [activeSection, setActiveSection] = useState("");
  const descriptionRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "description", ref: descriptionRef },
        { id: "about", ref: aboutRef },
        { id: "experience", ref: experienceRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
      ];
      const layoutElement = layoutRef.current;
      if (!layoutElement) return;

      const currentSection = sections.find((section) => {
        const element = section.ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const isHalfShown =
            rect.top < window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2;
          return isHalfShown;
        }
        return false;
      });

      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    };

    const layoutElement = layoutRef.current;
    if (layoutElement) {
      layoutElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (layoutElement) {
        layoutElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeSection]);

  // Dark/Light Mode
  const getDesignTokens = (mode: "light" | "dark") => ({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            // Palette for dark mode
            primary: { main: "#90caf9" },
            secondary: { main: "#f48fb1" },
            background: { default: "#0F172A", paper: "#424242" },
            text: { primary: "#ffffff", secondary: "#aaaaaa" },
          }
        : {
            // Palette for light mode
            primary: { main: "#1976d2" },
            secondary: { main: "#dc004e" },
            background: { default: "#C5D1EC", paper: "#f5f5f5" },
            text: { primary: "#000000", secondary: "#555555" },
          }),
    },
  });

  const theme = createTheme(getDesignTokens(darkMode ? "dark" : "light"), {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: darkMode
              ? "linear-gradient(315deg, #00132d 75%, #001e45 100%)"
              : "linear-gradient(315deg, #C5D1EC 75%, #e2e8f0 100%)",
            transition: "background-color 1s, color 1s",
          },
          a: {
            color: darkMode ? "#C5D1EC" : "#00132d", // Use your theme link colors here
            textDecoration: "none", // remove underline from links
          },
          p: {
            color: darkMode ? "#C5D1EC" : "#00132d",
          },
          ".btn-menu": {
            "&:after, &:before": {
              borderColor: darkMode ? "#C5D1EC" : "#00132d",
            },
          },
          svg: {
            fill: darkMode ? "#C5D1EC" : "#00132d",
          },
          ".skill-tag": {
            color: darkMode ? "#C5D1EC" : "#00132d",
            border: darkMode ? "1px solid #C5D1EC" : "1px solid #00132d",

            "&:hover": {
              color: darkMode ? "#00132d" : "#C5D1EC",
              border: darkMode ? "1px solid #C5D1EC" : "1px solid #00132d",
              background: darkMode ? "#C5D1EC" : "#00132d",
              transition: "all 0.3s",
            },
          },
          ".MuiSvgIcon-root": {
            color: darkMode ? "#C5D1EC" : "#00132d",
            transition: "all 0.3s",
          },
        },
      },
    },
  });

  const toggleDarkTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className={`fixed-background ${
          darkMode ? "dark-background" : "light-background"
        }`}
      ></div>
      <IconButton
        onClick={toggleDarkTheme}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          transition: "all 0.3s",
        }}
      >
        {darkMode ? <BrightnessHighIcon /> : <NightsStayIcon />}
      </IconButton>
      <SpeedInsights />
      <div
        className="container-fluid layout flex w-full px-24 h-screen overflow-y-auto scroll-smooth"
        ref={layoutRef}
      >
        <div className="w-1/2 sticky-lg-top sidebar flex flex-column justify-center h-full">
          <Header darkMode={darkMode} />
          <Nav activeSection={activeSection} />
          <Contact />
        </div>
        <div className="w-1/2 main-content">
          <section ref={descriptionRef}>
            <Description darkMode={darkMode} />
          </section>
          <section
            id="about"
            ref={aboutRef}
            className={`main-section ${
              activeSection === "about" ? "active" : ""
            }`}
          >
            <About />
          </section>
          <section
            id="experience"
            ref={experienceRef}
            className={`main-section ${
              activeSection === "experience" ? "active" : ""
            }`}
          >
            <Experience />
          </section>
          <section
            id="skills"
            ref={skillsRef}
            className={`main-section ${
              activeSection === "skills" ? "active" : ""
            }`}
          >
            <Skills />
          </section>
          <section
            id="projects"
            ref={projectsRef}
            className={`main-section ${
              activeSection === "projects" ? "active" : ""
            }`}
          >
            <Projects />
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
