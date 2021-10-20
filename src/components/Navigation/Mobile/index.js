import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { RemoveScroll } from 'react-remove-scroll';
import Navigation from '../index';
import { CSSTransition } from 'react-transition-group';
import styles from './mobile-menu.module.scss';

function MobileMenu() {
  const [isOpen, setOpen] = useState(false);

  const onNav = () => {
    setOpen(false)
  }

  return (
    <>
      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen}/>
      </div>
      <CSSTransition in={isOpen} timeout={200} classNames={{
        enterDone: styles.enterDone
      }}>
        <RemoveScroll className={styles.menu} enabled={isOpen}>
          <Navigation align={'center'} dir={'vertical'} onClick={onNav}/>
        </RemoveScroll>
      </CSSTransition>
    </>
  );
}

export default MobileMenu;
