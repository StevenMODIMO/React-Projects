import React from "react";
import "./style.css";
import images from './data';
import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  }

  const prevImage = () => {
    const nextIndex = index - 1;
    if(nextIndex < 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(nextIndex)
    }
  }
  return (
    <div>
      <h1>Simple React Image Slider</h1>
      <div className="images">
        <button onClick={prevImage}>{"<"}</button>
        <img src={images[index]} alt='image' />
        <button onClick={nextImage}>{">"}</button>
      </div>
    </div>
  );
}
