import styles from './services.module.scss';

import BgShape1 from '../../components/BgShapes/BgShape1';
import BgShapeBottom from '../../components/BgShapes/BgShapeBottom';
import { BlueButton, DecoratedLink } from '../../components/Buttons';
import Capability from '../../components/Capability';
import { SelectedProjects } from '../../components/Projects';
import cx from 'classnames'

function HomePage() {
  return (
    <div className={styles.content}>
      <BgShape1 classNames={styles.bgShape}/>

      <section className={styles.first}>
        <h1>Bespoke software development solutions <br/><span>for your business</span></h1>
        <p>Design. Development. Consultancy.</p>
      </section>
      <section className={styles.pageNav}>
        <div>
          <a href="#development">development</a>
          <a href="#design">design</a>
          <a href="#cloud-devops">cloud & devops</a>
          <a href="#support">support</a>
        </div>
      </section>
      <BgShapeBottom/>
    </div>
  );
}

export default HomePage;
