import styles from './contact.module.scss'
import ContactForm from '../../components/ContactForm';

function ContactPage() {
  return (
    <div className={styles.content}>
      <section className={styles.wrap}>
        <div className={styles.left}>
          <h1>Contact Us</h1>
          <p>
            Tell us about your project.<br/>
            We'll back to you within 24 hrs.
          </p>
        </div>
        <ContactForm/>
      </section>
    </div>
  )
}

export default ContactPage;
