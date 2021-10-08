import styles from './blue.module.scss'

function BlueButton({className, children, onClick = undefined}) {
  return (
    <button className={`${styles.blueButton} ${className}`} onClick={onClick}><span>{children}</span></button>
  )
}

export default BlueButton;
