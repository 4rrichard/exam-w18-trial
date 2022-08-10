import React, { useState } from "react";
import "./Character.css";

function Characters({ name, details }) {
  const [isVisible, setIsVisible] = useState(false);

  const visibilityHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <h2>{name}</h2>
      <p className={isVisible ? "" : "hidden"}>{details}</p>
      <button onClick={visibilityHandler}>Show more</button>
    </>
  );
}

export default Characters;
