import { Link } from 'react-router-dom'
import { reasons } from '../data.js'
import Icon from './Icon.jsx'
export default function WhyUs() {
  return (
    <section className="section whyus">
      <div className="container whyus-inner">
        <div className="whyus-imgs" data-r>
          <span className="frame" />
          <img src="/img/Assistia-Canada.jpg" alt="Assistia Canada team" />
          <img src="/img/Assistia-Toronto.jpg" alt="Toronto" />
          <div className="img-badge"><Icon name="star" size={20} /><div><strong>600+</strong><small>Websites launched</small></div></div>
        </div>
        <div className="whyus-text">
          <span className="eyebrow" data-r>Why Assistia</span>
          <h2 data-r>Turn Visitors Into Loyal Customers</h2>
          <p className="lead" data-r>We’re a creative web design and development agency specialized in eCommerce, helping businesses like yours grow, convert, and thrive online.</p>
          <h4 data-r>Why Choose Assistia?</h4>
          <ul className="checks" data-r>{reasons.map((r) => <li key={r}><Icon name="check" size={14} stroke={3} />{r}</li>)}</ul>
          <Link to="/contact" className="btn btn-dark" data-r>Get Started <Icon name="arrow" size={18} /></Link>
        </div>
      </div>
    </section>
  )
}
