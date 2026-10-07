import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
export default function CtaBand({ kicker, title, icon = 'rocket', btn, to = '/contact', overlap = false }) {
  return (
    <div className={`cta-band ${overlap ? 'overlap' : ''}`}>
      <div className="container">
        <div className="cta-inner" data-r>
          <div className="cta-ic"><Icon name={icon} size={34} /></div>
          <div className="cta-text"><small>{kicker}</small><h3>{title}</h3></div>
          <Link to={to} className="btn btn-light">{btn} <Icon name="arrow" size={18} /></Link>
        </div>
      </div>
    </div>
  )
}
