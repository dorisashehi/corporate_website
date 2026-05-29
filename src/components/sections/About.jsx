import { BiRightArrow, BiCheckCircle } from 'react-icons/bi';
import SectionTitle from '../SectionTitle';

const bullets = [
  'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit.',
  'Ullamco laboris nisi ut aliquip ex ea commodo',
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <SectionTitle title="About Us" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-none m-0 p-0 space-y-3">
              {bullets.map((text) => (
                <li key={text} className="flex gap-2 items-start">
                  <BiCheckCircle className="text-arsha-accent text-xl shrink-0 mt-0.5" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-6">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-arsha-accent font-medium border-2 border-arsha-accent px-6 py-2.5 rounded-full hover:bg-arsha-accent hover:text-white transition-colors group"
            >
              <span>Read More</span>
              <BiRightArrow className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
