import React from 'react';

function GameWonBanner({ numOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{`${numOfGuesses} guesses`}</strong>.
      </p>
    </div>
  );
}

export default GameWonBanner;
