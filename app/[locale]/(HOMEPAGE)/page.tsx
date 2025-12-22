import Hero from './components/Hero'
import Intro from './components/Intro'
import Metrics from './components/Metrics'
import Categories from './components/Categories'
import ChairShowcase from './components/ChairShowcase'
import ChairShowcase2 from './components/ChairShowcase2'
import ChairsSection from './components/ChairSection/ChairSection'



export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Metrics />
      <Categories />
      <ChairShowcase />
      <ChairShowcase2 />
      <ChairsSection />
    </main>
  )
}