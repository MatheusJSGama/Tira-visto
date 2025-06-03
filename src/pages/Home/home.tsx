import { ServicesPackages } from './components/services-packages';
import { Hero } from './components/hero';
import { TopDestinations } from './components/top-destinattions';
import { WhyChooseUs } from './components/why-choose-us';

export function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <Hero />
      <WhyChooseUs />
      <TopDestinations />
      <ServicesPackages />
    </div>
  );
}
