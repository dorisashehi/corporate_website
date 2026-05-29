import {
  BiDesktop,
  BiServer,
  BiShieldQuarter,
  BiSupport,
  BiWrench,
  BiNetworkChart,
  BiRefresh,
} from 'react-icons/bi';
import SectionTitle from '../SectionTitle';

const coverage = [
  { icon: BiSupport, text: 'End-user help desk support' },
  { icon: BiDesktop, text: 'Endpoint and workstation management' },
  { icon: BiServer, text: 'Server and network administration' },
  { icon: BiNetworkChart, text: 'Monitoring and alert response' },
  { icon: BiShieldQuarter, text: 'Security management and protection' },
  { icon: BiWrench, text: 'Vendor coordination and escalation' },
  { icon: BiRefresh, text: 'Routine maintenance and system updates' },
];

export default function OutsourcedIT() {
  return (
    <section id="outsourced-it" className="py-20 md:py-28">
      <SectionTitle
        title="Your IT Department, Outsourced"
        subtitle="InfoManage acts as a complete operational technology partner for organizations that rely on stable, secure, and well-managed infrastructure."
      />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="space-y-5 text-lg leading-relaxed text-brand-text">
            <p>
              Rather than reacting to problems as they occur, our team continuously monitors,
              maintains, and improves the systems that support your business.
            </p>
            <p>
              From end-user support to infrastructure management, we handle the day-to-day
              responsibilities required to keep your environment running smoothly.
            </p>
            <p className="text-brand-muted">
              By managing these responsibilities proactively, we help organizations avoid
              disruptions and maintain reliable technology operations.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-brand-navy mb-6">
              Our operational coverage includes:
            </h3>
            <ul className="grid sm:grid-cols-1 gap-4 list-none m-0 p-0">
              {coverage.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4 p-4 bg-brand-light rounded-lg">
                  <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg bg-brand-navy text-white">
                    <Icon className="text-xl" />
                  </span>
                  <span className="pt-2 font-medium text-brand-navy">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
