import styles from './project-summary.module.scss'
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
    <div className={styles.projectSummary}>
      <div className={styles.image}>
        <div>
          <img src={props.data.image} alt={props.data.title}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>{props.data.tags.join(', ')}</div>
        <h3>{props.data.title}</h3>
        <p className={styles.summary}>{props.data.summary}</p>
        <DecoratedLink href={props.data.websiteUrl}>Visit website</DecoratedLink>
      </div>
    </div>
  )
}

export default ProjectSummary;
