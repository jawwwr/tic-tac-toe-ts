import React from 'react';
import Square from 'components/Square';

interface BoardProps {
  squares: any;
  winner: number[];
  onClick: (i: number) => void;
}

const Board = (props: BoardProps) => {
  const { squares, onClick, winner } = props;
  const RenderSquare = (i: number) => {
    return (
      <Square
        key={i}
        // eslint-disable-next-line react/prop-types
        is_winner={winner.includes(i)}
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  };

  const RenderSquares = [];

  // eslint-disable-next-line no-plusplus
  for (let x = 0; x < 9; x++) {
    RenderSquares.push(RenderSquare(x));
  }

  return <>{RenderSquares}</>;
};

export default Board;
