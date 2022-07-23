import './App.css';
import React, { useEffect, useState } from 'react';

function AboutUseEffect() {
  const [user, setUser] = useState('users')
  const [data, setData] = useState([])
  // quyidagi sichqonchani gorizontal va vertikal joylashuvini ko'rsatish uchun kerak
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  // useEffect(() => {
  //   console.log('Render ' + user);
  // }, [user])

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${user}`)
  //     .then(response => response.json())
  //     .then(json => setData(json))
  // }, [user])

  useEffect(()=>{
    // mousemove - sichqoncha harakatlanganda ishga tushadi
    window.addEventListener('mousemove', (event)=>{
      setPosition({
        x:event.clientX,
        y:event.clientY
      })
    })
  }, [])


  return (
    <div className="use-effect pt-3">
      <h3>User: {user}</h3>
      <div className="buttons">
        <button onClick={() => setUser('users')} className="btn btn-success">Web-Developer</button>
        <button onClick={() => setUser('posts')} className="btn my-2 btn-danger">Android Developer</button>
        <button onClick={() => setUser('todos')} className="btn btn-secondary">Ios Developer</button>
      </div>
      <div>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <pre>{JSON.stringify(position, null, 2)}</pre>
      </div>
    </div>
  );
}

export default AboutUseEffect;
