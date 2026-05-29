import { images } from '../utils/images';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-0">
      <div className="container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="inline-block bg-white rounded-lg px-4 py-3 mb-4">
              <img src={images.logo} alt="InfoManage" className="h-10 w-auto" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              Structured IT management for businesses that depend on technology. Serving
              organizations since 1995.
            </p>
            <p className="text-sm mt-4 text-white/70 italic">Keeps you... Up and Running!®</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
            <ul className="list-none m-0 p-0 space-y-2 text-sm text-white/80">
              <li>
                <a href="#how-we-manage" className="hover:text-white transition-colors">
                  Fix • Maintain • Enhance
                </a>
              </li>
              <li>
                <a href="#operations" className="hover:text-white transition-colors">
                  IT Operations
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">
                  Service Plans
                </a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-white transition-colors">
                  Strategic Advisory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="list-none m-0 p-0 space-y-2 text-sm text-white/80">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Schedule Consultation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  IT Risk Assessment
                </a>
              </li>
              <li>
                <a href="mailto:info@infomanage.com" className="hover:text-white transition-colors">
                  info@infomanage.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-white/60">
          <p className="m-0">
            © {new Date().getFullYear()} InfoManage. All rights reserved. Founded 1995.
          </p>
        </div>
      </div>
    </footer>
  );
}
