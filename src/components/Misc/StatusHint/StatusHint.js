import styles from './status-hint.module.scss';
import cx from 'classnames'

/**
 * Status message and hint holder
 * @param props.type {'info' | 'success' | 'error'}
 * @return {JSX.Element}
 * @constructor
 */
function StatusHint(props) {
  const classes = cx(
    styles.hint,
    styles[props.type]
  )
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

StatusHint.defaultProps = {
  style: 'info'
};

export default StatusHint;
