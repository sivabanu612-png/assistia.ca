import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { nav } from '../data.js'
import Icon from './Icon.jsx'

export const socials = [['Facebook', 'https://www.facebook.com/assistia/', 'f'], ['Twitter', 'https://twitter.com/assistia/', 'X'], ['Instagram', 'https://www.instagram.com/assistia/', 'in'], ['Pinterest', 'https://www.pinterest.com/assistia/', 'P']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${stuck ? 'stuck' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href="mailto:hello@assistia.ca"><Icon name="mail" size={14} /> hello@assistia.ca</a>
            <a href="tel:+16478566864"><Icon name="phone" size={14} /> +1 (647) 856-6864</a>
          </div>
          <div className="social">
            {socials.map(([n, u, l]) => <a key={n} href={u} target="_blank" rel="noreferrer" aria-label={n}>{l}</a>)}
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="logo"><img src="/img/logo-main.png" alt="Assistia Canada" /></Link>
          <nav className={`menu ${open ? 'open' : ''}`}>
            {nav.map((n) => <NavLink key={n.label} to={n.to} end onClick={() => setOpen(false)}>{n.label}</NavLink>)}
            <Link className="btn btn-sm" to="/contact" onClick={() => setOpen(false)}>Inquire Now <Icon name="arrow" size={16} /></Link>
          </nav>
          <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} size={26} /></button>
        </div>
      </div>
    </header>
  )
}
