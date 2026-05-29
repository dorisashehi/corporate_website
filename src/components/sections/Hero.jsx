import AnimateIn from '../AnimateIn';
import { images } from '../../utils/images';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-brand-navy text-white pt-28 pb-16 md:pt-32 md:pb-20 min-h-[85vh] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.technologyGlobal})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/75" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <AnimateIn direction="left">
            <p className="text-brand-gray text-sm font-semibold tracking-widest uppercase mb-4">
              Serving organizations since 1995
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3rem] font-bold leading-tight mb-6 text-white">
              Structured IT Management for Businesses That Depend on Technology
            </h1>
            <p className="text-xl text-white/95 leading-relaxed mb-4 font-light">
              InfoManage manages day-to-day IT operations while helping organizations plan, secure,
              and scale their technology environments.
            </p>
            <p className="text-base text-white/80 leading-relaxed mb-8 max-w-xl">
              Unlimited operational support, proactive monitoring, and strategic technology guidance
              delivered through a governance-driven service model.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-brand-navy px-8 py-3.5 rounded-full font-semibold hover:bg-brand-light transition-colors"
              >
                Schedule a Consultation
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Request an IT Risk Assessment
              </a>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" delay={150} className="order-first lg:order-last flex justify-center">
            <img
              src={images.heroIllustration}
              alt="IT management and business technology"
              className="max-w-full h-auto max-h-[420px] hero-illustration-animated"
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
