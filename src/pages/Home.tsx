import { Hero } from "@/components/Hero"
import { LatestCollection } from "@/components/LatestCollection"
import { BestSeller } from "@/components/BestSeller"
import OurPolicy from "@/components/OurPolicy"
import { SocialMedia } from "@/components/SocialMedia"
import { HeroTwo } from "@/components/HeroTwo"
import { Brands } from "@/components/Brands"

export const Home = () => {



  return (
    <div className="container  px-8 md:px-2 mt-2 md:mt-4">
      <HeroTwo />
      <Brands />
      <LatestCollection />
      <Hero />
      <BestSeller />
      <OurPolicy />
      <SocialMedia />
    </div>
  )
}
