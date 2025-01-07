import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {value
        ? result.map(({ letter, status }, index) => (
            <span className={`cell ${status}`} key={index}>
              {letter}
            </span>
          ))
        : range(5).map((num) => (
            <span className="cell" key={num}>
              {undefined}
            </span>
          ))}
    </p>
  );
}

export default Guess;
