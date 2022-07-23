import React from 'react'

export default function Main({toggle}) {
  return(
    <div>
      <h2>Hello from Context</h2>
      <button onClick={toggle} className="btn btn-success">Show Alert</button>
    </div>
  )
}
