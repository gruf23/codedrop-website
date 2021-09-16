import './capabilities-block.scss';
import BgShape from './bg-shape.svg';
import LinkIcon from '../../assets/icons/external-link.svg';
// import { withRouter } from 'react-router-dom';

function Capability(props) {
  function handleClick() {
    props.history.push(props.link);
  }

  if (!props.image || !props.heading) {
    throw new Error('Invalid Attribute');
  }
  return (
    <div className={'service-block'} style={{backgroundImage: `url(${BgShape})`}} onClick={handleClick}>
      <div>
        <h3>{props.heading}</h3>
        {props.sub &&
        <p className="service-sub">{props.sub}</p>
        }
        {props.link &&
        <img src={LinkIcon} alt=""/>
        }
      </div>
      <img src={props.image} alt=""/>
    </div>
  );
}

// export default withRouter(Capability);
export default Capability;
