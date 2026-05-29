import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { img } from '../../utils/images';

const clients = Array.from({ length: 8 }, (_, i) => img(`clients/clients-${i + 1}.webp`));

export default function Clients() {
  return (
    <section id="clients" className="bg-arsha-light py-12">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={2}
          spaceBetween={40}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 60 },
            640: { slidesPerView: 4, spaceBetween: 80 },
            992: { slidesPerView: 5, spaceBetween: 120 },
            1200: { slidesPerView: 6, spaceBetween: 120 },
          }}
          className="flex items-center"
        >
          {clients.map((src, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <img src={src} alt={`Client ${i + 1}`} className="max-h-12 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
