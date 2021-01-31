import PropTypes from 'prop-types';

const Button = ({text, color}) => {
    const doit = (e) =>{console.log(e);}
    return <button className='btn' style={{backgroundColor: color}}>{text}</button>
}

Button.defaultProps = {
    text: 'Add',
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button
