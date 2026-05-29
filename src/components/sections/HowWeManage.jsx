import {
  BiTrendingUp,
  BiWrench,
  BiShield,
  BiCheckCircle,
} from 'react-icons/bi';
import SectionTitle from '../SectionTitle';

const pillars = [
  {
    id: 'fix',
    label: 'Fix',
    tagline: 'Rapid issue resolution keeps users productive and minimizes disruption.',
    color: 'bg-brand-navy',
    items: [
      'Help desk support',
      'Application troubleshooting',
      'Incident response and escalation',
    ],
    icon: BiWrench,
  },
  {
    id: 'maintain',
    label: 'Maintain',
    tagline: 'Proactive operations prevent problems and protect infrastructure.',
    color: 'bg-brand-accent',
    items: [
      '24×7 monitoring',
      'Patch management',
      'Security hygiene',
      'Routine maintenance',
    ],
    icon: BiShield,
  },
  {
    id: 'enhance',
    label: 'Enhance',
    tagline: 'Strategic guidance ensures technology evolves with your organization.',
    color: 'bg-brand-navy-light',
    items: [
      'Technology roadmaps',
      'Lifecycle planning',
      'Infrastructure improvements',
      'vCTO advisory',
    ],
    icon: BiTrendingUp,
  },
];

export default function HowWeManage() {
  return (
    <section id="how-we-manage" className="py-20 md:py-28 bg-brand-light">
      <SectionTitle
        title="How We Manage IT"
        subtitle="InfoManage delivers services through a structured operational model that focuses on resolving issues quickly, preventing problems before they occur, and planning improvements over time."
      />

      <div className="container mx-auto px-4 mb-12">
        <p className="text-center text-2xl md:text-3xl font-heading font-bold text-brand-navy tracking-wide">
          <span className="text-brand-navy">Fix</span>
          <span className="text-brand-gray mx-3 md:mx-4">•</span>
          <span className="text-brand-accent">Maintain</span>
          <span className="text-brand-gray mx-3 md:mx-4">•</span>
          <span className="text-brand-navy-light">Enhance</span>
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map(({ label, tagline, color, items, icon: Icon }) => (
            <div
              key={label}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className={`${color} text-white px-8 py-10 text-center`}>
                <Icon className="text-4xl mx-auto mb-4 opacity-90" />
                <h3 className="font-heading text-4xl font-bold m-0">{label}</h3>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-brand-muted mb-6 leading-relaxed">{tagline}</p>
                <ul className="list-none m-0 p-0 mt-auto space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-brand-navy font-medium">
                      <BiCheckCircle className="text-brand-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-brand-muted mt-12 max-w-2xl mx-auto leading-relaxed">
          This structured approach ensures that IT environments remain reliable, secure, and
          aligned with business needs.
        </p>
      </div>
    </section>
  );
}
