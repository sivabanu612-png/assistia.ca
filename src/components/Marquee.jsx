import { marquee } from '../data.js'
export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">{items.map((m, i) => <span key={i}>{m}<i /></span>)}</div>
    </div>
  )
}
