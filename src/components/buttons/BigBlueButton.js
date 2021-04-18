function BigBlueButton({text = 'button', onClick = undefined}) {
  return (
    <button className={'button bigBlueButton'} onClick={onClick}>{text}</button>
  )
}

export default BigBlueButton;
