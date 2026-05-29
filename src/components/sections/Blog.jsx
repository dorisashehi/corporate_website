import { BiRightArrow, BiFolder, BiUser } from 'react-icons/bi';
import SectionTitle from '../SectionTitle';
import { img } from '../../utils/images';

const posts = [
  {
    title: 'Eum ad dolor et. Autem aut fugiat debitis',
    date: 'December 12',
    author: 'Julia Parker',
    category: 'Politics',
    image: 'blog/blog-post-1.webp',
  },
  {
    title: 'Et repellendus molestiae qui est sed omnis',
    date: 'July 17',
    author: 'Mario Douglas',
    category: 'Sports',
    image: 'blog/blog-post-2.webp',
  },
  {
    title: 'Quia assumenda est et veritati tirana ploder',
    date: 'September 05',
    author: 'Lisa Hunter',
    category: 'Economics',
    image: 'blog/blog-post-3.webp',
  },
];

export default function Blog() {
  return (
    <section id="recent-blog-postst" className="bg-arsha-light py-16 md:py-20">
      <SectionTitle
        title="Recent Blog Posts"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <img src={img(post.image)} alt={post.title} className="w-full h-56 object-cover" />
                <span className="absolute bottom-4 left-4 bg-arsha-accent text-white text-xs font-medium px-3 py-1 rounded">
                  {post.date}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-lg font-bold text-arsha-heading mb-4 hover:text-arsha-accent transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <BiUser /> {post.author}
                  </span>
                  <span>/</span>
                  <span className="flex items-center gap-1">
                    <BiFolder /> {post.category}
                  </span>
                </div>
                <hr className="border-gray-100 mb-4" />
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 text-arsha-accent font-medium text-sm group"
                >
                  <span>Read More</span>
                  <BiRightArrow className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
