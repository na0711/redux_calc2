import React from 'react';

const PlusBtn = ({ onClick, className }) => (
  <button onClick={ onClick } className={className}>+</button>
);

export default PlusBtn;