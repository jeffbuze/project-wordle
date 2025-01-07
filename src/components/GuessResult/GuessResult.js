import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResult({ guessList }) {
  function getLetter(guessIndex, letterIndex) {
    if (guessIndex < guessList.length) {
      return guessList[guessIndex][letterIndex];
    }
    return undefined;
  }
  return (
    <div className="guess-results">
      {
        // guessList.map((guess, index) => (
        //   <Guess value={guess} key={index} />
        // ))
        range(0,NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess value={guessList[num]} key={num} />
        ))

        // range(0,NUM_OF_GUESSES_ALLOWED).map((num) => (
        //   <p className="guess" key={num}>
        //     <span className="cell">{getLetter(num, 0)}</span>
        //     <span className="cell">{getLetter(num, 1)}</span>
        //     <span className="cell">{getLetter(num, 2)}</span>
        //     <span className="cell">{getLetter(num, 3)}</span>
        //     <span className="cell">{getLetter(num, 4)}</span>
        //   </p>
        // ))
      }
    </div>
  );
}

export default GuessResult;
