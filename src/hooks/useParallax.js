import { useEffect, useState } from 'react';

/** Subtle translateY based on scroll position relative to viewport */
export function useParallax(speed = 0.35) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * speed);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return offset;
}

/** Element enters viewport — for fade/slide animations */
export function useInView(threshold = 0.15) {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, inView];
}
