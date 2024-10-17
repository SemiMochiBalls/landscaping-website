// src/components/Testimonials.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
    name: string;
    feedback: string;
    location?: string;
}

const testimonials: Testimonial[] = [
    {
        name: 'Sarah Thompson',
        feedback: 'Amazing service! My garden looks fantastic.',
        location: 'Toronto, ON',
    },
    {
        name: 'David Wilson',
        feedback: 'Professional and timely. Highly recommend.',
        location: 'Mississauga, ON',
    },
    {
        name: 'Laura Martinez',
        feedback: 'The best landscaping service in Toronto! My lawn has never looked better.',
        location: 'Toronto, ON',
    },
    {
        name: 'James Anderson',
        feedback: 'Exceptional work! They transformed my backyard into a beautiful oasis.',
        location: 'Brampton, ON',
    },
    {
        name: 'Emma Roberts',
        feedback: 'Great attention to detail and very friendly staff. Highly satisfied.',
        location: 'Vaughan, ON',
    },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold">What Our Clients Say</h2>
      <div className="mt-8 max-w-2xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Auto-swipes every 3 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6">
                <p className="italic text-lg">"{testimonial.feedback}"</p>
                <h4 className="mt-4 font-semibold text-gray-700">
                  - {testimonial.name}
                </h4>
                {testimonial.location && (
                  <p className="text-gray-500">{testimonial.location}</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
