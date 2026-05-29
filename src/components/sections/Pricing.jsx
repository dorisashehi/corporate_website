import { BiCheck, BiX } from 'react-icons/bi';
import SectionTitle from '../SectionTitle';

const plans = [
  {
    name: 'Free Plan',
    price: 0,
    featured: false,
    features: [
      { text: 'Quam adipiscing vitae proin', included: true },
      { text: 'Nec feugiat nisl pretium', included: true },
      { text: 'Nulla at volutpat diam uteera', included: false },
      { text: 'Pharetra massa massa ultricies', included: false },
      { text: 'Massa ultricies mi quis hendrerit', included: false },
    ],
  },
  {
    name: 'Business Plan',
    price: 29,
    featured: true,
    features: [
      { text: 'Quam adipiscing vitae proin', included: true },
      { text: 'Nec feugiat nisl pretium', included: true },
      { text: 'Nulla at volutpat diam uteera', included: true },
      { text: 'Pharetra massa massa ultricies', included: true },
      { text: 'Massa ultricies mi quis hendrerit', included: false },
    ],
  },
  {
    name: 'Developer Plan',
    price: 49,
    featured: false,
    features: [
      { text: 'Quam adipiscing vitae proin', included: true },
      { text: 'Nec feugiat nisl pretium', included: true },
      { text: 'Nulla at volutpat diam uteera', included: true },
      { text: 'Pharetra massa massa ultricies', included: true },
      { text: 'Massa ultricies mi quis hendrerit', included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20">
      <SectionTitle
        title="Pricing"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 items-end">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                plan.featured ? 'ring-2 ring-arsha-accent scale-[1.02] md:-mt-4 md:mb-4 z-10' : ''
              }`}
            >
              {plan.featured && <div className="h-1 bg-arsha-accent" />}
              <div className="p-8 text-center">
                <h3 className="font-heading text-xl font-bold text-arsha-heading mb-4">
                  {plan.name}
                </h3>
                <h4 className="text-4xl font-bold text-arsha-heading mb-1">
                  <sup className="text-lg align-top">$</sup>
                  {plan.price}
                  <span className="text-sm font-normal text-arsha-text"> / month</span>
                </h4>
              </div>
              <ul className="list-none m-0 px-8 pb-8 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-center gap-2 text-sm ${
                      f.included ? '' : 'text-gray-400 line-through'
                    }`}
                  >
                    {f.included ? (
                      <BiCheck className="text-arsha-accent shrink-0" />
                    ) : (
                      <BiX className="text-gray-400 shrink-0" />
                    )}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <div className="px-8 pb-8 text-center">
                <a
                  href="#"
                  className={`inline-block px-8 py-2.5 rounded-full font-medium transition-colors ${
                    plan.featured
                      ? 'bg-arsha-accent text-white hover:bg-[#31a9e1]'
                      : 'border-2 border-arsha-accent text-arsha-accent hover:bg-arsha-accent hover:text-white'
                  }`}
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
