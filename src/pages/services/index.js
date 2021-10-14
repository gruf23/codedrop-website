import styles from './services.module.scss';

import BgShape1 from '../../components/BgShapes/BgShape1';
import BgShapeBottom from '../../components/BgShapes/BgShapeBottom';
import BgTriangleBigRight from '../../components/BgShapes/BgTriangleBigRight';
import BgTriangleSmallLeft from '../../components/BgShapes/BgTriangleSmallLeft';
import cx from 'classnames';

import ContactForm from '../../components/ContactForm';

const data = [
  {
    anchor: 'development',
    title: 'Development',
    icon: '/images/icons/service-development-icon.svg',
    iconAlt: 'service-development-icon',
    text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.',
    points: [
      {
        title: 'WEB DEVELOPMENT',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      },
      {
        title: 'system integration',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      },
      {
        title: 'SYSTEMS ARCHITECTURE',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      },
      {
        title: 'QUALITY ASSURANCE',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      }
    ]
  },
  {
    anchor: 'design',
    title: 'Design',
    icon: '/images/icons/service-design-icon.svg',
    iconAlt: 'service-design-icon',
    text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.',
    points: [
      {
        title: 'research',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      },
      {
        title: 'behavior design',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      },
      {
        title: 'service design',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      },
      {
        title: 'product design',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      },
      {
        title: 'design strategy',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      }
    ]
  },
  {
    anchor: 'servers',
    title: 'Cloud [?] & DevOps',
    icon: '/images/icons/service-servers-icon.svg',
    iconAlt: 'service-servers-icon',
    text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.',
    points: [
      {
        title: 'migration',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      }
    ]
  },
  {
    anchor: 'support',
    title: 'Support',
    icon: '/images/icons/service-support-icon.svg',
    iconAlt: 'service-support-icon',
    text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.',
    points: [
      {
        title: 'operation support',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      },
      {
        title: 'Application support',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      },
      {
        title: 'STAFF AUGMENTATION',
        text: 'While some software needs can be satisfied with modified off-the-shelf products, others require a custom software solution built from the ground up. With deep experience in web, and back-end platforms, our software solutions are scalable, flexible, and most importantly, secure.'
      }
    ]
  }
];

function HomePage() {
  return (
    <div className={styles.content}>
      <BgShape1 classNames={styles.bgShape}/>
      <BgTriangleBigRight classNames={styles.bgShape2} />
      <BgTriangleSmallLeft classNames={styles.bgShape3} />
      <BgTriangleBigRight classNames={styles.bgShape4} />

      <section className={styles.first}>
        <h1>Bespoke software development solutions <br/><span>for your business</span></h1>
        <p>Design. Development. Consultancy.</p>
      </section>
      {/*do we need it?*/}
      <section className={styles.pageNav}>
        <div>
          <a href="#development">development</a>
          <a href="#design">design</a>
          <a href="#servers">cloud & devops</a>
          <a href="#support">support</a>
        </div>
      </section>

      {
        data.map((service, i) => {
          return (
            <section key={i} id={service.anchor} className={cx(styles.section, styles[service.anchor])}>
              <h3>{service.title}</h3>
              <img src={service.icon} alt={service.iconAlt}/>
              <p className={styles.serviceDescription}>{service.text}</p>
              <div className={styles.servicePoints}>
                {
                  service.points.map((point, j) => {
                    return (
                      <div key={j}>
                        <h5 className={styles.servicePointTitle}>{point.title}</h5>
                        <p className={styles.servicePointDescription}>{point.text}</p>
                      </div>
                    )
                  })
                }
              </div>
            </section>
          )
        })
      }

      <section className={styles.contact}>
        <span className={styles.sub}>work with us</span>
        <h2>Contact Us</h2>
        <ContactForm />
      </section>

      <BgShapeBottom/>
    </div>
  );
}

export default HomePage;
