import { BiMap, BiBuilding, BiCalendar, BiSearch, BiDollar } from 'react-icons/bi';
import AnimateIn from '../AnimateIn';
import SectionTitle from '../SectionTitle';
import { images } from '../../utils/images';

const advisory = [
  { icon: BiMap, text: 'Technology roadmaps' },
  { icon: BiBuilding, text: 'Infrastructure architecture' },
  { icon: BiCalendar, text: 'Lifecycle planning' },
  { icon: BiSearch, text: 'Vendor selection and evaluation' },
  { icon: BiDollar, text: 'Capacity and budget planning' },
];

export default function StrategicPartnership() {
  return (
    <section id="partnership" className="py-20 md:py-28 overflow-hidden">
      <SectionTitle
        title="Strategic Technology Partnership"
        subtitle="Beyond daily operations, InfoManage helps organizations plan and evolve their technology environments."
      />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="left" className="flex justify-center">
            <img
              src={images.newsletterFigure}
              alt="Strategic IT advisory"
              className="max-w-md w-full h-auto"
            />
          </AnimateIn>
          <div>
            <AnimateIn delay={100}>
              <p className="text-lg text-brand-muted mb-8 leading-relaxed">
                Through ongoing advisory and strategic planning, we assist with:
              </p>
            </AnimateIn>
            <ul className="grid sm:grid-cols-2 gap-4 list-none m-0 p-0 mb-8">
              {advisory.map(({ icon: Icon, text }, i) => (
                <AnimateIn key={text} delay={150 + i * 60}>
                  <li className="flex items-center gap-3 p-4 bg-brand-light rounded-xl h-full">
                    <span className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-navy text-white shrink-0">
                      <Icon className="text-xl" />
                    </span>
                    <span className="font-semibold text-brand-navy text-sm">{text}</span>
                  </li>
                </AnimateIn>
              ))}
            </ul>
            <AnimateIn delay={500}>
              <p className="text-brand-muted leading-relaxed">
                This strategic guidance ensures technology decisions support long-term business goals.
              </p>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
