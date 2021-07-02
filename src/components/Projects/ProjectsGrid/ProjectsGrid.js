import './projects-grid.scss'
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
    <div className="projects">
      {data.map((item, i) => <ProjectSummary key={i} data={item}/>)}
    </div>
  );
}

export default ProjectsGrid;
