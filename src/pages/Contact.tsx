// @ts-nocheck

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_64rf9c7', // Replace with your EmailJS service ID
        'template_j43d1ve', // Replace with your EmailJS template ID
        {
          to_email: 'jackiechrs10@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'q3HIxQ-4s3exFDj7Y' // Replace with your EmailJS public key
      );

      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-light mb-16 text-center tracking-wide text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.form 
          className="max-w-lg mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}