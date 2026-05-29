import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-linked parallax background (works for multiple sections on one page).
 * Arsha demo uses fixed bg for a single CTA; we use translateY for reliability.
 */
export default function ParallaxSection({
  image,
  imageAlt = '',
  overlayClass = 'bg-brand-navy/85',
  className = '',
  children,
  padding = 'py-24 md:py-32',
  speed = 0.25,
}) {
  const sectionRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = rect.top / window.innerHeight;
      setOffsetY(progress * 120 * speed);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden flex items-center ${padding} ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="absolute left-0 w-full h-[130%] object-cover -top-[15%] will-change-transform"
          style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.05)` }}
          aria-hidden={!imageAlt}
        />
      </div>
      <div className={`absolute inset-0 z-[1] ${overlayClass}`} />
      <div className="container mx-auto px-4 relative z-[2] w-full">{children}</div>
    </section>
  );
}

/** Single-section Arsha-style fixed background (use once per page) */
export function FixedParallaxCTA({
  image,
  overlayClass = 'bg-brand-navy/85',
  className = '',
  children,
  padding = 'py-24 md:py-32',
}) {
  return (
    <section
      className={`parallax-section-wrap relative flex items-center ${padding} ${className}`}
      style={{ clipPath: 'inset(0)' }}
    >
      <img src={image} alt="" className="parallax-section-bg" aria-hidden />
      <div className={`absolute inset-0 z-[2] ${overlayClass}`} />
      <div className="container mx-auto px-4 relative z-[3] w-full">{children}</div>
    </section>
  );
}
