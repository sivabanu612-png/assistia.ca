import { services } from '../data.js'
import Icon from './Icon.jsx'
export default function Services() {
  return (
    <section className="services-sec">
      <div className="container services-panel">
        {services.map((s, i) => (
          <article className="service" key={s.title} data-r>
            <span className="num">0{i + 1}</span>
            <div className="icon"><Icon name={s.icon} size={26} /></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
