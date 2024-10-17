// src/components/QuoteForm.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface QuoteFormProps {
  onClose: () => void;
}

type GardenSize = 'Small' | 'Medium' | 'Large';
type Service =
  | 'Lawn Mowing'
  | 'Garden Design'
  | 'Weeding'
  | 'Tree Trimming'
  | 'Irrigation Installation';

// Prices for each service
const servicePrices: Record<Service, number> = {
  'Lawn Mowing': 25,
  'Garden Design': 50,
  'Weeding': 30,
  'Tree Trimming': 40,
  'Irrigation Installation': 60,
};

// Images for garden sizes
const gardenSizeImages: Record<GardenSize, string> = {
  Small: '/garden-small.webp',
  Medium: '/garden-medium.webp',
  Large: '/garden-large.jpg',
};

// Images for services
const serviceImages: Record<Service, string> = {
  'Lawn Mowing': '/service-lawn-mowing.webp',
  'Garden Design': '/service-garden-design.jpg',
  'Weeding': '/service-weeding.jpg',
  'Tree Trimming': '/service-tree-trimming.webp',
  'Irrigation Installation': '/service-irrigation.webp',
};

export default function QuoteForm({ onClose }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [gardenSize, setGardenSize] = useState<GardenSize | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [estimate, setEstimate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const serviceOptions: Service[] = [
    'Lawn Mowing',
    'Garden Design',
    'Weeding',
    'Tree Trimming',
    'Irrigation Installation',
  ];

  const handleNext = () => {
    setDirection(1);
    if (step === 2) {
      setIsLoading(true);
      setTimeout(() => {
        // Calculate estimate
        let basePrice = 0;

        switch (gardenSize) {
          case 'Small':
            basePrice = 400;
            break;
          case 'Medium':
            basePrice = 600;
            break;
          case 'Large':
            basePrice = 900;
            break;
        }

        // Calculate total price for selected services
        const servicesPrice = services.reduce(
          (total, service) => total + servicePrices[service],
          0
        );
        const totalEstimate = basePrice + servicesPrice;

        setEstimate(totalEstimate);
        setIsLoading(false);
        setStep((prev) => prev + 1);
      }, 2000);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  // Animation variants for motion components
  const variants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 15 : -15,
    }),
    animate: { opacity: 1, x: 0 },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -15 : 15,
    }),
  };

  return (
    <div>
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        {step === 1 && (
          <motion.div
            key="step1"
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className="text-xl font-bold mb-4">Select Your Garden Size</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {(['Small', 'Medium', 'Large'] as GardenSize[]).map((size) => {
                const isSelected = gardenSize === size;
                return (
                  <motion.div
                    key={size}
                    className={`relative cursor-pointer rounded-lg overflow-hidden shadow-lg ${
                      isSelected ? 'ring-4 ring-primary' : ''
                    }`}
                    onClick={() => setGardenSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative w-full h-24 sm:h-32 md:h-40">
                      <Image
                        src={gardenSizeImages[size]}
                        alt={`${size} Garden`}
                        layout="fill"
                        objectFit="cover"
                        className="transition duration-300"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 hover:opacity-80 transition duration-300"
                      ></div>
                      <div
                        className="absolute bottom-0 w-full text-center p-2 bg-black bg-opacity-50 text-white"
                      >
                        {size}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <button
              onClick={handleNext}
              disabled={!gardenSize}
              className="mt-4 px-4 py-2 bg-primary text-white rounded disabled:bg-gray-400"
            >
              Next
            </button>
          </motion.div>
        )}

        {step === 2 && !isLoading && (
          <motion.div
            key="step2"
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className="text-xl font-bold mb-4">Select Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {serviceOptions.map((service) => {
                const isSelected = services.includes(service);
                return (
                  <motion.div
                    key={service}
                    className={`relative cursor-pointer rounded-lg overflow-hidden shadow-lg ${
                      isSelected ? 'ring-4 ring-primary' : ''
                    }`}
                    onClick={() => {
                      setServices((prev) =>
                        isSelected
                          ? prev.filter((s) => s !== service)
                          : [...prev, service]
                      );
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative w-full h-24 sm:h-32 md:h-40">
                      <Image
                        src={serviceImages[service]}
                        alt={service}
                        layout="fill"
                        objectFit="cover"
                        className="transition duration-300"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 hover:opacity-80 transition duration-300"
                      ></div>
                      <div
                        className="absolute bottom-0 w-full text-center p-2 bg-black bg-opacity-50 text-white"
                      >
                        {service}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={services.length === 0}
                className="px-4 py-2 bg-primary text-white rounded disabled:bg-gray-400"
              >
                Get Estimate
              </button>
            </div>
          </motion.div>
        )}

        {isLoading && (
          <motion.div
            key="loading"
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
            </div>
            <p className="text-lg font-semibold mt-4">Calculating your estimate...</p>
          </motion.div>
        )}

        {step === 3 && estimate !== null && !isLoading && (
          <motion.div
            key="step3"
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className="text-xl font-bold mb-4">Your Estimated Quote</h2>
            <p className="text-2xl font-semibold mb-4">${estimate}</p>
            <p className="text-sm text-gray-600 mb-4">
              *This is an estimate and may change once details are confirmed.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-primary text-white rounded"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
