// Inline SVG illustrations (theme colours only) so no extra image files are required.
const C = { p: '#085ef8', l: '#4f8cff', s: '#dbe7ff', n: '#12196b', d: '#0a1b3c', w: '#fff', g: '#e8eeff' }

export function SiteMock({ art = 'services' }) {
  const id = 'sm-' + art
  return (
    <svg viewBox="0 0 400 250" className="sitemock" role="img" aria-label={`${art} website preview`}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.p} /><stop offset="1" stopColor={C.n} />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill={C.g} />
      <rect x="28" y="22" width="344" height="216" rx="12" fill={C.w} />
      <rect x="28" y="22" width="344" height="26" rx="12" fill="#f3f6ff" />
      <rect x="28" y="38" width="344" height="10" fill="#f3f6ff" />
      {[44, 58, 72].map((x) => <circle key={x} cx={x} cy="35" r="4" fill="#c5d3ee" />)}
      <rect x="130" y="29" width="140" height="12" rx="6" fill="#e3eaf8" />
      {art === 'restaurant' && <>
        <rect x="48" y="66" width="60" height="8" rx="4" fill={C.p} opacity=".25" />
        <rect x="48" y="88" width="120" height="12" rx="6" fill={C.d} />
        <rect x="48" y="108" width="96" height="12" rx="6" fill={C.d} />
        <rect x="48" y="134" width="130" height="6" rx="3" fill="#cbd5e6" />
        <rect x="48" y="146" width="110" height="6" rx="3" fill="#cbd5e6" />
        <rect x="48" y="172" width="74" height="26" rx="13" fill={C.p} />
        <circle cx="290" cy="148" r="70" fill={`url(#${id})`} />
        <circle cx="290" cy="148" r="52" fill={C.w} opacity=".95" />
        <circle cx="290" cy="148" r="36" fill={C.s} />
        <circle cx="278" cy="138" r="9" fill={C.l} /><circle cx="302" cy="150" r="12" fill={C.p} /><circle cx="282" cy="162" r="7" fill={C.n} />
        <path d="M232 82v34M226 82v14a6 6 0 0012 0V82" stroke={C.n} strokeWidth="3" fill="none" strokeLinecap="round" />
      </>}
      {art === 'shop' && <>
        <rect x="48" y="62" width="90" height="10" rx="5" fill={C.d} />
        <rect x="316" y="60" width="38" height="14" rx="7" fill={C.p} />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${48 + i * 108} 88)`}>
            <rect width="96" height="96" rx="10" fill={[C.s, C.g, C.s][i]} />
            <rect x="22" y="22" width="52" height="52" rx="10" fill={[C.p, C.l, C.n][i]} />
            <rect y="104" width="64" height="7" rx="3.5" fill={C.d} />
            <rect y="118" width="38" height="7" rx="3.5" fill={C.p} opacity=".5" />
            <circle cx="84" cy="114" r="10" fill={C.p} />
          </g>
        ))}
      </>}
      {art === 'services' && <>
        <rect x="48" y="66" width="70" height="8" rx="4" fill={C.p} opacity=".25" />
        <rect x="48" y="88" width="150" height="12" rx="6" fill={C.d} />
        <rect x="48" y="108" width="110" height="12" rx="6" fill={C.d} />
        <rect x="48" y="134" width="140" height="6" rx="3" fill="#cbd5e6" />
        <rect x="48" y="146" width="120" height="6" rx="3" fill="#cbd5e6" />
        <rect x="48" y="172" width="74" height="26" rx="13" fill={C.p} />
        <rect x="132" y="172" width="74" height="26" rx="13" fill="none" stroke={C.p} strokeWidth="2" />
        <rect x="236" y="70" width="118" height="140" rx="12" fill={`url(#${id})`} />
        <path d="M252 180l24-28 20 16 30-44" stroke={C.w} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="326" cy="124" r="5" fill={C.w} />
        <rect x="252" y="88" width="50" height="6" rx="3" fill={C.w} opacity=".5" />
      </>}
      {art === 'signage' && <>
        <rect x="48" y="62" width="196" height="132" rx="8" fill={C.d} />
        <rect x="60" y="74" width="80" height="10" rx="5" fill={C.l} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}><rect x="60" y={98 + i * 22} width={96 - i * 6} height="7" rx="3.5" fill={C.w} opacity=".8" /><rect x="190" y={98 + i * 22} width="38" height="7" rx="3.5" fill={C.p} /></g>
        ))}
        <rect x="262" y="62" width="92" height="62" rx="8" fill={C.n} />
        <circle cx="308" cy="93" r="18" fill={C.p} /><path d="M302 85l14 8-14 8z" fill={C.w} />
        <rect x="262" y="132" width="92" height="62" rx="8" fill={C.p} />
        <rect x="274" y="146" width="50" height="8" rx="4" fill={C.w} /><rect x="274" y="162" width="68" height="6" rx="3" fill={C.w} opacity=".6" />
        <rect x="140" y="198" width="60" height="6" rx="3" fill="#cbd5e6" />
      </>}
    </svg>
  )
}

export function Skyline() {
  return (
    <svg className="skyline" viewBox="0 0 1200 160" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <g fill="#fff" opacity=".07">
        <rect x="0" y="100" width="70" height="60" /><rect x="80" y="70" width="50" height="90" /><rect x="140" y="90" width="60" height="70" />
        <rect x="210" y="50" width="56" height="110" /><rect x="276" y="84" width="70" height="76" /><rect x="356" y="62" width="48" height="98" />
        <rect x="414" y="96" width="80" height="64" />
        <path d="M600 160V70h-6l6-14 6 14h-6zM592 160V80h16v80z" />
        <rect x="596" y="20" width="8" height="50" /><ellipse cx="600" cy="60" rx="26" ry="9" /><circle cx="600" cy="14" r="3" />
        <rect x="660" y="76" width="64" height="84" /><rect x="734" y="48" width="52" height="112" /><rect x="796" y="90" width="76" height="70" />
        <rect x="882" y="64" width="50" height="96" /><rect x="942" y="100" width="70" height="60" /><rect x="1022" y="72" width="56" height="88" />
        <rect x="1088" y="94" width="112" height="66" />
      </g>
    </svg>
  )
}
