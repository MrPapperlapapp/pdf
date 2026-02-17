import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Features } from '@/components/Features/Features';
import { Testimonial } from '@/components/Testimonial/Testimonial';
import { Steps } from '@/components/Steps/Steps';
import { WhyUs } from '@/components/WhyUs/WhyUs';
import { TrustSection } from '@/components/TrustSection/TrustSection';
import { FAQ } from '@/components/FAQ/FAQ';
import { CTA } from '@/components/CTA/CTA';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Testimonial />
      <Steps />
      <WhyUs />
      <TrustSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
