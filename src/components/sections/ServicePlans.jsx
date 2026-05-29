import AnimateIn from '../AnimateIn';
import SectionTitle from '../SectionTitle';

const plans = [
  {
    name: 'Essentials',
    desc: 'Baseline monitoring and patching for organizations that require foundational infrastructure oversight.',
    featured: false,
  },
  {
    name: 'Professional',
    desc: 'Proactive IT management with unlimited remote support and enhanced operational coverage.',
    featured: true,
  },
  {
    name: 'Enterprise',
    desc: 'Maximum service coverage including 24×7 support and expanded on-site service availability.',
    featured: false,
  },
];

export default function ServicePlans() {
  return (
    <section id="plans" className="py-20 md:py-28 bg-brand-light">
      <SectionTitle
        title="Flexible Service Plans"
        subtitle="Organizations have different operational needs, risk tolerances, and support requirements. InfoManage offers structured service plans designed to provide the appropriate level of coverage for each environment."
      />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, i) => (
            <AnimateIn key={plan.name} delay={i * 100}>
              <div
                className={`bg-white rounded-2xl p-8 shadow-md flex flex-col h-full ${
                  plan.featured ? 'ring-2 ring-brand-navy md:-mt-2 md:mb-2' : ''
                }`}
              >
                {plan.featured && (
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-bold text-brand-navy mb-4">{plan.name}</h3>
                <p className="text-brand-muted leading-relaxed flex-1 mb-8">{plan.desc}</p>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full font-semibold transition-colors ${
                    plan.featured
                      ? 'bg-brand-navy text-white hover:bg-brand-navy-light'
                      : 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
                  }`}
                >
                  Learn More
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={350}>
          <p className="text-center text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Service plans can be tailored using per-user, per-device, or hybrid pricing models
            depending on the structure of your environment.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
