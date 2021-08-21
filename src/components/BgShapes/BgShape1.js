import shape from '../../assets/graphics/bg-shape-1.svg';

function BgShape1() {
  const style = {
    position: 'absolute',
    zIndex: '-1',
    left: 0,
    top: 0
  };
  return (
    <img className={'bgShape1'} src={shape} alt="" style={style}/>
  )
}

export default BgShape1
