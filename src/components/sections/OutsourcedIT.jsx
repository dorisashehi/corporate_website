import {
  BiDesktop,
  BiServer,
  BiShieldQuarter,
  BiSupport,
  BiWrench,
  BiNetworkChart,
  BiRefresh,
} from 'react-icons/bi';
import AnimateIn from '../AnimateIn';
import SectionTitle from '../SectionTitle';
import { images } from '../../utils/images';

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
    <section id="outsourced-it" className="py-20 md:py-28 overflow-hidden">
      <SectionTitle
        title="Your IT Department, Outsourced"
        subtitle="InfoManage acts as a complete operational technology partner for organizations that rely on stable, secure, and well-managed infrastructure."
      />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-0 items-stretch max-w-6xl mx-auto bg-brand-light rounded-2xl overflow-hidden shadow-sm">
          <AnimateIn
            direction="left"
            className="lg:col-span-5 flex items-center justify-center p-8 md:p-12 bg-white"
          >
            <img
              src={images.itTeamIllustration}
              alt="Managed IT services team"
              className="max-w-full h-auto max-h-[380px] object-contain"
            />
          </AnimateIn>

          <div className="lg:col-span-7 p-8 md:p-12">
            <AnimateIn delay={100}>
              <div className="space-y-4 text-lg leading-relaxed text-brand-text mb-8">
                <p>
                  Rather than reacting to problems as they occur, our team continuously monitors,
                  maintains, and improves the systems that support your business.
                </p>
                <p>
                  From end-user support to infrastructure management, we handle the day-to-day
                  responsibilities required to keep your environment running smoothly.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <h3 className="font-heading text-xl font-bold text-brand-navy mb-5">
                Our operational coverage includes:
              </h3>
              <ul className="grid gap-3 list-none m-0 p-0">
                {coverage.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-brand-navy text-white">
                      <Icon className="text-lg" />
                    </span>
                    <span className="font-medium text-brand-navy text-sm md:text-base">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brand-muted mt-6 text-sm leading-relaxed">
                By managing these responsibilities proactively, we help organizations avoid
                disruptions and maintain reliable technology operations.
              </p>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
