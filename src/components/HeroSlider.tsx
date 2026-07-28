import type { JSX } from 'react';
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
  tag?: string;
  image: string;
}

const SLIDES: Slide[] = [
  { 
    id: 1, 
    title: 'League of Legends 英雄者联盟', 
    desc: '5 v 5 Strategy MOBA game', 
    tag: 'Strategy 策略',
    image: lolImage 
  },
  { 
    id: 2, 
    title: 'Valorant 无畏契约', 
    desc: '5 v 5 First person shooter game', 
    tag: 'FPS 射击',
    image: valImage 
  },
  { 
    id: 3, 
    title: 'NBA 2K Online', 
    desc: 'Online sports simulation games', 
    tag: 'Sports 运动',
    image: nbaImage 
  },
];

export function HeroSlider(): JSX.Element {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 my-6">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="wegame-swiper rounded-2xl overflow-hidden h-[420px] bg-[#0a0c10] text-white border border-white/10 shadow-2xl"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 overflow-hidden bg-gradient-to-r from-[#12141a] via-[#1a1d26] to-[#0a0c10]">
              
              {/* Background Ambient Glow Effect */}
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Left Side: Game Art Showcase */}
              <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center h-full">
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-64 md:max-h-80 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Right Side: Content Details & Actions */}
              <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start text-left space-y-4 pl-0 md:pl-8 mt-4 md:mt-0">
                {slide.tag && (
                  <span className="px-3 py-1 text-xs font-bold tracking-wider text-[#f3a83b] uppercase bg-[#f3a83b]/10 border border-[#f3a83b]/30 rounded-full">
                    {slide.tag}
                  </span>
                )}
                
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
                  {slide.title}
                </h2>
                
                <p className="text-base text-gray-300 max-w-md leading-relaxed">
                  {slide.desc}
                </p>

                {/* WeGame Action Button */}
                <div className="pt-2">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-[#f3a83b] to-[#ffd175] text-black font-semibold rounded-full hover:brightness-110 transition-all shadow-lg shadow-amber-500/20 active:scale-95">
                    Explore Now
                  </button>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination Styling Overrides */}
      <style>{`
        .wegame-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .wegame-swiper .swiper-pagination-bullet-active {
          background: #f3a83b !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}