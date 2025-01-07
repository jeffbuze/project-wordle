import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


function GuessInput({ guessList, setGuessList, gameStatus, answer, setGameStatus}) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);

    if (guess === answer) {
      setGameStatus('won');
    } else if (guess !== answer && nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={gameStatus !== 'running'}
        pattern="[A-Z]{5}"
        maxLength={5}
        title="Please enter exactly 5 uppercase letters"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        onInvalid={(e) => {
          e.target.setCustomValidity(
            'Please enter exactly 5 uppercase letters'
          );
        }}
        onInput={(e) => {
          e.target.setCustomValidity('');
        }}
      />
    </form>
  );
}

export default GuessInput;
