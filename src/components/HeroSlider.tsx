import { JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import lolImage from '../assets/lol.png';
import nbaImage from '../assets/nba.png';
import valImage from '../assets/val.png';

interface Slide {
  id: number;
  title: string;
  desc: string;
  image: string
}

const SLIDES: Slide[] = [
  { id: 1, title: 'Seamless PWA Experience', desc: 'Works offline and installs like a native app.', image: lolImage },
  { id: 2, title: 'Ultra Fast Performance', desc: 'Powered by Vite and optimized utility CSS.', image: valImage },
  { id: 3, title: 'Interactive React Components', desc: 'Built cleanly with modern React patterns.', image: nbaImage},
];

export function HeroSlider(): JSX.Element {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 my-6">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden h-[360px] bg-indigo-900 text-white"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-r font-sans">
            <img 
            src={slide.image}
            alt={slide.title}
            className="max-h-48 md:max-h-60 rounded-xl mb-8 object-contain shadow-xl"
            />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{slide.title}</h2>
            <p className="text-lg text-indigo-100 max-w-xl">{slide.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}