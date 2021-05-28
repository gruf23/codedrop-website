import './big-blue.scss'

function BigBlueButton({children, onClick = undefined}) {
  return (
    <button className={'button bigBlueButton'} onClick={onClick}>{children}</button>
  )
}

export default BigBlueButton;
