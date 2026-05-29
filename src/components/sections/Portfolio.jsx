import { useState } from 'react';
import { BiLink, BiZoomIn } from 'react-icons/bi';
import SectionTitle from '../SectionTitle';
import { img } from '../../utils/images';

const filters = [
  { key: '*', label: 'All' },
  { key: 'app', label: 'App' },
  { key: 'product', label: 'Card' },
  { key: 'branding', label: 'Web' },
];

const items = [
  { title: 'App 1', desc: 'Lorem ipsum, dolor sit', image: 'portfolio/portfolio-portrait-1.webp', category: 'app' },
  { title: 'Product 1', desc: 'Lorem ipsum, dolor sit', image: 'portfolio/portfolio-1.webp', category: 'product' },
  { title: 'Branding 1', desc: 'Lorem ipsum, dolor sit', image: 'portfolio/portfolio-3.webp', category: 'branding' },
  { title: 'App 2', desc: 'Lorem ipsum, dolor sit', image: 'portfolio/portfolio-4.webp', category: 'app' },
  { title: 'Product 2', desc: 'Lorem ipsum, dolor sit', image: 'portfolio/portfolio-portrait-2.webp', category: 'product' },
  { title: 'Branding 2', desc: 'Lorem ipsum, dolor sit', image: 'portfolio/portfolio-portrait-3.webp', category: 'branding' },
  { title: 'App 3', desc: 'Lorem ipsum, dolor sit', image: 'portfolio/portfolio-7.webp', category: 'app' },
  { title: 'Product 3', desc: 'Lorem ipsum, dolor sit', image: 'portfolio/portfolio-8.webp', category: 'product' },
  { title: 'Branding 3', desc: 'Lorem ipsum, dolor sit', image: 'portfolio/portfolio-9.webp', category: 'branding' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('*');

  const filtered =
    filter === '*' ? items : items.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-16 md:py-20">
      <SectionTitle
        title="Portfolio"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-2 list-none m-0 p-0 mb-10">
          {filters.map((f) => (
            <li key={f.key}>
              <button
                type="button"
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer border-0 transition-colors ${
                  filter === f.key
                    ? 'bg-arsha-accent text-white'
                    : 'bg-transparent text-arsha-heading hover:text-arsha-accent'
                }`}
              >
                {f.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.title + item.image} className="group relative overflow-hidden rounded">
              <img src={img(item.image)} alt={item.title} className="w-full h-auto block" />
              <div className="absolute inset-0 bg-arsha-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                <h4 className="font-heading text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-white/80 mb-4">{item.desc}</p>
                <div className="flex gap-3">
                  <a
                    href={img(item.image)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-arsha-accent text-white rounded-full hover:bg-[#31a9e1]"
                  >
                    <BiZoomIn />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-arsha-accent text-white rounded-full hover:bg-[#31a9e1]"
                  >
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
