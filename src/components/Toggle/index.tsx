import React from 'react';
import './styles.scss';

interface ToggleProps {
  checked: boolean;
  onClick: () => void;
}

const Toggle = (props: ToggleProps) => {
  const { checked, onClick } = props;
  return (
    <label className="switch" htmlFor="toggle">
      <input type="checkbox" id="toggle" onChange={onClick} checked={checked} />
      <span className="slider round" />
    </label>
  );
};

export default Toggle;
