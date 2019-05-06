import React from 'react';
// import PropTypes from 'prop-types';

const ClearBtn = ({n, onClick, className}) => (
  <button onClick={onClick} className={className}>clear</button>
);

// NumBtn.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default ClearBtn;