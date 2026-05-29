import AnimateIn from '../AnimateIn';
import SectionTitle from '../SectionTitle';

const industries = [
  'Financial services',
  'Legal',
  'Healthcare',
  'Media and advertising',
  'Real estate',
  'Manufacturing',
  'Non-profit organizations',
];

export default function Established() {
  return (
    <section id="established" className="py-20 md:py-28 bg-brand-light">
      <SectionTitle title="Established & Trusted" />
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <AnimateIn>
          <p className="text-5xl md:text-6xl font-heading font-bold text-brand-navy mb-2">1995</p>
          <p className="text-sm uppercase tracking-widest text-brand-muted mb-8">Founded</p>
        </AnimateIn>
        <AnimateIn delay={100}>
          <p className="text-lg text-brand-text leading-relaxed mb-6">
            Founded in 1995, InfoManage has supported organizations across a wide range of industries
            that rely heavily on technology to operate and grow.
          </p>
          <p className="text-brand-muted leading-relaxed mb-12">
            Our long-term client partnerships are built on operational discipline, consistent service
            delivery, and a commitment to maintaining reliable technology environments.
          </p>
        </AnimateIn>
        <AnimateIn delay={200}>
          <h3 className="font-heading text-xl font-bold text-brand-navy mb-6">
            Industries served include:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 bg-white rounded-full text-brand-navy font-medium text-sm shadow-sm border border-brand-gray/50"
              >
                {industry}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
