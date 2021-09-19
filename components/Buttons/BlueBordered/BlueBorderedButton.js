import styles from './blue-bordered.module.scss'

function BlueBorderedButton({children, onClick = undefined}) {
  return (
    <button className={styles.blueBordered} onClick={onClick}><span>{children}</span></button>
  )
}

export default BlueBorderedButton;
