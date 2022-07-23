import './App.css';
import React, { useState } from 'react';

// quyidagi funksiyani App() ni ichida o'zgartirmasdan yozsa ham bo'ladi
function randomNumber() {
  console.log('Calculate...');
  // trunc sonni butun qismini qaytaradi
  return Math.trunc(Math.random() * 10)
}

function AboutUseState() {
  const [number, setNumber] = useState(randomNumber)

  const [state, setState] = useState({
    text: "Number",
    date: Date.now()
  })

  function uploadObject() {
    setState((prev) => {
      return {
        ...prev,
        text: 'New Text'
      }
    })
  }

  return (
    <div className="App m-5">
      <h1>Number: {number}</h1>
      <div className='box'>
        <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-primary">add</button>
        <button onClick={() => { setNumber(0) }} className="btn btn-light" >clear</button>
        <button onClick={() => { setNumber(prev => prev - 1) }} className="btn btn-danger">remove</button>
        <hr />
        <button className="btn btn-secondary mb-1" onClick={() => setState({ text: 'New text' })} >Change</button>

        <button onClick={uploadObject} className="btn btn-info">Click</button>

        {/* state o'zimizi ma'lumot, null replacer o'zgartiruvchi, 2 cpace bo'shliq */}
        <div>{JSON.stringify(state, null, 2)}</div>
      </div>
    </div>
  );
}

export default AboutUseState;
