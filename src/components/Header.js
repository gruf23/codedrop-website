import Navigation from './Navigation';
import '../styles/components/header.scss';
import logo from '../assets/cd-logo-vertical.svg'

function Header() {
  return (
    <header>
      <a href="/"><img src={logo} alt="CodeDrop logo"/></a>
      <Navigation />
    </header>
  );
}

export default Header;
