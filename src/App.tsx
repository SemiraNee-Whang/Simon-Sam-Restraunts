/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Music, 
  ShieldCheck, 
  Beer, 
  UtensilsCrossed,
  MessageCircle,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import React, { useRef, useState, useEffect, FormEvent } from "react";

const REVIEWS = [
  { name: "Thando Mtyu", text: "Affordable beers. Service: 5. Atmosphere: 4. The energy is simply unmatched in Centurion.", rating: 5, date: "6 months ago" },
  { name: "Bongile Joy Mnguni", text: "It is breathtaking and the security is tight. A true safe haven for the culture.", rating: 5, date: "a year ago" },
  { name: "Ernest Dube", text: "I love the place. Sensational VIP experience with top-tier service and acoustics.", rating: 5, date: "11 months ago" },
  { name: "Makoma Luscious", text: "Loved it. Great for lunch and even better for the late-night pulse.", rating: 5, date: "a year ago" },
  { name: "Robert Msipha", text: "Loud, but you can still talk. Suitable for all group sizes. Best sound in the city.", rating: 5, date: "2 weeks ago" },
  { name: "Sipho Kumalo", text: "Centurion's best kept secret. The transition from gourmet dining to club vibes is seamless.", rating: 5, date: "1 month ago" },
];

const PHOTOS = [
  "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
];

