import {
  BiMap,
  BiBuilding,
  BiCalendar,
  BiSearch,
  BiDollar,
} from 'react-icons/bi';
import SectionTitle from '../SectionTitle';

const advisory = [
  { icon: BiMap, text: 'Technology roadmaps' },
  { icon: BiBuilding, text: 'Infrastructure architecture' },
  { icon: BiCalendar, text: 'Lifecycle planning' },
  { icon: BiSearch, text: 'Vendor selection and evaluation' },
  { icon: BiDollar, text: 'Capacity and budget planning' },
];

export default function StrategicPartnership() {
  return (
    <section id="partnership" className="py-20 md:py-28">
      <SectionTitle
        title="Strategic Technology Partnership"
        subtitle="Beyond daily operations, InfoManage helps organizations plan and evolve their technology environments."
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-center text-lg text-brand-muted mb-10 leading-relaxed">
          Through ongoing advisory and strategic planning, we assist with:
        </p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0 mb-10">
          {advisory.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex flex-col items-center text-center p-6 bg-brand-light rounded-xl"
            >
              <span className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-navy text-white mb-4">
                <Icon className="text-2xl" />
              </span>
              <span className="font-semibold text-brand-navy">{text}</span>
            </li>
          ))}
        </ul>
        <p className="text-center text-brand-muted leading-relaxed">
          This strategic guidance ensures technology decisions support long-term business goals.
        </p>
      </div>
    </section>
  );
}
