import ParallaxSection from '../ParallaxSection';
import AnimateIn from '../AnimateIn';

/** Parallax image band between sections */
export default function ParallaxBreak({ image, quote, subline }) {
  return (
    <ParallaxSection image={image} overlayClass="bg-brand-navy/78" padding="py-20 md:py-28" speed={0.35}>
      <AnimateIn className="max-w-3xl mx-auto text-center text-white">
        {quote && (
          <p className="text-2xl md:text-3xl font-heading font-semibold leading-snug mb-4">{quote}</p>
        )}
        {subline && <p className="text-lg text-white/85 m-0">{subline}</p>}
      </AnimateIn>
    </ParallaxSection>
  );
}
