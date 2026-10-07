import { features, stats } from '../data.js'
import Counter from './Counter.jsx'
import Icon from './Icon.jsx'
const icons = ['chart', 'users', 'bolt']
export default function Features() {
  return (
    <section className="features">
      <div className="container features-inner">
        <div>
          <span className="eyebrow dim" data-r>Proven. Trusted. Results-Driven.</span>
          <h3 className="f-title" data-r>We Don’t Just Design Websites.</h3>
          {features.map((f) => (
            <div className="f-item" key={f.title} data-r>
              <span className="tick"><Icon name="check" size={16} stroke={3} /></span>
              <div><h4>{f.title}</h4><p>{f.text}</p></div>
            </div>
          ))}
        </div>
        <div className="circles" data-r>
          {stats.map((s, i) => (
            <div className={`circle c${i}`} key={s.label}>
              <strong><Counter value={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
          {icons.map((ic, i) => <i className={`dot d${i}`} key={i}><Icon name={ic} size={18} /></i>)}
        </div>
      </div>
    </section>
  )
}
