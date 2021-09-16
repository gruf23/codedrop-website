import styles from './decorated-link.module.scss';
import cx from 'classnames'

/**
 * Decorated link with 'external link' icon
 * @param {string} props.children - link content (label)
 * @param {string} props.href - link href
 * @param {string} props.target - link target attribute
 * @param {string} props.classes - additional classes divided by space as in HTML
 * @returns {JSX.Element}
 * @constructor
 */
function DecoratedLink(props) {
  const {href, classes, children, target = '_self'} = props;
  return (
    <a className={cx(styles.externalLink, classes)} href={href} target={target}>
      {children}
    </a>
  );
}

export default DecoratedLink;
