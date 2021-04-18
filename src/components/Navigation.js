import '../styles/components/navigation.scss';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <a href="#">About</a>
      <a href="#">Collection</a>
      <Link to="/contact">Contact</Link>
      <a href="#">Carrer</a>
    </nav>
  )
}

export default Navigation;
