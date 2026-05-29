import { img } from '../../utils/images';

export default function CallToAction() {
  return (
    <section id="call-to-action" className="relative py-16 md:py-20 overflow-hidden">
      <img
        src={img('bg/bg-8.webp')}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-arsha-dark/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid xl:grid-cols-12 gap-6 items-center">
          <div className="xl:col-span-9 text-center xl:text-left">
            <h3 className="font-heading text-2xl md:text-[28px] font-bold text-white mb-3">
              Call To Action
            </h3>
            <p className="text-white/90 m-0">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="xl:col-span-3 text-center">
            <a
              href="#"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-arsha-dark transition-colors"
            >
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
