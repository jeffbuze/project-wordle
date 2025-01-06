import React from 'react';

function GuessInput({ guessList, setGuessList }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    setGuessList([...guessList, guess]);
    setGuess('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
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
