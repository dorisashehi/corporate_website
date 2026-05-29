import { BiPulse, BiBox, BiBroadcast, BiCalendarWeek } from 'react-icons/bi';
import SectionTitle from '../SectionTitle';

const services = [
  {
    icon: BiPulse,
    title: 'Lorem Ipsum',
    desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
  },
  {
    icon: BiBox,
    title: 'Sed ut perspici',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  },
  {
    icon: BiCalendarWeek,
    title: 'Magni Dolores',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    icon: BiBroadcast,
    title: 'Nemo Enim',
    desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-arsha-light py-16 md:py-20">
      <SectionTitle
        title="Services"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-8 rounded relative shadow-sm hover:shadow-md transition-shadow group border border-transparent hover:border-arsha-accent/30"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded bg-arsha-accent/10 mb-6 group-hover:bg-arsha-accent transition-colors">
                <Icon className="text-3xl text-arsha-accent group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-heading text-lg font-bold text-arsha-heading mb-3">
                <a href="#" className="hover:text-arsha-accent transition-colors">
                  {title}
                </a>
              </h4>
              <p className="text-sm m-0">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
