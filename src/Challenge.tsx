import React from "react";
import { printNumbers } from './numbers';
import './Challenge.css';

const Challenge: React.FC = () => {
    const numbers = printNumbers();
    const numbersList = numbers.map((number, index) => (
        <li key={index}>{number}</li>
    ))
  return (
    <div className="container">
      <h1>Challenge Falabella</h1>
      <h3>Numbers</h3>
      <ul className="number-list">{numbersList}</ul>
    </div>
  );
};

export default Challenge;