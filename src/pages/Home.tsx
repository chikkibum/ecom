import { Hero } from "@/components/Hero"
import {LatestCollection} from "@/components/LatestCollection"
import { BestSeller } from "@/components/BestSeller"
import OurPolicy from "@/components/OurPolicy"
export const Home = () => {
  return (
      <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">

      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
    </div>
  )
}
