import './decorated-link.scss';

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
    <a className={`external-link ${classes}`} href={href} target={target}>
      {children}
    </a>
  );
}

export default DecoratedLink;
