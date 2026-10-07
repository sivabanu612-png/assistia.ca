import { img } from '../utils/img.js'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'


export default function Hero() {
  return (
    <section className="hero">
      <div className="blob b1" /><div className="blob b2" />
      <div className="container hero-inner">
        <div className="hero-text" data-r>
          <span className="pill-tag"><Icon name="sparkle" size={14} /> eCommerce &amp; GEO Experts in Canada</span>
          <h1>Beyond the <span className="grad">Best</span></h1>
          <p>We don’t just build websites—we build digital experiences that sell.</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn">Start Your Project <Icon name="arrow" size={18} /></Link>
            <Link to="/pricing" className="btn btn-ghost">View Pricing</Link>
          </div>
          <div className="hero-proof">
            <div><strong>600+</strong><span>Websites</span></div>
            <div><strong>10+</strong><span>Years</span></div>
            <div><strong>30%</strong><span>Avg. growth</span></div>
          </div>
        </div>
        <div className="hv" data-r>
          <div className="hv-main">
            <div className="hv-bar"><i /><i /><i /><span>assistia.ca</span></div>
            <img src={img('Assistia-Sales.gif')} alt="Web design illustration" />
          </div>
          <div className="hv-float ba">
            <img src={img('Assistia-Canada-Web-Design-1.jpg')} alt="Before and after Assistia: leads and sales growth" />
          </div>
          <div className="hv-chip c1"><span className="ci"><Icon name="trend" size={18} /></span><div><strong>+30%</strong><small>Profit growth</small></div></div>
          <div className="hv-chip c2"><span className="ci"><Icon name="sparkle" size={18} /></span><div><strong>GEO Ready</strong><small>Ranks in AI search</small></div></div>
        </div>
      </div>
    </section>
  )
}