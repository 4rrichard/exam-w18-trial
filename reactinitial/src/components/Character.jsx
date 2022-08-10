import React, { useState } from "react";
import "./Character.css";
import Button from "@mui/material/Button";

function Characters({ name, details }) {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState("Show more");

  const visibilityHandler = () => {
    setIsVisible(!isVisible);
    textChange();
  };

  const textChange = () => {
    if (buttonText === "Show more") {
      setButtonText("Show less");
    } else {
      setButtonText("Show more");
    }
  };

  return (
    <>
      <h2>{name}</h2>
      {isVisible}
      <p className={isVisible ? "" : "hidden"}>{details}</p>
      {/* {isVisible && <p>{details}</p>} */}
      <Button onClick={visibilityHandler} variant="contained">
        {buttonText}
      </Button>
    </>
  );
}

export default Characters;
