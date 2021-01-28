import PropTypes from 'prop-types';

const Header = ({title, color}) => {
    return (
        <div>
            <h1 style={{backgroundColor: color}}>{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'ReAcT',
    color: 'cyan'
}

Header.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
}

export default Header
