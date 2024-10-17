'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  image: string;
  title: string;
}

const projects: Project[] = [
  {
    image: '/Garden_2.webp',
    title: 'Modern Garden Design',
  },
  {
    image: '/Urban-landscape.jpg',
    title: 'Urban Landscaping',
  },
  {
    image: '/Native-Plants.jpg',
    title: 'Native Plant Gardens',
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <section className="py-16 text-center">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our Portfolio
      </motion.h2>
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 flex items-center justify-center transition duration-300">
                <p className="text-white text-xl font-semibold">
                  {project.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}