import { motion } from 'motion/react';
import FadingVideo from './FadingVideo';

export default function CapabilitiesSection() {
  const cards = [
    {
      title: 'AI Scenery',
      iconPath: 'M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z',
      tags: ['Natural Context', 'Photo Realism', 'Infinite Settings', 'Eco-Vibe'],
      body: 'AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.',
    },
    {
      title: 'Batch Production',
      iconPath: 'M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z',
      tags: ['Scale Fast', 'Visual Consistency', 'Time Saver', 'Ready to Post'],
      body: 'Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.',
    },
    {
      title: 'Smart Lighting',
      iconPath: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z',
      tags: ['Ray Tracing', 'Physical Shadows', 'Studio Quality', 'Sunlight Sync'],
      body: 'Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.',
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative min-h-screen w-full flex flex-col bg-black overflow-hidden"
    >
      {/* Background Video (full-bleed, no 120% scale) */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Frosted Glass ambient space light gradient overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 10%, #334155 0%, #000 70%)' }}
      />

      {/* Content Layer (relative z-10) */}
      <div className="relative z-10 px-6 md:px-16 lg:px-20 pt-32 pb-16 flex flex-col justify-between min-h-screen w-full max-w-7xl mx-auto">
        
        {/* Header (mb-auto) */}
        <div className="mb-auto text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
            className="text-sm font-body text-white/50 mb-4 uppercase tracking-widest font-semibold"
          >
            // Capabilities
          </motion.div>

          <motion.h2
            initial={{ filter: 'blur(10px)', opacity: 0, y: 30 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]"
          >
            Production
            <br />
            evolved
          </motion.h2>
        </div>

        {/* Column of 3 cards (grid grid-cols-1 md:grid-cols-3 gap-6 mt-16) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ filter: 'blur(8px)', opacity: 0, y: 40 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between shadow-2xl backdrop-blur-md"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                {/* Left: icon container */}
                <div className="w-11 h-11 rounded-[0.75rem] flex items-center justify-center liquid-glass shrink-0 text-white shadow-inner">
                  <svg
                    className="w-6 h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={card.iconPath} />
                  </svg>
                </div>

                {/* Right: small liquid-glass pill tags */}
                <div className="flex flex-wrap justify-end gap-1 px-1 max-w-[75%]">
                  {card.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="liquid-glass rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] text-white/90 font-body whitespace-nowrap shadow-sm border border-white/5 active:bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom Content */}
              <div className="mt-6 text-left">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/80 font-body font-light leading-snug max-w-[32ch]">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
