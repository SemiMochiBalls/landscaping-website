'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
  };

  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 border rounded-lg h-32"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
