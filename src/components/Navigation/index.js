import styles from './navigation.module.scss';
import Link from 'next/link';
import cx from 'classnames';

const links = [
  {slug: '/', name: 'Home'},
  {slug: '/services', name: 'About'},
  {slug: '/collection', name: 'Collection'},
  {slug: '/contact', name: 'Contact'},
  // {slug: '/career', name: 'Career'}
]

/**
 * Navigation component
 * @param {string} props.dir - Nav items direction. horizontal | vertical
 * @param {string} props.align - Nav items align. For vertical direction use only. left | center | right
 * @param {function} props.onClick - Function that is being called on navigation
 * @returns {JSX.Element}
 * @constructor
 */
function Navigation(props) {
  const classList = cx(
    props.className,
    styles.nav,
    styles[props.dir],
    styles[props.align],
    props.classes
  )
  return (
    <nav className={classList}>
      {
        links.map((link, i) => {
          return (<Link key={i} href={link.slug}><a onClick={props.onClick}>{link.name}</a></Link>)
        })
      }
    </nav>
  );
}

Navigation.defaultProps = {
  dir: 'horizontal',
  align: '',
  onClick: undefined
};

export default Navigation;
