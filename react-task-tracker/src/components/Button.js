import PropTypes from 'prop-types';

const Button = ({text}) => {
    function doit(){console.log("CLICKED");}
    return (
        <div>
            <button onClick={doit}>{text}</button>           
        </div>
    )
}

Button.defaultProps = {
    text: 'ADD',
    func: 'doit'
}

Button.propTypes = {
    text: PropTypes.string,
    func: PropTypes.func
}

export default Button
