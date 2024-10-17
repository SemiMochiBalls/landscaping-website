// src/data/servicesData.ts

export interface Service {
    id: number;
    name: string;
    image: string;
    details: string;
  }
  
  export const services: Service[] = [
    {
      id: 1,
      name: 'Lawn Mowing',
      image: '/service-lawn-mowing.webp',
      details:
        'Our lawn mowing service ensures your grass is always at the perfect height for a healthy, beautiful lawn.',
    },
    {
      id: 2,
      name: 'Garden Design',
      image: '/service-garden-design.jpg',
      details:
        'We offer custom garden design services to create the outdoor space of your dreams.',
    },
    {
      id: 3,
      name: 'Weeding',
      image: '/service-weeding.jpg',
      details:
        'Our weeding service keeps your garden beds clean and free of unwanted plants.',
    },
    {
      id: 4,
      name: 'Tree Trimming',
      image: '/service-tree-trimming.webp',
      details:
        'Professional tree trimming to maintain the health and appearance of your trees.',
    },
    {
      id: 5,
      name: 'Irrigation Installation',
      image: '/service-irrigation.webp',
      details:
        'We install efficient irrigation systems to keep your landscape properly watered.',
    },
    {
      id: 6,
      name: 'Mulching',
      image: '/service-mulching.webp',
      details:
        'Our mulching service helps retain soil moisture and improve the appearance of your garden.',
    },
    // Add more services as needed
  ];
  