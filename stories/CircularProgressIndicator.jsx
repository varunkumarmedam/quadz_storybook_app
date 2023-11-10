import React from 'react';
import PropTypes from 'prop-types';
import './CircularProgressIndicator.css';
/**
 * Primary UI component for user interaction
 */
export const CircularProgressIndicator = ({ percentage, color, background, size, thickness }) => {
  return (
    <div className='c-progress-indicator' style={{ background: `conic-gradient(${color} ${percentage * 3.6 + "deg"}, ${background} 0deg)`, "--thickness": thickness + "px", height: size, width: size }}></div>
  );
};

CircularProgressIndicator.propTypes = {
  percentage: PropTypes.number, 
  color: PropTypes.string, 
  background: PropTypes.string, 
  size: PropTypes.number, 
  thickness: PropTypes.number
};

CircularProgressIndicator.defaultProps = {
  percentage: 10, 
  color: 'violet', 
  background: 'white', 
  size: 80, 
  thickness: 10
};
