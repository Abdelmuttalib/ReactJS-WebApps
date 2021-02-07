import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({title, onAddClicked, showAdd}) => {
    const location = useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
            { location.pathname === '/' && <Button onAddClicked={onAddClicked} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
