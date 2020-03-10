import React from 'react';

interface SquareProps {
  value: number;
  onClick: () => void;
}

const Square = (props: SquareProps) => {
  const { value, onClick } = props;
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
