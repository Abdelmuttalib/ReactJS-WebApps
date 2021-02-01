import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAddClicked, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onAddClicked={onAddClicked} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}/>
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
