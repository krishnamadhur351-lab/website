import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, GlobeIcon } from './Icons';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    destination: 'Mars Orbit',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="booking" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background glow overlay */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4"
          >
            <GlobeIcon className="w-3.5 h-3.5" />
            Join the Fleet
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading italic text-white tracking-tight"
          >
            Reserve Your Voyage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-sm md:text-base font-body font-light mt-3 max-w-md mx-auto"
          >
            Submit your application details below. Our Flight Officers will contact you to finalize crew integration.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="liquid-glass-strong rounded-3xl p-8 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2 font-body">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all font-body text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2 font-body">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all font-body text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2 font-body">
                      Email ID
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all font-body text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2 font-body">
                    Home Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={2}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your street, city, state, and zip code"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all font-body text-sm resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="destination" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2 font-body">
                    Preferred Destination
                  </label>
                  <div className="relative">
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all font-body text-sm appearance-none cursor-pointer"
                    >
                      <option value="Mars Orbit">Mars Orbit (Low Gravity Cruise)</option>
                      <option value="Olympus Mons Base">Olympus Mons Base (Volcanic Plains)</option>
                      <option value="Valles Marineris">Valles Marineris (Grand Canyon Tour)</option>
                      <option value="Titan Colony">Titan Colony (Saturn Methane Lakes)</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/40">
                      ↓
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2 font-body">
                    Special Accommodations / Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={3}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="E.g. dietary requirements, zero-gravity training preferences..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all font-body text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full liquid-glass-strong rounded-xl py-4 text-sm font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/10 active:scale-98 transition-all duration-200 cursor-pointer shadow-lg outline-none border border-white/5 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? 'Processing Transmission...' : 'Submit Voyage Application'}
                  {!isSubmitting && <ArrowUpRight className="w-4 h-4 text-white" />}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="liquid-glass-strong rounded-3xl p-8 md:p-10 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-full flex items-center justify-center mx-auto text-3xl">
                ✓
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-heading italic text-white">Transmission Received</h3>
                <p className="text-white/70 text-sm font-body font-light">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your application for <span className="text-white font-medium">{formData.destination}</span> has been logged securely under quantum encryption.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl text-left text-xs space-y-2 border border-white/5 font-body">
                <div><span className="text-white/40 uppercase tracking-wider block">Assigned Flight ID</span> <span className="text-white font-mono">SV-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                <div><span className="text-white/40 uppercase tracking-wider block">Contact Information</span> <span className="text-white">{formData.email} | {formData.phone}</span></div>
                <div><span className="text-white/40 uppercase tracking-wider block">Home Station Address</span> <span className="text-white">{formData.address}</span></div>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-xl py-3 text-xs font-semibold uppercase tracking-wider transition-colors border border-white/5"
              >
                Submit Another Application
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
