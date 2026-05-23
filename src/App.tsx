import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CapabilitiesSection from './components/CapabilitiesSection';

// Suppress benign Framer Motion warnings that can clutter the console logs in dev mode
if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args) => {
    if (args[0] && typeof args[0] === 'string' && (args[0].includes('Framer Motion') || args[0].includes('React does not recognize'))) {
      return;
    }
    originalError(...args);
  };
}

export default function App() {
  const handleNavigate = (section: 'hero' | 'capabilities') => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black w-full text-white font-body selection:bg-white selection:text-black">
      {/* Floating navigation bar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Hero viewport section */}
      <HeroSection
        onStartVoyage={() => handleNavigate('capabilities')}
        onViewLiftoff={() => handleNavigate('capabilities')}
      />

      {/* Capabilities grid viewport section */}
      <CapabilitiesSection />
      
      {/* Subtle minimalist footer */}
      <footer className="bg-black py-8 border-t border-white/5 text-center text-xs text-white/40 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 font-body">
          <p>© 2026 Space Ventures Corp. All voyages secured with quantum precision.</p>
          <div className="flex gap-6">
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavigate('hero'); }} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavigate('hero'); }} className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
