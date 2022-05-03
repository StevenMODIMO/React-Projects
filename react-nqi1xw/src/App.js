import React from "react";
import "./style.css";
import { useState } from 'react';
import questions from "./data";

export default function App() {
  const [data, setData] = useState(questions)
  const [showPhy, setShowPhy] = useState(false)
  const [showChem, setShowChem] = useState(false)
  const [showBios, setShowBios] = useState(false)
  return (
    <div className="btns">
      <button onClick={() => setShowPhy(!showPhy)}>{data[0].faq}</button>
      {showPhy && <p className="info">{data[0].answer}</p>}
      <button onClick={() => setShowChem(!showChem)}>{data[1].faq}</button>
      {showChem && <p className="info">{data[1].answer}</p>}
      <button onClick={() => setShowBios(!showBios)}>{data[2].faq}</button>
      {showBios && <p className="info">{data[2].answer}</p>}
     </div>
  );
}