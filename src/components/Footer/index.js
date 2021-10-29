import styles from './footer.module.scss';
import Link from 'next/link';
import Navigation from '../Navigation';

import { useState, useEffect } from 'react';

function Footer() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    });
  }, () => {
    window.removeEventListener('resize');
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <img className={styles.logo} src="/images/cd-logo-horizontal.svg" alt="CodeDrop"/>
          <div className={styles.terms}>
            <p>© 2020 All Rights Reserved, Codedrop</p>
            <p><Link href={'/privacy-policy'}>Privacy Policy</Link></p>
          </div>
          {/*<div className={styles.socials}>*/}
          {/*  <a href="https://example.com/" target="_blank">*/}
          {/*    <img src='/images/icons/github.svg' alt="Our github"/>*/}
          {/*  </a>*/}
          {/*  <a href="https://example.com/" target="_blank">*/}
          {/*    <img src='/images/icons/behance.svg' alt="Our behance"/>*/}
          {/*  </a>*/}
          {/*  <a href="https://example.com/" target="_blank">*/}
          {/*    <img src='/images/icons/instagram.svg' alt="Our instagram"/>*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
        {screenWidth >= 768 &&
          <Navigation dir={'vertical'} align={'right'} classes={styles.nav}/>
        }
        {screenWidth > 591 &&
          <div className={styles.emails}>
          <h4>Contact us</h4>
          <p className={styles.emailLabel}>new buisness</p>
          <a href="mailto:deal@codedrop.cc"><span>deal@codedrop.cc</span></a>
          <p className={styles.emailLabel}>say hi</p>
          <a href="mailto:hello@codedrop.cc"><span>hello@codedrop.cc</span></a>
        </div>
        }
      </div>
    </footer>
  );
}

export default Footer;
