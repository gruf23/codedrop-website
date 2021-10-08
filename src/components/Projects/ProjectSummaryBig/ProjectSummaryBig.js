import styles from './project-summary-big.module.scss';
import { DecoratedLink } from '../../Buttons';
import cx from 'classnames';

/**
 * Big project summary block
 * @param {Object} props.data - array of projects data
 * @param {string} props.data.title - case title
 * @param {string} props.data.summary - case summary
 * @param {Array.<string>} props.data.tags - Case tags
 * @param {string} props.data.image - Path to case image
 * @param {string} props.data.websiteUrl - Case website url
 * @param {'ltr' | 'rtl'} props.direction - direction of content
 * @constructor
 * @returns {JSX.Element}
 */
function ProjectSummaryBig(props) {

  return (
    <div className={cx(styles.projectSummaryBig, styles[props.direction])}>
      <div className={styles.content}>
        <div className={styles.tags}>{props.data.tags.join(', ')}</div>
        <h3>{props.data.title}</h3>
        <p className={styles.summary}>{props.data.summary}</p>
        <DecoratedLink href={props.data.websiteUrl}>Visit website</DecoratedLink>
      </div>
      <div className={styles.image}>
        <div>
          <img src={props.data.image} alt={props.data.title}/>
        </div>
      </div>
    </div>
  );
}

export default ProjectSummaryBig;
