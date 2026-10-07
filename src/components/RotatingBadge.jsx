import { img } from '../utils/img.js'
import { useId } from 'react'
// Circumference of the text path (r = 78) so the text fills the ring exactly once.
const CIRC = 2 * Math.PI * 78
export default function RotatingBadge({ text = 'ASSISTIA CANADA • ', size = 130, spin = true }) {
  const id = 'rb' + useId().replace(/:/g, '')
  return (
    <div className="badge" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className={spin ? 'spin' : ''}>
        <defs><path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
        <text fill="#fff" fontSize="22" fontWeight="700">
          <textPath href={'#' + id} textLength={CIRC - 6} lengthAdjust="spacing">{text}</textPath>
        </text>
      </svg>
      <img className="pin" src={img('logo-white-2.png')} alt="" style={{ height: size * 0.3 }} />
    </div>
  )
}
