import styles from './contact-success.module.scss'
import BgTriangleBigLeft from '../../../components/BgShapes/BgTriangleBigLeft';

function ContactPageSuccess() {
  return (
    <>
      <BgTriangleBigLeft classNames={styles.bgBigTriangleLeftShape} />
      <div className={styles.content}>
        <section className={styles.wrap}>
          <h1>Building Bigger Ideas Together</h1>
          <p>
            Everyone working on your project is fully invested in its success. We care just as much about how<br/>
            your software looks and performs as we do about the problem that it’s solving. We work, learn, and<br/>
            celebrate together, measuring success by the duration of our long-term partnerships.
          </p>
        </section>
      </div>
    </>
  )
}

export default ContactPageSuccess;
