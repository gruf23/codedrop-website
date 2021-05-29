import './blue-bordered.scss'

function BlueBorderedButton({children, onClick = undefined}) {
  return (
    <button className={'button blue-bordered'} onClick={onClick}><span>{children}</span></button>
  )
}

export default BlueBorderedButton;
