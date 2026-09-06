import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Name from './components/Name'
import Thesis from './components/Thesis'
import Model from './components/Model'
import WhatWeAre from './components/WhatWeAre'
import Lines from './components/Lines'
import Positioning from './components/Positioning'
import Roadmap from './components/Roadmap'
import Principles from './components/Principles'
import Join from './components/Join'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Name />
        <Thesis />
        <Model />
        <WhatWeAre />
        <Lines />
        <Positioning />
        <Roadmap />
        <Principles />
        <Join />
      </main>
      <Footer />
    </>
  )
}
