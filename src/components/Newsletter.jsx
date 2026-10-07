import { useState } from 'react'
import Icon from './Icon.jsx'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    // TODO: connect to your email provider (Klaviyo, Mailchimp, etc.)
    setDone(true)
    setEmail('')
  }
  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div>
          <span className="eyebrow light">Subscribe to newsletter</span>
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter to get our daily latest news and updates.</p>
        </div>
        <form onSubmit={submit}>
          <input type="email" required placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email address" />
          <button className="btn btn-light" type="submit">Subscribe <Icon name="arrow" size={16} /></button>
          {done && <p className="thanks" role="status">Thanks for subscribing!</p>}
        </form>
      </div>
    </section>
  )
}
