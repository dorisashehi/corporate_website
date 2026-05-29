export default function Hero() {
  return (
    <section id="hero" className="relative bg-brand-navy text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-dark opacity-95" />
      <div
        className="absolute top-0 right-0 w-2/3 h-full opacity-10"
        style={{
          background:
            'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <p className="text-brand-gray/90 text-sm font-semibold tracking-widest uppercase mb-4">
            Serving organizations since 1995
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6 text-white">
            Structured IT Management for Businesses That Depend on Technology
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-4 font-light">
            InfoManage manages day-to-day IT operations while helping organizations plan, secure,
            and scale their technology environments.
          </p>
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-3xl">
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
        </div>
      </div>
    </section>
  );
}
