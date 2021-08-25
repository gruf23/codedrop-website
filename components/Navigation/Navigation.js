import styles from './navigation.module.scss';
import Link from 'next/link'

/**
 * Navigation component
 * @param {string} props.dir - Nav items direction. horizontal | vertical
 * @param {string} props.align - Nav items align. For vertical direction use only. left | center | right
 * @returns {JSX.Element}
 * @constructor
 */
function Navigation(props) {
  return (
    <nav className={`${styles.nav} ${styles[props.dir]} ${styles[props.align]}`}>
      <Link href="/">Home</Link>
      <Link href="#">About</Link>
      <Link href="/collection">Collection</Link>
      <Link href="/contact">Contact</Link>
      <Link href="#">Carrer</Link>
    </nav>
  )
}

Navigation.defaultProps = {
  dir: 'horizontal',
  align: ''
};

export default Navigation;
