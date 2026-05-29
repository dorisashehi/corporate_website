import { useState } from 'react';
import { BiChevronRight, BiQuestionMark } from 'react-icons/bi';
import SectionTitle from '../SectionTitle';

const faqs = [
  {
    q: 'Non consectetur a erat nam at lectus urna duis?',
    a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
  {
    q: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    a: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
  },
  {
    q: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
    a: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis',
  },
  {
    q: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
    a: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
  },
  {
    q: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
    a: 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in',
  },
];

export default function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq-2" className="bg-arsha-light py-16 md:py-20">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                active === index ? 'ring-1 ring-arsha-accent/30' : ''
              }`}
            >
              <button
                type="button"
                className="w-full flex items-center gap-4 p-5 text-left bg-transparent border-0 cursor-pointer"
                onClick={() => setActive(active === index ? -1 : index)}
              >
                <BiQuestionMark className="text-arsha-accent text-2xl shrink-0" />
                <h3 className="font-heading text-base font-semibold text-arsha-heading flex-1 m-0">
                  {faq.q}
                </h3>
                <BiChevronRight
                  className={`text-arsha-accent text-xl shrink-0 transition-transform ${
                    active === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {active === index && (
                <div className="px-5 pb-5 pl-14">
                  <p className="m-0 text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
