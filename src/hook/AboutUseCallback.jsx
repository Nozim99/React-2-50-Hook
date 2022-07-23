import "./App.css";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import ItemList from "./ItemList";

function AboutUseCallback() {
  const [colored, setColored] = useState("false");
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "crimson" : "blue",
  };

  const generateItem = useCallback((indexNumber) => {
    return new Array(count).fill("").map((_, index) => `Element ${index + indexNumber}`);
  }, [count]);

  return (
    <div className="container">
      <h1 style={styles}>Amount of count: {count}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add count
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setColored((prev) => !prev)}
      >
        change color
      </button>

      <ItemList getItems={generateItem} />
    </div>
  );
}

export default AboutUseCallback;
