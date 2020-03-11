import React from 'react';
import { findRowCol } from 'helpers';

interface MovesListProps {
  history: any[];
  toggle_sort: boolean;
  step_number: number;
  onClick: (move: number) => void;
}

const MovesList = (props: MovesListProps) => {
  const { toggle_sort, history, step_number, onClick } = props;
  return (
    <div className="moves">
      <ol className={`moves-list ${toggle_sort ? 'reverse' : ''}`}>
        {history.map((step, move) => {
          const position = findRowCol(step.position);
          const desc = move
            ? `Go to move # ${move}. \nLocation: column: ${position.col} row: ${position.row} `
            : 'Go to game start';
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={move}>
              <button
                type="button"
                className={move !== history.length - 1 && move === step_number ? 'active' : ''}
                onClick={() => onClick(move)}
              >
                {desc}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default MovesList;
