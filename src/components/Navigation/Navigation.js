import './navigation.scss';
import { Link } from 'react-router-dom';

/**
 * Navigation component
 * @param {string} props.dir - Nav items direction. horizontal | vertical
 * @param {string} props.align - Nav items align. For vertical direction use only. left | center | right
 * @returns {JSX.Element}
 * @constructor
 */
function Navigation(props) {
  return (
    <nav className={`${props.dir} ${props.align}`}>
      <Link to="/">Home</Link>
      <Link to="#">About</Link>
      <Link to="#">Collection</Link>
      <Link to="/contact">Contact</Link>
      <Link to="#">Carrer</Link>
    </nav>
  )
}

Navigation.defaultProps = {
  dir: 'horizontal',
  align: ''
};

export default Navigation;
