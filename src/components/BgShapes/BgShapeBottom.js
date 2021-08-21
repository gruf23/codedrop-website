import shape from '../../assets/graphics/footer-bg-shape.svg';

function BgShapeBottom() {
  const style = {
    position: 'absolute',
    zIndex: '-1',
    left: 0,
    bottom: 0
  };
  return (
    <img className={'bottom-bg-shape'} src={shape} alt="" style={style}/>
  )
}

export default BgShapeBottom
