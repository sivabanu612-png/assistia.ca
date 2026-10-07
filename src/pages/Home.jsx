import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Banner from '../components/Banner.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Process from '../components/Process.jsx'
import Growth from '../components/Growth.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Features from '../components/Features.jsx'
import Faq from '../components/Faq.jsx'
import CtaBand from '../components/CtaBand.jsx'
export default function Home() {
  return (
    <>
      <Hero /><Marquee /><About /><Services /><Banner /><Process /><Growth /><WhyUs /><Features /><Faq />
      <section className="cta-wrap"><CtaBand kicker="Ready to grow online?" title="Let’s build a website that turns visitors into customers." btn="Book a Free Consultation" /></section>
    </>
  )
}
