import { faqs } from '../data.js'
export default function Faq() {
  return (
    <section className="section faq">
      <div className="container faq-inner">
        <div data-r>
          <span className="eyebrow">FAQ</span>
          <h2>Questions? We’ve Got Answers.</h2>
          <p className="lead">Can’t find what you’re looking for? Reach out and our team will get back to you shortly.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} data-r open={i === 0}>
              <summary>{f.q}<i /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
