import { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { img } from '../utils/images';

const navLinks = [
  { href: '#outsourced-it', label: 'Services' },
  { href: '#how-we-manage', label: 'How We Manage IT' },
  { href: '#operations', label: 'Operations' },
  { href: '#plans', label: 'Plans' },
  { href: '#established', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[997] transition-all duration-300 ${
        scrolled ? 'bg-brand-navy shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        <a href="#hero" className="shrink-0">
          <img
            src={img('infomanage-logo.png')}
            alt="InfoManage — Keeps you... Up and Running!"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1 font-nav text-[15px] list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-4 py-2 font-medium transition-colors ${
                    scrolled
                      ? 'text-white/90 hover:text-white'
                      : 'text-brand-navy hover:text-brand-accent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className={`hidden lg:inline-block text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shrink-0 ${
            scrolled
              ? 'bg-white text-brand-navy hover:bg-brand-light'
              : 'bg-brand-navy text-white hover:bg-brand-navy-light'
          }`}
        >
          Schedule a Consultation
        </a>

        <button
          type="button"
          className={`lg:hidden text-3xl ${scrolled ? 'text-white' : 'text-brand-navy'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <ul className="list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-5 py-3 text-brand-navy border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-4">
            <a
              href="#contact"
              className="block text-center bg-brand-navy text-white py-3 rounded-full font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
