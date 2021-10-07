import './checkbox.module.scss';

/**
 * Text input
 * @param {string} props.name - Checkbox name and ID
 * @param {string} props.checked - Checkbox value
 * @param {string} props.label - Checkbox label
 * @param {function} props.onChangeCallback - change callback
 * @returns {JSX.Element}
 * @constructor
 */
function Checkbox(props) {
  return (
    <div className={'checkbox-input'}>
      <input type="checkbox" checked={props.checked} name={props.name} id={props.name} onChange={props.onChangeCallback}/>
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  )
}

export default Checkbox
