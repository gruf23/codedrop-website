import styles from './projects-grid.module.scss';
import ProjectSummary from '../ProjectSummary/ProjectSummary';

// static data for now
const data = [
  {
    title: 'Mock title',
    tags: ['this', 'that'],
    summary: 'Mock summary sentence',
    websiteUrl: 'https://example.com',
    image: null
  },
  {
    title: 'Mock title',
    tags: ['this', 'that'],
    summary: 'Mock summary sentence',
    websiteUrl: 'https://example.com',
    image: null
  },
  {
    title: 'Mock title',
    tags: ['this', 'that'],
    summary: 'Mock summary sentence',
    websiteUrl: 'https://example.com',
    image: null
  }
];

function ProjectsGrid() {
  return (
    <div className={styles.projects}>
      {data.map((item, i) => <ProjectSummary key={i} data={item}/>)}
    </div>
  );
}

export default ProjectsGrid;
