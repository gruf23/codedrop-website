function BgShapeBottom() {
  const style = {
    position: 'absolute',
    zIndex: '-1',
    left: 0,
    bottom: 0
  };
  return (
    <img className={'bottom-bg-shape'} src='images/footer-bg-shape.svg' alt="" style={style}/>
  )
}

export default BgShapeBottom
