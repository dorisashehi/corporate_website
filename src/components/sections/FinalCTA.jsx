export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
        }}
      />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
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
      </div>
    </section>
  );
}
