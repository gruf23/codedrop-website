import './capabilities-block.scss'
import BgShape from '../../assets/graphics/service-block/bg-shape.svg'
import { Link } from '../Buttons'

function Capability({image = false, heading = false, sub = false, link = false}) {
  if (!image || !heading) {
    throw new Error('Invalid Attribute');
  }
  return (
    <div className={'service-block'} style={{backgroundImage: `url(${BgShape})`}}>
      <div>
        <h3>{heading}</h3>
        {sub &&
          <p className="service-sub">{sub}</p>
        }
        {link &&
          <Link href={link} />
        }
      </div>
      <img src={image} alt=""/>
    </div>
  )
}

export default Capability;
