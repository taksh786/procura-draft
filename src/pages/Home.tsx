import ArvindHero from '../components/ArvindHero';
import ServiceSection from '../components/ServiceSection';
import BentoFeatures from '../components/BentoFeatures';
import VideoSection from '../components/VideoSection';
import LogoMarquee from '../components/LogoMarquee';

export default function Home() {
  return (
    <main>
      <ArvindHero />
      <ServiceSection />
      <BentoFeatures />
      <VideoSection />
      <LogoMarquee />
    </main>
  );
}
