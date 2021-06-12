import Select from 'react-select';

/**
 * Select input
 * @param {string} props.label - Input label
 * @param {boolean} props.required - Is input required
 * @param {string} props.error - error message
 * @returns {JSX.Element}
 * @constructor
 */

const customStyles = {
  control: (provided, {isFocused}) => {
    const boxShadow = isFocused ? '0 0 0 1px #3175F2' : '0 0 0 0 #3175F2';
    const borderColor = isFocused ? '#3175F2' : '#D9DFE5';
    return {
      ...provided,
      height: 50,
      borderColor,
      boxShadow,
      '&:hover': {
        borderColor: isFocused ? '#3175F2' : '#c2c9d0'
      }
    };
  },
  valueContainer: (provided) => ({
    ...provided,
    height: 50,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#B7BBC0'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000',
    letterSpacing: '0.03111rem'
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 20
  }),
  input: () => ({
    display: 'none'
  }),
  option: (provided, {isFocused}) => {
    const backgroundColor = isFocused ? '#edf2f7' : '#ffffff';
    return {
      ...provided,
      padding: 15,
      color: '#000000',
      backgroundColor: backgroundColor
    };
  }
};

function CDSelect(props) {
  const label = props.required === true ? props.label + '*' : props.label;
  const isValid = typeof props.error === 'undefined' || props.error.length === 0;
  return (
    <div className={`text-input ${isValid ? '' : 'invalid'}`}>
      {typeof props.label !== 'undefined' ?
        <label htmlFor={props.name}>{label}</label> : ''
      }
      <Select styles={customStyles} {...props} />
      {!isValid ?
        <p className="error-msg">{props.error}</p> : ''
      }
    </div>
  );
}

export default CDSelect;
