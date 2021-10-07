import './status-hint.module.scss';

/**
 * Status message and hint holder
 * @param props.type {'info' | 'success' | 'error'}
 * @return {JSX.Element}
 * @constructor
 */
function StatusHint(props) {
  return (
    <div className={`hint ${props.type}`}>
      {props.children}
    </div>
  );
}

StatusHint.defaultProps = {
  style: 'info'
};

export default StatusHint;
