import { img } from '../utils/img.js'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import RotatingBadge from '../components/RotatingBadge.jsx'
import Icon from '../components/Icon.jsx'
import { prices, included } from '../data.js'
export default function Pricing() {
  return (
    <>
      <PageHero title="Our Pricing" subtitle="We believe in transparent, results-driven pricing — no hidden fees, no confusing packages" />
      <CtaBand overlap kicker="Not sure what fits you best?" title="We’ll create a custom quote based on your needs." icon="tag" btn="Book a Free Consultation" />
      <section className="section pricing-main">
        <div className="container">
          <div className="center" data-r>
            <span className="eyebrow">Our Pricing</span>
            <h2>Simple Monthly Plans</h2>
          </div>
          <div className="price-grid">
            {prices.map((p) => (
              <div className={`price-card ${p.tag ? 'hot' : ''}`} key={p.label} data-r>
                {p.tag && <em className="ribbon">{p.tag}</em>}
                <span className="pic"><Icon name={p.icon} size={28} /></span>
                <small>{p.label}</small>
                <div className="amt"><sup>CAD $</sup>{p.price}<span>/ Month</span></div>
                <Link to="/contact" className={`btn btn-sm ${p.tag ? 'btn-light' : ''}`}>Get Started <Icon name="arrow" size={16} /></Link>
              </div>
            ))}
          </div>
          <div className="coffee" data-r>
            <div className="coffee-card">
              <h3>Your Website, For Less Than a Coffee a Day</h3>
              <div className="coffee-row">
                <div><span className="cup"><Icon name="coffee" size={40} /></span><strong>$4.50/day</strong><span>Coffee</span><em>Gone in 10 minutes</em></div>
                <div className="win"><span className="cup"><Icon name="monitor" size={40} /></span><strong>$0.96/day</strong><span>Custom Website</span><em>Works for you 24/7</em></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="included">
        <div className="container included-inner">
          <div className="polaroids" data-r>
            <div className="pol a"><img src={img('Assistia-Canada.jpg')} alt="" /></div>
            <div className="pol b"><img src={img('Assistia-Toronto.jpg')} alt="" /></div>
          </div>
          <RotatingBadge text="BEYOND THE BEST • " size={120} />
          <div data-r>
            <h2>Included in All Packages</h2>
            <ul>{included.map((i) => <li key={i}><Icon name="check" size={16} stroke={3} />{i}</li>)}</ul>
            <Link to="/contact" className="btn btn-light">Book Free Consultation <Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
