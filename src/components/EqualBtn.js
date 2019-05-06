import React from 'react';
// import PropTypes from 'prop-types';

const EqualBtn = ({n, onClick, className}) => (
  <button onClick={onClick} className={className}>=</button>
);

// NumBtn.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default EqualBtn;