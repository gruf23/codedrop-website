import './collection.scss';
import BgShape1 from '../../components/BgShapes/BgShape1';
import SelectedProjects from '../../components/Projects';

function CollectionPage() {
  return (
    <div className={'wrapper collection'}>
      <BgShape1/>
      <section className={'first'}>
        <h2>Building Bigger Ideas Together</h2>
        <p>Everyone working on your project is fully invested in its success. We care just as much
          about how your software looks and performs as we do about the problem that it’s solving.
          We work, learn, and celebrate together, measuring success by the duration of our long-term
          partnerships.</p>
      </section>
      <section className="projects-main">
        <SelectedProjects />
      </section>
    </div>
  );
}

export default CollectionPage;
