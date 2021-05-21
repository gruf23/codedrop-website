import './link.scss';

function Link (props) {
  return (
    <a className={'external-link'} href={props.href}>
      { props.children }
    </a>
  )
}

export default Link
