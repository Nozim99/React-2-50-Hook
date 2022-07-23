import './App.css';
import React, { useEffect, useState, useRef } from 'react';

// let renderCount = 1
function AboutUseRef() {
  // const [renderCount, setReanderCount] = useState(1)
  const [value, setValue] = useState("default")
  // Xar render bo'lganda bittaga oshadi ===
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  // Btnni bosganda inputga focus beradi ===
  const focus = () => inputRef.current.focus()
  // bitta oldingi ma'lumotni olish ===
  const prevValue = useRef('')

  useEffect(() => {
    // setReanderCount(prev => prev + 1)
    renderCount.current++
    console.log(inputRef.current.value);
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <div className="container">
      <h1>Amount of rendering: {renderCount.current}</h1>
      <h2>Past value: {prevValue.current}</h2>
      <input type="text" onChange={e => setValue(e.target.value)} value={value} ref={inputRef} />
      <button className="btn btn-success" onClick={focus}>Click</button>
    </div>
  );
}

export default AboutUseRef;
