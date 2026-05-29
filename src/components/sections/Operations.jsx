import { BiFile, BiError, BiRadar, BiBook, BiBarChart } from 'react-icons/bi';
import AnimateIn from '../AnimateIn';
import SectionTitle from '../SectionTitle';
import { images } from '../../utils/images';

const governance = [
  { icon: BiError, text: 'Incident management and priority response' },
  { icon: BiFile, text: 'Change management for infrastructure modifications' },
  { icon: BiRadar, text: 'Monitoring and alert management' },
  { icon: BiBook, text: 'Infrastructure documentation' },
  { icon: BiBarChart, text: 'Operational reporting and oversight' },
];

export default function Operations() {
  return (
    <section id="operations" className="py-20 md:py-28">
      <div className="container mx-auto px-4 space-y-20 md:space-y-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <AnimateIn direction="right" className="order-2 lg:order-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Predictable IT Operations
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-5">
              InfoManage provides unlimited operational support through clearly defined service plans
              designed to eliminate surprise invoices and reactive support models.
            </p>
            <p className="text-lg text-brand-text leading-relaxed mb-5">
              Daily IT operations are fully covered within the service plan scope, including
              monitoring, troubleshooting, system administration, and routine maintenance.
            </p>
            <p className="text-brand-muted leading-relaxed">
              This predictable approach allows organizations to focus on running their business while
              knowing their technology environment is being continuously managed and maintained.
            </p>
          </AnimateIn>
          <AnimateIn direction="left" className="order-1 lg:order-2 flex justify-center">
            <img
              src={images.operationsIllustration}
              alt="IT operations and monitoring"
              className="max-w-full h-auto max-h-[400px] rounded-xl"
            />
          </AnimateIn>
        </div>

        <AnimateIn>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto mb-12">
            <img
              src={images.teamCollaboration}
              alt="IT team collaboration"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>
        </AnimateIn>

        <div id="governance" className="bg-brand-light rounded-2xl p-8 md:p-14 max-w-6xl mx-auto">
          <SectionTitle
            title="Governance-Driven IT Operations"
            subtitle="Technology environments require discipline and accountability to operate reliably. InfoManage delivers services using structured IT Service Management practices that ensure consistent service delivery and operational visibility."
          />
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h3 className="font-heading text-xl font-bold text-brand-navy mb-6">
                Operational governance includes:
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4 list-none m-0 p-0">
                {governance.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm"
                  >
                    <span className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                      <Icon className="text-xl" />
                    </span>
                    <span className="font-medium text-brand-navy text-sm">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <AnimateIn direction="right" delay={150} className="lg:col-span-5">
              <img
                src={images.cybersecurity}
                alt="Security and governance"
                className="w-full h-auto rounded-xl shadow-md object-cover min-h-[240px]"
              />
            </AnimateIn>
          </div>
          <p className="text-center text-brand-muted mt-10 leading-relaxed">
            This structured approach helps maintain stability while enabling technology to evolve
            as business needs change.
          </p>
        </div>
      </div>
    </section>
  );
}
