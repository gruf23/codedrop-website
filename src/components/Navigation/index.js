import styles from './navigation.module.scss';
import Link from 'next/link';
import cx from 'classnames';

/**
 * Navigation component
 * @param {string} props.dir - Nav items direction. horizontal | vertical
 * @param {string} props.align - Nav items align. For vertical direction use only. left | center | right
 * @returns {JSX.Element}
 * @constructor
 */
function Navigation(props) {
  const classList = cx(
    styles.nav,
    styles[props.dir],
    styles[props.align],
    props.classes
  )
  return (
    <nav className={classList}>
      <Link href="/">Home</Link>
      <Link href={'/services'}>About</Link>
      <Link href={'/collection'}>Collection</Link>
      <Link href={'/contact'}>Contact</Link>
      {/*<Link href="#">Carrer</Link>*/}
    </nav>
  );
}

Navigation.defaultProps = {
  dir: 'horizontal',
  align: ''
};

export default Navigation;
