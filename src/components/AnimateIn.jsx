import { useInView } from '../hooks/useParallax';

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const [setRef, inView] = useInView(0.12);

  const transforms = {
    up: 'translateY(40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    none: 'none',
  };

  return (
    <div
      ref={setRef}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : transforms[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
