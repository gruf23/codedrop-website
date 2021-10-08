import styles from './text-input.module.scss';
import cx from 'classnames'

/**
 * Text input
 * @param {string} props.name - Input name and ID
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.value - Input value
 * @param {string} props.label - Input label
 * @param {boolean} props.required - Is input required
 * @param {function} props.onChangeCallback - change callback
 * @param {string} props.error - error message
 * @returns {JSX.Element}
 * @constructor
 */
function TextInput(props) {
  const label = props.required === true ? props.label + '*' : props.label
  const isValid = typeof props.error === 'undefined' || props.error.length === 0;

  const classes = cx(
    styles.wrap,
    isValid ? '' : styles.invalid,
    props.classes
  );

  return (
    <div className={classes}>
      {typeof props.label !== 'undefined' ?
        <label htmlFor={props.name}>{label}</label> : ''
      }
      <input id={props.name} name={props.name} type="text"
             placeholder={props.placeholder} onChange={(e) => props.onChangeCallback(e)} value={props.value} />
      {!isValid ?
        <p className={styles.errorMsg}>{props.error}</p> : ''
      }
    </div>
  );
}

export default TextInput;
