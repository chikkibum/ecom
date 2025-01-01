// @ts-nocheck

// import {Hero} from '../components/Hero'
import Mission from '../components/Mission'
import Team from '../components/Team'
import Timeline from '../components/Timeline'
import {Contact} from '../pages/Contact'

export function About() {
  return (
    <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">

    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* <Hero /> */}
      <Mission />
      <Team />
      <Timeline />
      <Contact />
    </main>
    </div>
  )
}

