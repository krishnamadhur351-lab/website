import { motion, useScroll, useTransform } from 'motion/react';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';
import { ArrowUpRight, PlayIcon, ClockIcon, GlobeIcon } from './Icons';

interface HeroSectionProps {
  onStartVoyage: () => void;
  onViewLiftoff: () => void;
}

export default function HeroSection({ onStartVoyage, onViewLiftoff }: HeroSectionProps) {
  const { scrollY } = useScroll();

  // Subtle parallax effect: background video and content move at different scroll speeds to create depth
  const yBg = useTransform(scrollY, [0, 1000], [0, 180]);       // Moves down (slower scroll, further away)
  const yBadge = useTransform(scrollY, [0, 1000], [0, -60]);     // Moves up slightly faster
  const yTitle = useTransform(scrollY, [0, 1000], [0, -140]);    // Headline moves up fastest (closest to viewer)
  const ySub = useTransform(scrollY, [0, 1000], [0, -100]);       // Subheading moves up slightly slower than headline
  const yCTA = useTransform(scrollY, [0, 1000], [0, -70]);       // CTAs move up
  const yStats = useTransform(scrollY, [0, 1000], [0, -30]);      // Stats move up slightly

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between bg-black overflow-hidden"
    >
      {/* Background Video (120% width/height, top-aligned, centered horizontally, translated down by yBg) */}
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 z-0 pointer-events-none"
        style={{ y: yBg, width: '120%', height: '120%' }}
      >
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Frosted Glass ambient space light gradient overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 10%, #334155 0%, #000 70%)' }}
      />

      {/* Hero Content Grid/Flex layer */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-28 px-4 max-w-5xl mx-auto">
        
        {/* Badge (delay 0.4s) */}
        <motion.div style={{ y: yBadge }}>
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="liquid-glass rounded-full p-1.5 pr-4 flex items-center gap-3 backdrop-blur-md shadow-lg max-w-full md:max-w-max"
          >
            <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider whitespace-nowrap">
              New
            </span>
            <span className="text-white/90 text-sm font-body truncate leading-none">
              Maiden Crewed Voyage to Mars Arrives 2026
            </span>
          </motion.div>
        </motion.div>

        {/* Headline with BlurText (IntersectionObserver / word-by-word stagger) */}
        <motion.div style={{ y: yTitle }} className="mt-8 mb-6 max-w-3xl">
          <BlurText
            text="Venture Past Our Sky Across the Universe"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] tracking-[-3px] text-center"
            delayOffset={0.2}
          />
        </motion.div>

        {/* Subheading (delay 0.8s) */}
        <motion.div style={{ y: ySub }} className="w-full flex justify-center">
          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            className="text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-relaxed text-center px-4"
          >
            Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
          </motion.p>
        </motion.div>

        {/* CTAs (delay 1.1s) */}
        <motion.div style={{ y: yCTA }}>
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-8"
          >
            {/* Primary Action Button using liquid-glass-strong */}
            <button
              onClick={onStartVoyage}
              type="button"
              className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg outline-none"
            >
              Start Your Voyage
              <ArrowUpRight className="w-5 h-5 text-white" />
            </button>

            {/* Secondary Action */}
            <button
              onClick={onViewLiftoff}
              type="button"
              className="text-white/90 hover:text-white active:scale-95 transition-all text-sm font-medium flex items-center gap-2 cursor-pointer py-2 outline-none group"
            >
              <span>View Liftoff</span>
              <span className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <PlayIcon className="h-3 w-3 text-white" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Stats Row (delay 1.3s) - two liquid-glass cards */}
        <motion.div style={{ y: yStats }}>
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
            className="flex flex-col sm:flex-row items-stretch gap-5 mt-12 mb-8"
          >
            {/* Card 1 */}
            <div className="liquid-glass p-5 w-full sm:w-[220px] rounded-[1.25rem] flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
              <div className="text-white/80 mb-6">
                <ClockIcon className="w-7 h-7 stroke-1" />
              </div>
              <div className="text-left mt-auto">
                <span className="font-heading font-normal italic text-white text-4xl tracking-[-1px] leading-none">
                  34.5 Min
                </span>
                <p className="text-[11px] uppercase tracking-wider text-white/50 font-body font-light mt-1">
                  Average Videos Watch Time
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass p-5 w-full sm:w-[220px] rounded-[1.25rem] flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
              <div className="text-white/80 mb-6">
                <GlobeIcon className="w-7 h-7 stroke-1" />
              </div>
              <div className="text-left mt-auto">
                <span className="font-heading font-normal italic text-white text-4xl tracking-[-1px] leading-none">
                  2.8B+
                </span>
                <p className="text-[11px] uppercase tracking-wider text-white/50 font-body font-light mt-1">
                  Users Across the Globe
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Partners (bottom of hero, delay 1.4s) */}
      <motion.div
        initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }}
        className="relative z-10 flex flex-col items-center gap-4 pb-12 w-full mt-auto"
      >
        <span className="liquid-glass rounded-full px-4 py-1 text-[11px] tracking-widest uppercase font-medium text-white/65">
          Collaborating with top aerospace pioneers globally
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-2 md:gap-x-16 mt-2">
          {['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'].map((partner, idx) => (
            <span
              key={idx}
              className="font-heading font-normal italic text-white/80 hover:text-white transition-opacity text-2xl md:text-3xl tracking-tight cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
