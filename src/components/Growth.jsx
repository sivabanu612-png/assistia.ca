import Icon from './Icon.jsx'
export default function Growth() {
  return (
    <section className="growth">
      <div className="container growth-inner">
        <h2 data-r>Our clients experience measurable growth through smarter design, SEO, and GEO optimization.</h2>
        <div className="since" data-r>
          <div className="globe"><Icon name="globe" size={34} /></div>
          <h3>Since 2016</h3>
          <p>Over 10 years of delivering powerful eCommerce websites.</p>
        </div>
      </div>
    </section>
  )
}
