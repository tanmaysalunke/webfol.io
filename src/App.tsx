import React, { useState } from "react";
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
            color: darkMode ? "#C5D1EC" : "#0F172A", // Use your theme link colors here
            textDecoration: "none", // Optional: remove underline from links
          },
          p: {
            color: darkMode ? "#C5D1EC" : "#0F172A",
          },
          ".btn-menu": {
            "&:after, &:before": {
              borderColor: "inherit",
            },
          },
          svg: {
            fill: darkMode ? "#C5D1EC" : "#0F172A",
          },
          ".skill-tag": {
            color: darkMode ? "#C5D1EC" : "#0F172A",
            border: darkMode ? "1px solid #C5D1EC" : "1px solid #0F172A",

            "&:hover": {
              color: darkMode ? "#0F172A" : "#C5D1EC",
              border: darkMode ? "1px solid #C5D1EC" : "1px solid #0F172A",
              background: darkMode ? "#C5D1EC" : "#0F172A",
              transition: "0.3s all",
            },
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

      <div className="container-fluid layout">
        <div className="col-6 sticky-lg-top sidebar">
          {/* Content for your fixed sidebar */}
          <About />
          <Header />
          <Contact />
        </div>
        <div className="col-6 main-content">
          <section>
            <Description />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
