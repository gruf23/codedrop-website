import './big-blue-bordered.scss'

function BigBlueBorderedButton({children, onClick = undefined}) {
  return (
    <button className={'button big-blue-bordered'} onClick={onClick}>{children}</button>
  )
}

export default BigBlueBorderedButton;
