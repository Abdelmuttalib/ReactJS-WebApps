import PropTypes from 'prop-types';

const Button = ({text, color, onAddClicked}) => {
    // const doit = (e) =>{console.log(e);}
    return <button className='btn' style={{backgroundColor: color}} onClick={onAddClicked}>{text}</button>
}

Button.defaultProps = {
    text: 'Add',
    color: 'green'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button
