import Footer from "@/components/footer/footer";
import CTA from "@/components/landing/cta";
import FAQ from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";

export default function Page() {
  return (
    <main >
      <div className='main'>
        <div className='gradient' />
      </div>
      <Hero />
      <Features />
      <FAQ/>
      <CTA/>
      <Footer/>
    </main>
  );
}