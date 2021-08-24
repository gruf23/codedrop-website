import styles from './blue.module.scss'

function BlueButton({children, onClick = undefined}) {
  return (
    <button className={styles.blueButton} onClick={onClick}><span>{children}</span></button>
  )
}

export default BlueButton;
