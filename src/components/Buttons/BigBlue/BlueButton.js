import './blue.scss'

function BlueButton({children, onClick = undefined}) {
  return (
    <button className={'button blue-button'} onClick={onClick}><span>{children}</span></button>
  )
}

export default BlueButton;
