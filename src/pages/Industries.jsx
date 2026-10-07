import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Icon from '../components/Icon.jsx'
import { SiteMock } from '../components/Art.jsx'
import { industries } from '../data.js'
const tabs = ['All', 'Web Design & Development', 'Digital Marketing']
export default function Industries() {
  const [tab, setTab] = useState('All')
  const list = industries.filter((i) => tab === 'All' || i.cat === tab)
  return (
    <>
      <PageHero title="Industries We Work With" subtitle="600+ Websites. 10+ Services. Endless Impact." />
      <section className="section">
        <div className="container">
          <div className="filters" data-r>
            {tabs.map((t) => (
              <button key={t} className={tab === t ? 'on' : ''} onClick={() => setTab(t)}>
                {t}{t === 'All' && <sup>{industries.length}</sup>}
              </button>
            ))}
          </div>
          <div className="grid grid-3 ind-grid">
            {list.map((i) => (
              <article className="ind-card" key={i.title}>
                <div className="ind-img">
                  <SiteMock art={i.art} />
                  <button aria-label={`Open ${i.title}`}><Icon name="arrow" size={18} /></button>
                </div>
                <div className="ind-body"><span className="cat">{i.cat}</span><h3>{i.title}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand kicker="Industry Not Listed?" title="No problem — our flexible approach works across sectors." icon="users" btn="Let's Talk" />
      <div style={{ height: 70 }} />
    </>
  )
}
