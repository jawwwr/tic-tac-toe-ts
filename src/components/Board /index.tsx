import React from 'react';
import Square from 'components/Square';

interface BoardProps {
  squares: any;
  onClick: (i: number) => void;
}

const Board = (props: BoardProps) => {
  const { squares, onClick } = props;

  const RenderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <>
      <div className="board-row">
        {RenderSquare(0)}
        {RenderSquare(1)}
        {RenderSquare(2)}
      </div>
      <div className="board-row">
        {RenderSquare(3)}
        {RenderSquare(4)}
        {RenderSquare(5)}
      </div>
      <div className="board-row">
        {RenderSquare(6)}
        {RenderSquare(7)}
        {RenderSquare(8)}
      </div>
    </>
  );
};

export default Board;
