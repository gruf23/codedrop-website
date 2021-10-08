import styles from './capabilities-block.module.scss';
// import { withRouter } from 'react-router-dom';

function Capability(props) {
  function handleClick() {
    props.history.push(props.link);
  }

  if (!props.image || !props.heading) {
    throw new Error('Invalid Attribute');
  }
  return (
    <div className={styles.serviceBlock} onClick={handleClick}>
      <div>
        <h3>{props.heading}</h3>
        {props.sub &&
        <p className={styles.sub}>{props.sub}</p>
        }
        {props.link &&
        <img src='images/icons/external-link.svg' alt=""/>
        }
      </div>
      <img src={props.image} alt=""/>
    </div>
  );
}

// export default withRouter(Capability);
export default Capability;
