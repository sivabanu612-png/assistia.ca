import { img } from '../utils/img.js'
import { Link } from 'react-router-dom'
import Newsletter from './Newsletter.jsx'
import Icon from './Icon.jsx'
import { socials } from './Header.jsx'
import { nav, services } from '../data.js'
export default function Footer() {
  return (
    <footer className="site-footer">
      <Newsletter />
      <div className="container foot-grid">
        <div>
          <Link to="/" className="foot-logo"><img src={img('logo-white-2.png')} alt="" /><span>Assistia</span></Link>
          <p>Creative web design and eCommerce development agency helping businesses grow, convert and thrive online.</p>
          <div className="social">{socials.map(([n, u, l]) => <a key={n} href={u} target="_blank" rel="noreferrer" aria-label={n}>{l}</a>)}</div>
        </div>
        <div><h4>Quick Links</h4><ul>{nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul></div>
        <div><h4>Services</h4><ul>{services.slice(0, 5).map((s) => <li key={s.title}><Link to="/pricing">{s.title.replace(' (CRO)', '')}</Link></li>)}</ul></div>
        <div>
          <h4>Contact</h4>
          <ul className="foot-contact">
            <li><Icon name="phone" size={16} /><a href="tel:+16478566864">+1 (647) 856-6864</a></li>
            <li><Icon name="mail" size={16} /><a href="mailto:hello@assistia.ca">hello@assistia.ca</a></li>
            <li><Icon name="pin" size={16} /><span>4168 Finch Ave E PH05, Scarborough, ON M1S 5H6</span></li>
          </ul>
        </div>
      </div>
      <div className="container foot-bottom">© 2016-{new Date().getFullYear()} Copyrights by Assistia</div>
    </footer>
  )
}
