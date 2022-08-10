import React, { useEffect, useState } from "react";
import LoadingMask from "./LoadingMask";
import Button from "@mui/material/Button";

function Subscription(props) {
  const validateEmail = (email) =>
    typeof email === "string" && email.includes("@") && email.includes(".");

  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState("");

  props.func(subscribed);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    setIsDisabled(!validateEmail(email));
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://demoapi.com/api/series/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => setSubscribed(data))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form>
      <h3>Subscribe to our newsletter</h3>
      {!loading && (
        <>
          <input type="text" value={email} onChange={onEmailChange}></input>
          <Button
            disabled={isDisabled}
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            Subscribe
          </Button>
        </>
      )}
      {loading && <LoadingMask />}
      {subscribed && <p>Subscribed</p>}
    </form>
  );
}

export default Subscription;
