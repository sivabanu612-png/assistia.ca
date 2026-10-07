import { steps } from '../data.js'
import Icon from './Icon.jsx'
export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="center" data-r>
          <span className="eyebrow">How we work</span>
          <h2>From Idea to Launch in 4 Simple Steps</h2>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title} data-r>
              <div className="step-ic"><Icon name={s.icon} size={28} /><b>{i + 1}</b></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
