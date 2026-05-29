import { useState } from 'react';
import { img } from '../../utils/images';

const faqItems = [
  {
    num: '01',
    title: 'Non consectetur a erat nam at lectus urna duis?',
    content:
      'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
  {
    num: '02',
    title: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    content:
      'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
  },
  {
    num: '03',
    title: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
    content:
      'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis',
  },
];

export default function WhyUs() {
  const [active, setActive] = useState(0);

  return (
    <section id="why-us" className="bg-arsha-light py-16 md:py-20">
      <div className="max-w-[100%]">
        <div className="grid lg:grid-cols-12 gap-0 items-stretch">
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center px-4 lg:px-12 xl:px-20 py-8">
            <div className="mb-8">
              <h3 className="font-heading text-2xl md:text-[28px] text-arsha-heading font-bold mb-4">
                <span>Eum ipsam laborum deleniti </span>
                <strong>velit pariatur architecto aut nihil</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>
            <div className="space-y-0">
              {faqItems.map((item, index) => (
                <div
                  key={item.num}
                  className={`border-b border-gray-200 ${active === index ? 'bg-white shadow-sm' : ''}`}
                >
                  <button
                    type="button"
                    className="w-full text-left py-4 px-4 flex gap-3 items-start bg-transparent border-0 cursor-pointer"
                    onClick={() => setActive(active === index ? -1 : index)}
                  >
                    <span className="text-arsha-accent font-bold text-lg shrink-0">{item.num}</span>
                    <h3 className="font-heading text-base md:text-lg font-semibold text-arsha-heading m-0">
                      {item.title}
                    </h3>
                  </button>
                  {active === index && (
                    <div className="px-4 pb-4 pl-12">
                      <p className="m-0 text-sm md:text-base">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center bg-white/50 p-8">
            <img src={img('why-us.png')} alt="Why Us" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
