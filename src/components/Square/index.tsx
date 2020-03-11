import React from 'react';

interface SquareProps {
  value: number;
  is_winner: boolean;
  onClick: () => void;
}

const Square = (props: SquareProps) => {
  const { value, onClick, is_winner } = props;
  return (
    <button type="button" className={`square ${is_winner ? 'hightlight' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
