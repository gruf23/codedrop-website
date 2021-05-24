import './home.scss';
import heroGraphics from '../../assets/graphics/homepage-hero.svg';
import upworkLogo from '../../assets/graphics/Upwork-logo.svg';
import topRatedBadge from '../../assets/graphics/top-rated-badge.svg';
import BgShape1 from '../../components/BgShapes/BgShape1';
import { BigBlueButton, Link } from '../../components/Buttons';
import Capability from '../../components/Capability/Capability';
import SelectedProjects from '../../components/Projects';

import dev from '../../assets/graphics/service-block/dev.svg';
import servers from '../../assets/graphics/service-block/servers.svg';
import support from '../../assets/graphics/service-block/support.svg';
import uiux from '../../assets/graphics/service-block/uiux.svg';

function HomePage() {
  return (
    <div className="wrapper">
      <BgShape1/>
      <section className="first">
        <div className="text-block">
          <h2>We Design, Build &{'\n'}
            Grow eCommerce{'\n'}
            Websites.</h2>
          <p>As a full-service eCommerce agency, we follow an inbound{'\n'}
            methodology and deliver bespoke, white-glove service to{'\n'}
            convert visitors into repeat customers.</p>
          <BigBlueButton text={'book a free consultation'} onClick={undefined}/>
        </div>
        <img src={heroGraphics} alt=""/>
      </section>
      <section className="about">
        <div className="text-block">
          <div className="sub">about us</div>
          <h2>Who We Are</h2>
          <p>Based in Omsk, Russia team of the best front-end, back-end and fullstack
            developers.<br/>
            We can quickly and easily adjust our activities to your business processes,<br/>tools
            and
            environments.</p>
          <p>Our aim is to contribute first-class solutions to your projects and gain
            recognition<br/>
            as a professional company you can truly rely on.</p>
        </div>
        <div className="upwork-block">
          <h3>We on <Link href={'https://upwork.com'}><img src={upworkLogo} alt="Upwork"/></Link>
          </h3>
          <div>
            <ul className="stats">
              <li><span className="amount">22.410</span> <span className="legend">hours total</span>
              </li>
              <li><span className="amount">100%</span> <span className="legend">job success</span>
              </li>
              <li><span className="amount">51</span> <span className="legend">Total Jobs</span></li>
            </ul>
            <div className="badge">
              <img src={topRatedBadge} alt="Top rated agency on Upwork"/>
              <span>top rated plus</span>
            </div>
          </div>
        </div>
      </section>
      <section className="capabilities">
        <div className="sub">capabilities</div>
        <h2>We're The {'\n'}
          Whole Package</h2>
        <Link href={''}>Learn more</Link>
        <div className="services">
          <Capability
            image={dev}
            heading={'Development'}
            sub={'Transform your buisness through technology'}
            link={'/services'}
          />
          <Capability
            image={uiux}
            heading={'Design'}
            sub={'Elevate your user experience'}
            link={'/services'}
          />
          <Capability
            image={servers}
            heading={'Cloud & DevOps'}
            sub={'Future-Proof and Scale Your Infrastructure'}
            link={'/services'}
          />
          <Capability
            image={support}
            heading={'Support'}
            sub={'Keep Your Software Running At Its Best'}
            link={'/services'}
          />
        </div>
      </section>
      <section className="work">
        <div className="text-block">
          <div className="sub">work</div>
          <h2>Building Bigger Ideas Together</h2>
          <p>Everyone working on your project is fully invested in its success. <br/>
            We care just as much about how your software looks and performs as we do about the
            problem that it’s solving.
            We work, learn, and celebrate together, measuring success by the duration of our
            long-term partnerships.</p>
        </div>
        <h3>Selected projects</h3>
        <SelectedProjects/>
        <div className="explore-more">
          <h3>Explore more</h3>
          <p>
            We always solve the most vigorous challenges by coming up with exclusive ideas in
            developing strategies, providing consultations, working with digital solutions,
            implementing high-end technology and operations.
          </p>
          <Link classes={'orange'} href={'#'}>all cases</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
