import styles from './header.module.scss';
import Navigation from '../Navigation';
import Link from 'next/link'

function Index() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a><img src='/images/cd-logo-vertical.svg' alt="CodeDrop logo"/></a>
      </Link>
      <Navigation />
    </header>
  );
}

export default Index;
