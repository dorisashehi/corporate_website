import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { BiStar } from 'react-icons/bi';
import SectionTitle from '../SectionTitle';
import { img } from '../../utils/images';

const testimonials = [
  {
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    image: 'person/person-m-12.webp',
    text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    name: 'Sara Wilsson',
    role: 'Designer',
    image: 'person/person-f-12.webp',
    text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    name: 'Jena Karlis',
    role: 'Store Owner',
    image: 'person/person-f-5.webp',
    text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
  },
  {
    name: 'Matt Brandon',
    role: 'Freelancer',
    image: 'person/person-m-13.webp',
    text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
  },
  {
    name: 'John Larson',
    role: 'Entrepreneur',
    image: 'person/person-m-9.webp',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-arsha-light py-16 md:py-20">
      <SectionTitle
        title="Testimonials"
        subtitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="text-center px-4">
                <img
                  src={img(t.image)}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-arsha-accent/30"
                />
                <h3 className="font-heading text-lg font-bold text-arsha-heading mb-1">{t.name}</h3>
                <h4 className="text-sm text-arsha-text mb-2">{t.role}</h4>
                <div className="flex justify-center gap-0.5 text-arsha-accent mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <BiStar key={i} className="fill-arsha-accent" />
                  ))}
                </div>
                <p className="italic text-arsha-text leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
