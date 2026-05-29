import {
  BiFile,
  BiError,
  BiRadar,
  BiBook,
  BiBarChart,
} from 'react-icons/bi';
import SectionTitle from '../SectionTitle';

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
      <div className="container mx-auto px-4 space-y-24 md:space-y-32">
        <div className="max-w-4xl mx-auto text-center">
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
        </div>

        <div id="governance" className="bg-brand-light rounded-2xl p-8 md:p-14">
          <SectionTitle
            title="Governance-Driven IT Operations"
            subtitle="Technology environments require discipline and accountability to operate reliably. InfoManage delivers services using structured IT Service Management practices that ensure consistent service delivery and operational visibility."
          />
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading text-xl font-bold text-brand-navy text-center mb-8">
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
                  <span className="font-medium text-brand-navy">{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-brand-muted mt-10 leading-relaxed">
              This structured approach helps maintain stability while enabling technology to evolve
              as business needs change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
