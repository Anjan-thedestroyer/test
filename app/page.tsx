
import { FeaturedProperties } from '@/components/blocks/featured-properties'
import { HeroBanner } from '@/components/blocks/hero-banner'
import { HowItWorks } from '@/components/blocks/how-it-works'
import { Manifesto } from '@/components/blocks/manifesto'
import { VisionMission } from '@/components/blocks/vision-mission'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <HeroBanner />
      <FeaturedProperties />
      <HowItWorks />
      <Manifesto />
      <VisionMission />
    </div>
  )
}
