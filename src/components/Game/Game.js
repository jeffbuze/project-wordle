import React from 'react';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import GameLostBanner from '../GameLostBanner';
import GameWonBanner from '../GameWonBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  return (
    <>
      <GuessResult guessList={guessList} answer={answer} />
      <GuessInput
        guessList={guessList}
        gameStatus={gameStatus}
        setGuessList={setGuessList}
        setGameStatus={setGameStatus}
        answer={answer}
      />
      {gameStatus === 'lost' && <GameLostBanner answer={answer} />}
      {gameStatus === 'won' && <GameWonBanner numOfGuesses={guessList.length} />}
    </>
  );
}

export default Game;
