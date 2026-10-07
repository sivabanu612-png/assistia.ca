import { Skyline } from './Art.jsx'
export default function PageHero({ title, subtitle, variant = 'lib' }) {
  return (
    <section className={`page-hero ${variant}`}>
      <div className="ph-word" aria-hidden>Assistia</div>
      <Skyline />
      <div className="container center">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}
