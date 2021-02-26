import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onClick }) => {
    return (
        <button 
        className='button'
        onClick={(value) => onClick(value)}>
            {value}
        </button>
    )
}

Button.defaultProps = {
}

Button.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string
}

export default Button
