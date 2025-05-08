"use client";
import React, { useState } from "react";
import { Section, Card, Button } from "./ui";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<null | 'error' | 'success'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus('error');
      return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', formState);
    setFormStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setFormStatus(null);
    }, 3000);
  };
  
  return (
    <Section id="contact" background="glass">
      <h2 className="text-3xl font-semibold text-[var(--color-primary)]">Contact</h2>
      
      <div className="flex flex-wrap gap-8 mt-6">
        {/* Contact Form */}
        <Card variant="solid" className="flex-1 min-w-[280px]">
          <form 
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label 
                htmlFor="name" 
                className="block mb-2 text-sm text-[var(--color-primary)]"
              >
                Your Name
              </label>
              <input 
                id="name"
                name="name"
                type="text" 
                value={formState.name}
                onChange={handleChange}
                className="w-full py-3 px-3 rounded-lg border border-[var(--color-secondary)] bg-[var(--color-white)] font-sans" 
                required 
              />
            </div>
            
            <div>
              <label 
                htmlFor="email" 
                className="block mb-2 text-sm text-[var(--color-primary)]"
              >
                Email Address
              </label>
              <input 
                id="email"
                name="email"
                type="email" 
                value={formState.email}
                onChange={handleChange}
                className="w-full py-3 px-3 rounded-lg border border-[var(--color-secondary)] bg-[var(--color-white)] font-sans" 
                required 
              />
            </div>
            
            <div>
              <label 
                htmlFor="message" 
                className="block mb-2 text-sm text-[var(--color-primary)]"
              >
                Your Message
              </label>
              <textarea 
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5} 
                className="w-full py-3 px-3 rounded-lg border border-[var(--color-secondary)] bg-[var(--color-white)] font-sans" 
                required 
              />
            </div>
            
            <Button 
              type="submit"
              variant="primary"
              size="lg"
              className="mt-2"
            >
              Send Message
            </Button>
            
            {formStatus === 'success' && (
              <div className="p-3 bg-[#dff5e8] text-[#0a723a] rounded-lg mt-4 text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="p-3 bg-[#fbe9e7] text-[#c62828] rounded-lg mt-4 text-sm">
                Please fill out all fields before submitting.
              </div>
            )}
          </form>
        </Card>
        
        {/* Contact Information */}
        <Card variant="glass" className="flex-1 min-w-[280px]">
          <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-6">Get in Touch</h3>
          
          <div className="mb-6">
            <div className="font-semibold mb-2">Email</div>
            <a href="mailto:jose@example.com" className="text-[var(--color-accent)] no-underline hover:underline">jose@example.com</a>
          </div>
          
          <div className="mb-6">
            <div className="font-semibold mb-2">Location</div>
            <div>Los Angeles, California</div>
          </div>
          
          <div>
            <div className="font-semibold mb-2">Social Media</div>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--color-primary)] text-lg no-underline hover:text-[var(--color-accent)]">LinkedIn</a>
              <a href="#" className="text-[var(--color-primary)] text-lg no-underline hover:text-[var(--color-accent)]">Twitter</a>
              <a href="#" className="text-[var(--color-primary)] text-lg no-underline hover:text-[var(--color-accent)]">Instagram</a>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;
