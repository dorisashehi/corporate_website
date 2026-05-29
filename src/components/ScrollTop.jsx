import { useEffect, useState } from 'react';
import { BiChevronUp } from 'react-icons/bi';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#hero"
      className="fixed bottom-4 right-4 z-[999] w-11 h-11 flex items-center justify-center bg-brand-navy text-white rounded-full shadow-lg hover:bg-brand-navy-light transition-colors"
      aria-label="Scroll to top"
    >
      <BiChevronUp className="text-2xl" />
    </a>
  );
}
