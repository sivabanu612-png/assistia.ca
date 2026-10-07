import { useState } from 'react'
import Icon from './Icon.jsx'
export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {open && (
        <div className="chat-panel">
          <header>Chat with Assistia <button onClick={() => setOpen(false)} aria-label="Close"><Icon name="close" size={18} /></button></header>
          <p>Hi 👋 Have a project in mind? Leave a message and we’ll reply shortly.</p>
          <a className="btn btn-sm" href="mailto:hello@assistia.ca"><Icon name="mail" size={16} /> Email us</a>
          <a className="btn btn-sm btn-dark" href="tel:+16478566864"><Icon name="phone" size={16} /> Call us</a>
        </div>
      )}
      <button className="chat-pill" onClick={() => setOpen(!open)}><Icon name="chat" size={18} /> Send us a message</button>
    </>
  )
}