type Page = 'home' | 'booking';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [currentPage]);

  return (
    <div className="bg-brand-dark text-brand-paper min-h-screen relative overflow-hidden">
      {/* Global Background Accents */}
      <div className="golden-orb w-[600px] h-[600px] bg-brand-primary/10 -top-40 -left-40" />
      <div className="golden-orb w-[800px] h-[800px] bg-brand-primary/5 bottom-0 -right-40" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 md:px-16 py-6 transition-all duration-500 ${scrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className="group flex flex-col items-start"
          >
            <span className="font-serif italic text-2xl md:text-3xl tracking-tight text-white group-hover:text-brand-primary transition-colors">
              Simon <span className="not-italic font-display font-light text-brand-primary group-hover:text-white transition-colors">&&</span> Sam
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] font-black text-brand-primary/40 group-hover:text-brand-primary/60 transition-colors">Centurion Elite</span>
          </button>
          
          <div className="hidden md:flex gap-12 items-center text-[10px] uppercase tracking-[0.4em] font-bold">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`relative py-2 transition-all hover:text-brand-primary ${currentPage === 'home' ? 'text-brand-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-brand-primary' : 'text-white/60'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('booking')}
              className={`relative py-2 transition-all hover:text-brand-primary ${currentPage === 'booking' ? 'text-brand-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-brand-primary' : 'text-white/60'}`}
            >
              Contact Us
            </button>
            <a 
              href="https://wa.me/27736910940"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-brand-primary text-black rounded-full hover:scale-105 transition-all gold-glow text-[9px]"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 glass rounded-xl text-brand-primary border border-brand-primary/20"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[40] bg-brand-dark/95 backdrop-blur-3xl md:hidden flex flex-col justify-center items-center p-12 text-center"
          >
            <div className="space-y-12">
              <button 
                onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
                className="block text-5xl font-serif italic text-white hover:text-brand-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage('booking'); setIsMenuOpen(false); }}
                className="block text-5xl font-serif italic text-white hover:text-brand-primary transition-colors"
              >
                Contact Us
              </button>
              <div className="pt-12 border-t border-white/5 w-full flex flex-col items-center gap-8">
                <a 
                  href="https://wa.me/27736910940"
                  className="w-full py-6 bg-brand-primary text-black rounded-full font-display font-black uppercase tracking-widest text-xs"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <HomePage key="home" onBook={() => setCurrentPage('booking')} />
        ) : (
          <BookingPage key="booking" onBack={() => setCurrentPage('home')} />
        )}
      </AnimatePresence>

      <footer className="px-6 md:px-16 py-32 border-t border-white/5 bg-black/60 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 pb-20 border-b border-white/5">
            <div className="space-y-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className="font-serif italic text-4xl tracking-tight text-white hover:opacity-70 transition-opacity"
              >
                Simon <span className="not-italic font-display font-light text-brand-primary">&&</span> Sam
              </button>
              <p className="text-white/40 text-sm font-light max-w-xs leading-relaxed italic">
                Defining the pulse of Olievenhoutbos. Where gourmet dining meets the world-class stage.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 md:gap-32 uppercase tracking-[0.3em] font-medium text-[9px]">
              <div className="space-y-6">
                <div className="text-white/20 font-bold">Navigation</div>
                <div className="flex flex-col gap-4 text-white">
                  <button onClick={() => setCurrentPage('home')} className="text-left hover:text-brand-primary transition-colors">Home</button>
                  <button onClick={() => setCurrentPage('booking')} className="text-left hover:text-brand-primary transition-colors">Contact Us</button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-white/20 font-bold">Community</div>
                <div className="flex flex-col gap-4 text-white">
                  <a href="https://www.facebook.com/people/Simon-and-sam-restaurant/61560390165025/" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">Facebook</a>
                  <a href="https://wa.me/27736910940" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">WhatsApp</a>
                </div>
              </div>

              <div className="space-y-6 hidden lg:block">
                <div className="text-white/20 font-bold">Presence</div>
                <div className="text-white/60 space-y-2">
                  <div>Centurion, ZA</div>
                  <div className="text-brand-primary">Open 24/7</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] font-medium text-white/10">
            <div>&copy; 2026. All Rights Reserved.</div>
            <div className="flex items-center gap-4 italic lowercase font-serif text-xs">
              excellence in every beat.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ onBook }: { onBook: () => void; key?: string }) {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        >
          <div className="hero-overlay" />
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000" 
            alt="DJ Deck"
            className="w-full h-full object-cover scale-110 grayscale-[0.5] opacity-50 contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] z-10" />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto space-y-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-display font-black text-6xl md:text-[130px] leading-[0.85] uppercase tracking-tighter text-gradient pb-6"
          >
            The Beat <br />
            <span className="italic font-serif lowercase font-extralight tracking-normal opacity-90 block pt-4">of Centurion.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/40 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed tracking-wide italic"
          >
            Centurion’s premier destination for high-octane entertainment, world-class DJ sets, and a late-night kitchen that hits every note.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center pt-8"
          >
            <button 
              onClick={onBook}
              className="w-full md:w-auto px-16 py-6 bg-brand-primary text-black rounded-full font-display font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-transform gold-glow shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              Book Table
            </button>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Simon+And+Sam+Restaurant+Centurion" 
              target="_blank" 
              rel="noreferrer"
              className="w-full md:w-auto px-16 py-6 border border-white/10 rounded-full font-display font-bold uppercase tracking-[0.3em] text-[10px] hover:border-brand-primary hover:text-brand-primary transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              Directions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Philosophy - Entertainment x Food */}
      <section className="py-52 px-6 relative overflow-hidden bg-brand-card/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <div className="space-y-12 relative z-10">
            <span className="text-brand-primary text-[11px] font-bold uppercase tracking-[0.5em] block">The Philosophy</span>
            <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-[0.95] tracking-tighter">Entertainment <br />First.</h2>
            <div className="space-y-6">
              <p className="text-white/60 text-xl font-light leading-relaxed">
                Simon & Sam isn't just a destination—it's the heartbeat of the city. While our world-class kitchen serves gourmet 24-hour cuisine to keep you fueled, we are engineered for high-octane entertainment. 
              </p>
              <p className="text-white/40 text-lg font-light leading-relaxed italic border-l border-brand-primary/20 pl-8">
                From legendary DJ marathons that define the local scene to the exclusive, quiet luxury of our tactical VIP lounge, every moment here is a masterclass in Centurion culture.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="glass p-10 rounded-[40px] space-y-6 hover:border-brand-primary/30 transition-colors">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                <Music className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold text-white uppercase tracking-wider">The Rhythm</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">Local DJ legends and international vibes. Our sound system is tuned for the culture.</p>
            </div>
            
            <div className="glass p-10 rounded-[40px] space-y-6 hover:border-brand-primary/30 transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold text-white uppercase tracking-wider">The Plate</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">A supporting cast of gourmet bites. From signature wings to high-end platters available 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Refactored into separate sections */}
      <section className="relative">
        {/* Rating Section */}
        <div className="py-40 px-6 border-b border-white/5 bg-black/10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <div className="text-8xl md:text-[160px] font-serif text-brand-primary lowercase italic mb-4">4.8</div>
              <div className="text-[12px] uppercase tracking-[0.6em] text-white font-bold">Google Excellence</div>
            </div>
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Our commitment to excellence is reflected in the voices of our patrons. We maintain a gold-standard reputation by blending high-end hospitality with an unapologetic dedication to the local entertainment culture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 text-left">
              {REVIEWS.map((review, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -8, borderColor: 'rgba(212, 175, 55, 0.3)', boxShadow: '0 10px 40px -15px rgba(212, 175, 55, 0.2)' }}
                  className="glass p-8 rounded-3xl space-y-4 border-white/5 transition-colors"
                >
                  <div className="flex gap-1 text-brand-primary">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-sm text-white/60 italic font-serif leading-relaxed">"{review.text}"</p>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-white/30">— {review.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 24/7 Section */}
        <div className="py-40 px-6 border-b border-white/5 bg-brand-primary/5">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="text-7xl md:text-9xl font-display font-black text-white italic">24/7</div>
            <div className="text-[12px] uppercase tracking-[0.6em] text-brand-primary font-bold">The City That Never Sleeps</div>
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Time is an illusion at Simon & Sam. We operate on a continuous loop of high-energy beats and gourmet dining, ensuring that whether it's a sunrise breakfast or a midnight marathon set, the quality remains uncompromising. We are the perpetual heartbeat of Centurion, serving the culture around the clock.
            </p>
          </div>
        </div>

        {/* Elite Security Section */}
        <div className="py-40 px-6 border-b border-white/5 bg-black/20">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-brand-primary/10 rounded-full flex items-center justify-center border border-brand-primary/20">
                <ShieldCheck className="w-16 h-16 text-brand-primary" />
              </div>
            </div>
            <div className="text-[12px] uppercase tracking-[0.6em] text-white font-bold">Elite Tactical Security</div>
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Your safety is our cornerstone. We employ a multi-layered, tactical security approach featuring highly trained on-site personnel and state-of-the-art surveillance systems. This creates a fortified sanctuary where you can immerse yourself in the experience with complete peace of mind, knowing that our elite team is always several steps ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Abstract Features Section */}
      <section className="py-52 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <div className="space-y-12 relative z-10">
            <span className="text-brand-primary text-[11px] font-bold uppercase tracking-[0.5em] block">The Fortress</span>
            <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-[0.95] tracking-tighter">Secure <br />Luxury.</h2>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-md border-l border-brand-primary/20 pl-8 italic">
              "Tactical peace of mind so you can lose yourself in the beat. We provide a 24-hour safe haven for Centurion's elite."
            </p>
            <div className="grid grid-cols-1 gap-10 pt-10">
              <div className="flex gap-8 items-center group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-1">Tactical Team</h4>
                  <p className="text-xs text-white/20 uppercase tracking-widest font-medium">On-Site 24/7 Response</p>
                </div>
              </div>
              <div className="flex gap-8 items-center group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-1">Safe Exit</h4>
                  <p className="text-xs text-white/20 uppercase tracking-widest font-medium">Guarded Departure Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 relative">
            {REVIEWS.slice(0, 2).map((review, i) => (
              <div key={i} className={`glass p-10 rounded-[40px] border-brand-primary/10 ${i === 1 ? 'ml-12 opacity-60' : ''}`}>
                <div className="flex gap-1 mb-6 text-brand-primary/60">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-lg font-serif italic text-white/80 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="text-[10px] uppercase font-black tracking-widest text-brand-primary">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-60 px-6 text-center relative">
        <div className="golden-orb w-[800px] h-[800px] bg-brand-primary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto space-y-16 relative z-10">
          <h2 className="text-7xl md:text-[140px] font-serif italic font-light text-white leading-none tracking-tighter uppercase transition-all">
            Join The <br /> <span className="text-gradient not-italic font-display font-black">CULTURE.</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBook}
            className="px-24 py-8 bg-white text-black rounded-full font-display font-black uppercase tracking-[0.5em] text-xs shadow-[0_0_80px_-20px_rgba(255,255,255,0.4)] transition-all"
          >
            Secure A Table
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
}

function BookingPage({ onBack }: { onBack: () => void; key?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    guests: '2',
    notes: ''
  });

  const handleWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hi Simon & Sam! I'd like to book a table for ${formData.guests} people on ${formData.date}. Name: ${formData.name}. ${formData.notes ? `Notes: ${formData.notes}` : ''}`;
    window.open(`https://wa.me/27736910940?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "anticipate" }}
      className="pt-32 pb-40 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
        {/* Contact Info */}
        <div className="md:col-span-5 space-y-20">
          <div>
            <button onClick={onBack} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors mb-12 text-[10px] uppercase tracking-widest">
              <ChevronRight className="w-4 h-4 rotate-180" /> Back to Home
            </button>
            <h2 className="text-6xl font-serif italic text-white mb-6">Contact Us.</h2>
            <p className="text-white/60 font-light leading-relaxed max-w-sm">
              We're open 24/7 to the culture of Centurion. Secure your spot in the VIP corner or the main deck pulse.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl text-brand-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold uppercase text-[10px] tracking-widest text-white/30 mb-2">Location</h4>
                <p className="text-sm font-medium">1611 Rethabile St, Olievenhoutbos 13,<br />Centurion, 0187</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl text-brand-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold uppercase text-[10px] tracking-widest text-white/30 mb-2">Direct Line</h4>
                <a href="https://wa.me/27736910940" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-2">
                  073 691 0940 <MessageCircle className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl text-brand-primary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold uppercase text-[10px] tracking-widest text-white/30 mb-2">Always Here</h4>
                <p className="text-sm font-medium italic">Open 24 Hours / 7 Days a Week</p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5">
             <h4 className="font-display font-bold uppercase text-[10px] tracking-widest text-white/30 mb-6 font-serif italic">Find us on Social</h4>
             <div className="flex gap-6">
               <a href="https://www.facebook.com/people/Simon-and-sam-restaurant/61560390165025/" className="text-white hover:text-brand-primary transition-colors"><Facebook className="w-6 h-6" /></a>
               <a href="https://wa.me/27736910940" className="text-white hover:text-brand-primary transition-colors"><MessageCircle className="w-6 h-6" /></a>
             </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-7">
          <div className="bg-brand-card rounded-3xl p-8 md:p-16 border border-white/5 shadow-3xl">
            <div className="mb-12">
              <a 
                href="https://wa.me/27736910940" 
                target="_blank" 
                rel="noreferrer" 
                className="group inline-block"
              >
                <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-brand-primary transition-colors">Contact Our Team</h3>
              </a>
              <p className="text-xs text-white/40 uppercase tracking-widest">Connect instantly via WhatsApp for bookings & enquiries</p>
            </div>

            <form onSubmit={handleWhatsApp} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter full name"
                  className="w-full bg-brand-dark border-b border-white/10 py-5 px-1 focus:border-brand-primary outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Preferred Date</label>
                  <input 
                    required
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-brand-dark border-b border-white/10 py-5 px-1 focus:border-brand-primary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Number of Guests</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-brand-dark border-b border-white/10 py-5 px-1 focus:border-brand-primary outline-none transition-colors appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8,10,15].map(n => (
                      <option key={n} value={n}>{n} People</option>
                    ))}
                    <option value="group">Large Group (20+)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Special Occasion / Notes</label>
                <textarea 
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="Anything we should know?"
                  rows={4}
                  className="w-full bg-zinc-900 border border-white/5 rounded-2xl py-4 px-4 focus:border-brand-primary outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full py-6 bg-brand-primary text-black rounded-full font-display font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
                >
                  Send WhatsApp Message <MessageCircle className="w-4 h-4" />
                </button>
                <p className="text-center text-white/20 text-[9px] uppercase tracking-widest mt-6">
                  Tapping will open WhatsApp to message our team directly
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
