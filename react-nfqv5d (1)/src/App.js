import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://weather-proxy.freecodecamp.rocks/api/current?lon=139&lat=35")
    .then(res => res.json())
    .then(result => {
      setData(result)
    })
  })
  return (
    <div>
      <h1>COMPLETE THE PROJECT WITH THE PROVIDED SOURCE CODE</h1>
      <a href="">Source Code</a>
    </div>
  )
};

export default App;