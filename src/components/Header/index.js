import styles from './header.module.scss';
import Navigation from '../Navigation';
import MobileMenu from '../Navigation/Mobile';
import Link from 'next/link'
import { useEffect, useState } from 'react';

function Header() {
  const [screenWidth, setScreenWidth] = useState(0);
  // todo use context to provide screen width
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    });
    console.log(screenWidth)
  }, () => {
    window.removeEventListener('resize');
  });

  return (
    <header className={styles.header}>
      <Link href="/">
        <a><img src='/images/cd-logo-vertical.svg' alt="CodeDrop logo"/></a>
      </Link>
      {screenWidth >= 768 &&
        <Navigation />
      }
      {screenWidth < 768 &&
        <MobileMenu />
      }
    </header>
  );
}

export default Header;
