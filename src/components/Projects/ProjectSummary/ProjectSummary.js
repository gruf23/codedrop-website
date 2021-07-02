import './project-summary.scss';
import { DecoratedLink } from '../../Buttons';

/**
 * Project summary block
 * @param {Object} props.data - array of projects data
 * @param {string} props.data.title - case title
 * @param {string} props.data.summary - case summary
 * @param {Array.<string>} props.data.tags - Case tags
 * @param {string} props.data.image - Path to case image
 * @param {string} props.data.websiteUrl - Case website url
 * @constructor
 * @returns {JSX.Element}
 */
function ProjectSummary(props) {
  return(
    <div className="project-summary">
      <div className="image">
        <div>
          <img src={props.data.image} alt={props.data.title}/>
        </div>
      </div>
      <div className="content">
        <div className="tags">{props.data.tags.join(', ')}</div>
        <h3>{props.data.title}</h3>
        <p className="summary">{props.data.summary}</p>
        <DecoratedLink href={props.data.websiteUrl}>Visit website</DecoratedLink>
      </div>
    </div>
  )
}

export default ProjectSummary;
