// src/components/ServiceModal.tsx

'use client';

import { useEffect, useRef } from 'react';
import { Service } from '@/data/servicesData';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className="bg-white rounded-lg shadow-lg max-w-lg w-full relative overflow-hidden"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
            aria-label="Close modal"
          >
            &times;
          </button>
          <div className="relative w-full h-48">
            <Image
              src={service.image}
              alt={service.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
            <p className="text-gray-700">{service.details}</p>
            <button
              className="mt-6 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg"
              onClick={() => {
                // Implement booking logic or navigate to booking page
                onClose();
              }}
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
