import "./App.css";
import React, { useState, useEffect, useMemo } from "react";

function AboutUseMemo() {
  const [number, setNumber] = useState(8);
  const [colored, setColored] = useState("false");

  const styles = useMemo(()=>{
    return{
        color: colored ? "green" : "orange",
    }
  }, [colored]) 

  function complete(num) {
    console.log("start");
    let i = 0;
    // i quyidagiga teng bo'lganda return ishlaydi
    // sahifani ishlashini su'iy sekinlashtirish
    while (i < 300000000) i++;
    return num * 2;
  }
  // number o'zgarganda quyidagi ko'd ishga tushadi
  const computed = useMemo(() => {
    return complete(number);
  }, [number]);

  // const computed = complete(number)

  useEffect(() => {
    console.log("Styles was change");
  }, [styles]);

  return (
    <div className="container">
      <h2 style={styles}>Amount: {computed}</h2>
      <button
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Delete
      </button>
      <button
        onClick={() => setColored((prev) => !prev)}
        className="btn btn-success"
      >
        Edit
      </button>
    </div>
  );
}

export default AboutUseMemo;
