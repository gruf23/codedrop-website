import cx from 'classnames'

function BgTriangleBigLeft(props) {
  return (
    <img className={cx(
      'bgShape1',
      props.classNames
    )} src='images/bg-shape-grey-b-l.svg' alt=""/>
  )
}

export default BgTriangleBigLeft
