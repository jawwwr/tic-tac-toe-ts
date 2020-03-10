import React, { useState, useEffect } from 'react';
import Board from 'components/Board ';
import calculateWinner from 'helpers/calculate-wiiner';
import './styles.scss';

const default_history = [
  {
    squares: Array(9).fill(null)
  }
];

const Game = () => {
  const [step_number, setStepNumber] = useState(0);
  const [x_is_next, setXIsNext] = useState(true);
  const [status, setStatus] = useState(`Next player: ${x_is_next ? 'X' : 'O'}`);
  const [history, setHistory] = useState(default_history);

  useEffect(() => {
    const current = history[step_number];
    const winner = calculateWinner(current.squares);

    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else if (!winner && step_number === 9) {
      setStatus('Game Over! No winner.');
    } else {
      setStatus(`Next player: ${x_is_next ? 'X' : 'O'}`);
    }
  }, [history, step_number, x_is_next]);

  const handleClick = (i: number) => {
    const copy_history = history.slice(0, step_number + 1);
    const squares = [...copy_history[copy_history.length - 1].squares];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = x_is_next ? 'X' : 'O';

    setHistory(
      copy_history.concat([
        {
          squares
        }
      ])
    );
    setXIsNext(!x_is_next);
    setStepNumber(copy_history.length);
  };

  const current = history[step_number];

  const jumpTo = (move: number) => {
    if (!move) {
      setHistory(default_history);
    }
    setStepNumber(move);
    setXIsNext(move % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move # ${move}` : 'Go to game start';
    return (
      // eslint-disable-next-line react/no-array-index-key
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i: number) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
