import './footer.scss';
import BgShape from './bg-shape.svg';
import Logo from '../../assets/cd-logo-horizontal.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

import BehanceLogo from './behance.svg';
import GithubLogo from './github.svg';
import InstagramLogo from './instagram.svg';

function Footer() {
  return (
    <footer style={{backgroundImage: `url(${BgShape})`}}>
      <div className={'content'}>
        <div>
          <img className={'logo'} src={Logo} alt="CodeDrop"/>
          <div className="terms">
            <p>© 2020 All Rights Reserved, Codedrop</p>
            <p><Link to="/privacy-policy">Privacy Policy</Link></p>
          </div>
          <div className="socials">
            <Link to="#" target={'_blank'}>
              <img src={GithubLogo} alt="Our github"/>
            </Link>
            <Link to="#" target={'_blank'}>
              <img src={BehanceLogo} alt="Our behance"/>
            </Link>
            <Link to="#" target={'_blank'}>
              <img src={InstagramLogo} alt="Our instagram"/>
            </Link>
          </div>
        </div>
        <Navigation dir={'vertical'} align={'right'}/>
        <div className="emails">
          <h4>Contact us</h4>
          <p className="label">new buisness</p>
          <Link to={'mailto:deal@codedrop.cc'}><span>deal@codedrop.cc</span></Link>
          <p className="label">say hi</p>
          <Link to={'mailto:hello@codedrop.cc'}><span>hello@codedrop.cc</span></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
