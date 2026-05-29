import { BiCog, BiTrendingUp, BiMap } from 'react-icons/bi';
import AnimateIn from '../AnimateIn';
import SectionTitle from '../SectionTitle';
import { images } from '../../utils/images';

const phases = [
  {
    label: 'Operate',
    icon: BiCog,
    desc: 'We manage daily IT operations, ensuring systems remain reliable and users stay productive.',
  },
  {
    label: 'Improve',
    icon: BiTrendingUp,
    desc: 'We continuously enhance infrastructure through maintenance, optimization, and security improvements.',
  },
  {
    label: 'Plan',
    icon: BiMap,
    desc: 'We guide long-term technology decisions through strategic planning and advisory.',
  },
];

export default function ClientPartnership() {
  return (
    <section id="how-we-work" className="py-20 md:py-28 bg-brand-navy text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.teamCollaboration})` }}
      />
      <div className="absolute inset-0 bg-brand-navy/92" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="How We Work With Clients"
          subtitle="InfoManage works as a long-term operational partner, managing technology environments while helping organizations plan and improve their infrastructure over time."
          light
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {phases.map(({ label, icon: Icon, desc }, i) => (
            <AnimateIn key={label} delay={i * 100}>
              <div className="text-center p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm h-full">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-white text-brand-navy">
                  <Icon className="text-3xl" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{label}</h3>
                <p className="text-white/85 leading-relaxed m-0">{desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={350}>
          <p className="text-center text-white/80 max-w-2xl mx-auto leading-relaxed">
            This partnership approach allows organizations to benefit from both operational management
            and strategic technology leadership.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
