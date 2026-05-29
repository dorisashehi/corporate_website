import { BiCheckCircle } from 'react-icons/bi';
import SectionTitle from '../SectionTitle';
import { img } from '../../utils/images';

const steps = [
  {
    num: '01',
    image: 'steps/steps-1.webp',
    title: 'Research & Analysis',
    desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.',
    features: ['Market Research', 'Data Analysis', 'User Feedback'],
  },
  {
    num: '02',
    image: 'steps/steps-2.webp',
    title: 'Design & Planning',
    desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
    features: ['Wireframing', 'UI/UX Design', 'Prototyping'],
  },
  {
    num: '03',
    image: 'steps/steps-3.webp',
    title: 'Development & Launch',
    desc: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.',
    features: ['Development', 'Testing', 'Deployment'],
  },
];

export default function WorkProcess() {
  return (
    <section id="work-process" className="py-16 md:py-20">
      <SectionTitle
        title="Work Process"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img src={img(step.image)} alt={step.title} className="w-full h-auto" loading="lazy" />
              </div>
              <div className="text-arsha-accent font-bold text-4xl mb-2">{step.num}</div>
              <h3 className="font-heading text-xl font-bold text-arsha-heading mb-3">{step.title}</h3>
              <p className="text-sm mb-6">{step.desc}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {step.features.map((f) => (
                  <div key={f} className="flex items-center gap-1 text-sm text-arsha-heading">
                    <BiCheckCircle className="text-arsha-accent" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
