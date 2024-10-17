'use client';

import { useState } from 'react';
import { services, Service } from '@/data/servicesData';
import ServiceModal from './ServiceModal';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 text-center px-4">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedService(service)}
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-96 overflow-hidden rounded-lg shadow-md">
              <Image
                src={service.image}
                alt={service.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25"></div>
              <h3 className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-lg font-semibold">
                {service.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}
