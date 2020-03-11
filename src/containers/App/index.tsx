import React, { useState, useEffect } from 'react';
import Board from 'components/Board';
import Toggle from 'components/Toggle';
import MovesList from 'components/MovesList';
import { calculateWinner } from 'helpers';
import './styles.scss';

const default_history = [
  {
    squares: Array(9).fill(null),
    position: 0
  }
];

const App = () => {
  const [step_number, setStepNumber] = useState(0);
  const [x_is_next, setXIsNext] = useState(true);
  const [status, setStatus] = useState(`Next player: ${x_is_next ? 'X' : 'O'}`);
  const [history, setHistory] = useState(default_history);
  const [winner, setWinner] = useState([] as number[]);
  const [toggle_sort, setToggleSort] = useState(false);
  const [current_squares, setCurrentSquares] = useState([] as number[]);

  useEffect(() => {
    const { squares } = history[step_number];
    setCurrentSquares(squares);

    const winner_result = calculateWinner(squares);

    if (winner_result.game_done) {
      setStatus(`Winner: ${winner_result.name}`);
      setWinner(winner_result.lines);
    } else if (!winner_result.game_done && step_number === 9) {
      setStatus('Game Over: Draw!');
    } else {
      setStatus(`Next player: ${x_is_next ? 'X' : 'O'}`);
      setWinner([]);
    }
  }, [history, step_number, x_is_next]);

  const handleClick = (i: number) => {
    const copy_history = history.slice(0, step_number + 1);
    const squares = [...copy_history[copy_history.length - 1].squares];

    if (winner.length || squares[i]) {
      return;
    }

    squares[i] = x_is_next ? 'X' : 'O';

    setHistory(
      copy_history.concat([
        {
          squares,
          position: i
        }
      ])
    );

    setXIsNext(!x_is_next);
    setStepNumber(copy_history.length);
  };

  const jumpTo = (move: number) => {
    if (!move) {
      setHistory(default_history);
    }
    setStepNumber(move);
    setXIsNext(move % 2 === 0);
  };

  return (
    <div className="game">
      <div className="game-detail board">
        <div className="board-container">
          <Board
            squares={current_squares}
            winner={winner}
            onClick={(i: number) => handleClick(i)}
          />
        </div>
      </div>
      <div className="game-detail info">
        <div>{status}</div>
        <div className="action">
          <Toggle checked={toggle_sort} onClick={() => setToggleSort(!toggle_sort)} />
        </div>
        <MovesList
          toggle_sort={toggle_sort}
          history={history}
          step_number={step_number}
          onClick={jumpTo}
        />
      </div>
    </div>
  );
};

export default App;
