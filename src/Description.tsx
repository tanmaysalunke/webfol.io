import React from "react";
import Lottie from "react-lottie-player";

const Description: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="description">
      <Lottie
        className={`anime ${darkMode ? "active" : ""}`}
        loop
        animationData={require("./icons/lottie.json")}
        play
      />
      <Lottie
        className={`anime ${darkMode ? "" : "active"}`}
        loop
        animationData={require("./icons/lottie-light.json")}
        play
      />
    </section>
  );
};

export default Description;
