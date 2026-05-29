import { FixedParallaxCTA } from '../ParallaxSection';
import AnimateIn from '../AnimateIn';
import { images } from '../../utils/images';

export default function FinalCTA() {
  return (
    <FixedParallaxCTA image={images.parallaxCta} overlayClass="bg-brand-navy/88">
      <AnimateIn className="text-center max-w-3xl mx-auto text-white">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Ready to Improve Your IT Operations?
        </h2>
        <p className="text-lg text-white/90 leading-relaxed mb-10">
          Schedule a consultation to discuss your environment and learn how structured IT management
          can improve reliability, security, and operational efficiency.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-white text-brand-navy px-8 py-3.5 rounded-full font-semibold hover:bg-brand-light transition-colors"
          >
            Schedule Consultation
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Contact InfoManage
          </a>
        </div>
      </AnimateIn>
    </FixedParallaxCTA>
  );
}
