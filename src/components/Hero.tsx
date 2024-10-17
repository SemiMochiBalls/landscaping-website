// src/components/Hero.tsx
'use client';

import { useState } from 'react';
import Modal from './Modal';
import QuoteForm from './QuoteForm';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/front-yard-lawn.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white p-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transform Your Outdoor Space
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Professional landscaping services to bring your vision to life.
        </motion.p>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Get a Free Quote
        </motion.button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <QuoteForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
}
