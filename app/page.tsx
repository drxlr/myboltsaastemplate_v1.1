import { HeroSection } from '@/components/hero-section';
import { Features } from '@/components/features';
import { Pricing } from '@/components/pricing';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Pricing />
    </main>
  );
}