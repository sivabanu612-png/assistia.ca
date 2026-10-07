import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const on = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    // TODO: send to your backend / form service
    window.location.href = `mailto:hello@assistia.ca?subject=${encodeURIComponent(f.subject || 'Website inquiry')}&body=${encodeURIComponent(`${f.message}\n\n${f.name}\n${f.phone}\n${f.email}`)}`
    setSent(true)
  }
  const info = [
    ['phone', 'Have any questions?', '+1 (647) 856-6864', 'tel:+16478566864'],
    ['mail', 'Send email', 'hello@assistia.ca', 'mailto:hello@assistia.ca'],
    ['pin', 'Visit any time', '4168 Finch Ave E PH05, Scarborough, ON M1S 5H6'],
  ]
  return (
    <>
      <PageHero variant="office" title="Get in Touch with Assistia" subtitle="Have a project in mind? We’d love to hear from you!" />
      <section className="section">
        <div className="container contact-grid">
          <form className="cform" onSubmit={submit} data-r>
            <h3 className="cform-title">Send us a message</h3>
            <input placeholder="Your Name" value={f.name} onChange={on('name')} required />
            <input placeholder="Phone Number" value={f.phone} onChange={on('phone')} />
            <input type="email" placeholder="Email Address" value={f.email} onChange={on('email')} required />
            <input placeholder="Subject" value={f.subject} onChange={on('subject')} />
            <textarea placeholder="Write a Message" rows="7" value={f.message} onChange={on('message')} required />
            <div><button className="btn" type="submit">Send a Message <Icon name="arrow" size={18} /></button>{sent && <span className="thanks-d"> Opening your email app…</span>}</div>
          </form>
          <aside className="offices" data-r>
            <h3>Our Offices</h3>
            {info.map(([ic, k, v, href]) => (
              <div className="office-row" key={k}>
                <span className="oi"><Icon name={ic} size={18} /></span>
                <div><small>{k}</small>{href ? <a href={href}><strong>{v}</strong></a> : <strong>{v}</strong>}</div>
              </div>
            ))}
          </aside>
        </div>
        <div className="container map-wrap" data-r>
          <iframe title="Assistia office map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=4168%20Finch%20Ave%20E%2C%20Scarborough%2C%20ON&output=embed" />
        </div>
      </section>
    </>
  )
}
