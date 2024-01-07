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
            background: { default: "#e4e5f1", paper: "#f5f5f5" },
            text: { primary: "#000000", secondary: "#555555" },
          }),
    },
  });

  const theme = createTheme(getDesignTokens(darkMode ? "dark" : "light"), {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: "background-color 1s, color 1s",
          },
          a: {
            color: darkMode ? "#C5D1EC" : "#0F172A", // Use your theme link colors here
            textDecoration: "none", // Optional: remove underline from links
            "&:hover": {
              // textDecoration: "underline", // Optional: underline on hover
            },
          },
          p: {
            color: darkMode ? "#C5D1EC" : "#0F172A",
          },
          ".btn-menu": {
            "&:after, &:before": {
              borderColor: "inherit",
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
        style={{ position: "absolute", top: "10px", left: "10px" }}
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
    </ThemeProvider>
  );
};

export default App;
