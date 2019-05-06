import React from 'react';
// import PropTypes from 'prop-types';

const NumBtn = ({n, onClick, className}) => (
  <button onClick={onClick} className={className}>{n}</button>
);

// NumBtn.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default NumBtn;