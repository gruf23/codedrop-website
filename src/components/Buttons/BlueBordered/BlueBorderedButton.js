import styles from './blue-bordered.module.scss'
import cx from 'classnames'

function BlueBorderedButton({className, children, onClick = undefined}) {
  return (
    <button className={cx(
      styles.blueBordered,
      className
    )} onClick={onClick}><span>{children}</span></button>
  )
}

export default BlueBorderedButton;
