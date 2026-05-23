import { ArrowUpRight } from './Icons';

interface NavbarProps {
  onNavigate: (section: 'hero' | 'capabilities' | 'booking') => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-4 left-0 w-full px-4 md:px-8 lg:px-16 z-50 flex items-center justify-between">
      {/* Left: Logo circle */}
      <button
        onClick={() => onNavigate('hero')}
        className="w-12 h-12 rounded-full flex items-center justify-center liquid-glass cursor-pointer select-none active:scale-95 transition-transform"
        title="Venture Space"
      >
        <span className="font-heading font-normal text-2xl text-white lowercase">a</span>
      </button>

      {/* Center: Navigation Pill (Desktop only) */}
      <div className="hidden md:flex items-center gap-1.5 liquid-glass rounded-full px-1.5 py-1.5 shadow-xl">
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {[
            { label: 'Home', section: 'hero' as const },
            { label: 'Voyages', section: 'hero' as const },
            { label: 'Worlds', section: 'capabilities' as const },
            { label: 'Innovation', section: 'capabilities' as const },
            { label: 'Book Voyage', section: 'booking' as const },
          ].map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => onNavigate(item.section)}
                className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 font-body rounded-full cursor-pointer hover:bg-white/5"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Claim a Spot Button inside desktop nav pill */}
        <button
          onClick={() => onNavigate('booking')}
          className="bg-white text-black hover:bg-neutral-200 active:scale-95 transition-all font-body font-medium text-sm px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-1 cursor-pointer"
        >
          Claim a Spot
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Right: Balance Spacer for Desktop, or CTA button on Mobile */}
      <div className="flex md:hidden">
        <button
          onClick={() => onNavigate('booking')}
          className="bg-white text-black hover:bg-neutral-200 active:scale-95 transition-all font-body font-medium text-xs px-3.5 py-2 rounded-full whitespace-nowrap flex items-center gap-1 cursor-pointer shadow-lg"
        >
          Claim a Spot
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      {/* Invisible 48px space for symmetrical flex justification on desktop */}
      <div className="hidden md:block w-12 h-12 invisible pointer-events-none" />
    </nav>
  );
}
