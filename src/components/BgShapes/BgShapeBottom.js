import cx from 'classnames'

function BgShapeBottom(props) {
  const style = {
    position: 'absolute',
    zIndex: '-1',
    left: 0,
    bottom: 0
  };
  return (
    <img className={cx(
      'bottom-bg-shape',
      props.classNames)} src='images/footer-bg-shape.svg' alt="" style={style}/>
  )
}

export default BgShapeBottom
