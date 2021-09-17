import Image from 'next/image'
import styles from './home.module.scss';
import heroGraphics from '../../public/images/homepage-hero.svg';

import BgShape1 from '../../src/components/BgShapes/BgShape1';
import BgShapeBottom from '../../src/components/BgShapes/BgShapeBottom';
import { BlueButton, DecoratedLink } from '../../src/components/Buttons';
import Capability from '../../src/components/Capability/Capability';
import { SelectedProjects } from '../../src/components/Projects';
import cx from 'classnames'

function HomePage() {
  return (
    <div className={styles.content}>
      <BgShape1/>
      <section className={styles.first}>
        <div className="text-block">
          <h2>We Design, Build &{'\n'}
            Grow eCommerce{'\n'}
            Websites.</h2>
          <p>As a full-service eCommerce agency, we follow an inbound{'\n'}
            methodology and deliver bespoke, white-glove service to{'\n'}
            convert visitors into repeat customers.</p>
          <BlueButton className={styles.heroCta} onClick={undefined}>book a free consultation</BlueButton>
        </div>
        <Image src={heroGraphics} alt=""/>
      </section>
      <section className={styles.about}>
        <div>
          <div className={styles.sub}>about us</div>
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
        <div className={styles.upworkBlock}>
          <h3>
            We on <DecoratedLink classes={styles.upworkBlockLink} href={'https://upwork.com'}><img src='images/Upwork-logo.svg' alt="Upwork"/></DecoratedLink>
          </h3>
          <div>
            <ul className={styles.upworkBlockStats}>
              <li>
                <span className={styles.upworkAmount}>22.410</span> <span className={styles.upworkLegend}>hours total</span>
              </li>
              <li>
                <span className={styles.upworkAmount}>100%</span> <span className={styles.upworkLegend}>job success</span>
              </li>
              <li>
                <span className={styles.upworkAmount}>51</span> <span className={styles.upworkLegend}>Total Jobs</span>
              </li>
            </ul>
            <div className={styles.upworkBlockBadge}>
              <img src='images/top-rated-badge.svg' alt="Top rated agency on Upwork"/>
              <span>top rated plus</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.capabilities}>
        <div className={styles.sub}>capabilities</div>
        <h2>We're The {'\n'}
          Whole Package</h2>
        <DecoratedLink href={''}>Learn more</DecoratedLink>
        <div className={styles.services}>
          <Capability
            image='images/service-block/dev.svg'
            heading={'Development'}
            sub={'Transform your buisness through technology'}
            link={'/services'}
          />
          <Capability
            image='images/service-block/uiux.svg'
            heading={'Design'}
            sub={'Elevate your user experience'}
            link={'/services'}
          />
          <Capability
            image='images/service-block/servers.svg'
            heading={'Cloud & DevOps'}
            sub={'Future-Proof and Scale Your Infrastructure'}
            link={'/services'}
          />
          <Capability
            image='images/service-block/support.svg'
            heading={'Support'}
            sub={'Keep Your Software Running At Its Best'}
            link={'/services'}
          />
        </div>
      </section>

      <section className={styles.work}>
        <div className={styles.workTextBlock}>
          <div className={cx(styles.sub, styles.workBlockSub)}>work</div>
          <h2>Building Bigger Ideas Together</h2>
          <p>Everyone working on your project is fully invested in its success. <br/>
            We care just as much about how your software looks and performs as we do about the
            problem that it’s solving.
            We work, learn, and celebrate together, measuring success by the duration of our
            long-term partnerships.</p>
        </div>
        <h3>Selected projects</h3>
        <SelectedProjects classes={styles.selectedProjects}/>
        <div className={styles.exploreMoreProjects}>
          <h3>Explore more</h3>
          <p>
            We always solve the most vigorous challenges by coming up with exclusive ideas in
            developing strategies, providing consultations, working with digital solutions,
            implementing high-end technology and operations.
          </p>
          <DecoratedLink classes={'orange'} href={'#'}>all cases</DecoratedLink>
        </div>
      </section>

      <section className="contact">
        <h2>Have any questions left?<br/>
          Feel free to ask us.</h2>
        <p>We’ll reply you right the way. See yourself.</p>
        <BlueButton>contact us</BlueButton>
      </section>
      <BgShapeBottom/>
    </div>
  );
}

export default HomePage;
