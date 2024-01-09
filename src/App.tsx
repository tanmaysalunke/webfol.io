import React, { useState, useEffect, useRef } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"; // Sun icon
import NightsStayIcon from "@mui/icons-material/NightsStay"; // Moon icon
import "./App.css";
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
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "description", ref: descriptionRef },
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
              : "#C5D1EC",
            transition: "background-color 1s, color 1s",
          },
          a: {
            color: darkMode ? "#C5D1EC" : "#00132d", // Use your theme link colors here
            textDecoration: "none", // Optional: remove underline from links
          },
          p: {
            color: darkMode ? "#C5D1EC" : "#00132d",
          },
          ".btn-menu": {
            "&:after, &:before": {
              borderColor: "inherit",
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
              transition: "10.3s all",
            },
          },
          ".MuiSvgIcon-root": {
            color: darkMode ? "#C5D1EC" : "#00132d",
            transition: "1s all",
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
      <IconButton
        onClick={toggleDarkTheme}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          transition: "1s all",
        }}
      >
        {darkMode ? <BrightnessHighIcon /> : <NightsStayIcon />}
      </IconButton>
      <SpeedInsights />
      <div className="container-fluid layout" ref={layoutRef}>
        <div className="col-6 sticky-lg-top sidebar">
          {/* Content for your fixed sidebar */}
          <About />
          <Header activeSection={activeSection} />
          <Contact />
        </div>
        <div className="col-6 main-content">
          <section ref={descriptionRef}>
            <Description />
          </section>
          <section id="experience" ref={experienceRef}>
            <Experience />
          </section>
          <section id="skills" ref={skillsRef}>
            <Skills />
          </section>
          <section id="projects" ref={projectsRef}>
            <Projects />
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
