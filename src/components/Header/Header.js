import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/cd-logo-vertical.svg'

function Header() {
  return (
    <header>
      <Link to="/"><img src={logo} alt="CodeDrop logo"/></Link>
      <Navigation />
    </header>
  );
}

export default Header;
