import styles from './collection.module.scss';
import BgShape1 from '../../components/BgShapes/BgShape1';
import { SelectedProjects, ProjectsGrid } from '../../components/Projects';
import ContactForm from '../../components/ContactForm';

function CollectionPage() {
  return (
    <div className={styles.content}>
      <BgShape1 classNames={styles.bgShape} />
      <section className={styles.first}>
        <h1>Building Bigger Ideas Together</h1>
        <p>Everyone working on your project is fully invested in its success. We care just as much
          about how your software looks and performs as we do about the problem that it’s solving.
          We work, learn, and celebrate together, measuring success by the duration of our long-term
          partnerships.</p>
      </section>
      <section className={styles.projectsMain}>
        <SelectedProjects/>
      </section>
      <section className={styles.projectsSecondary}>
        <ProjectsGrid/>
      </section>
      <section className={styles.startProject}>
        <div className={styles.sub}>work with us</div>
        <h2>Start a Project</h2>
        <ContactForm/>
      </section>
    </div>
  );
}

export default CollectionPage;
