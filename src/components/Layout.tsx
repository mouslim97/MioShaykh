import { type ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logoUrl } from "../constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SKOOL_URL = "https://www.skool.com/mioshaykh";

export const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 sm:px-12 lg:px-24 scroll-mt-20 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = isHome ? [
    { name: "Il Progetto", href: "#progetto" },
    { name: "Lo Shaykh", href: "#shaykh" },
    { name: "La Visione", href: "#vision" },
  ] : [
    { name: "Home", href: "/", isLink: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 sm:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logoUrl} 
            alt="MioShaykh Logo" 
            className="h-10 w-10 rounded-full shadow-sm object-cover transition-transform group-hover:scale-105" 
            referrerPolicy="no-referrer"
          />
          <div className="block">
            <span className="font-display font-bold text-base sm:text-lg leading-tight block">MioShaykh</span>
            <p className="text-[0.45rem] sm:text-[0.55rem] text-zinc-500 uppercase tracking-widest leading-none mt-0.5">IL TUO SAPIENTE MUSULMANO DI FIDUCIA</p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-600">
          {navLinks.map((link) => (
            link.isLink ? (
              <Link key={link.name} to={link.href} className="hover:text-brand-blue transition-colors">{link.name}</Link>
            ) : (
              <a key={link.name} href={link.href} className="hover:text-brand-blue transition-colors">{link.name}</a>
            )
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a 
            href={SKOOL_URL}
            className="hidden sm:block bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20"
          >
            Inizia gratis
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-brand-blue transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="flex flex-col py-6 gap-2">
              {navLinks.map((link) => (
                link.isLink ? (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-4 font-medium text-zinc-600 hover:text-brand-blue transition-colors border-b border-zinc-50 last:border-0 block w-full"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const targetId = link.href.replace('#', '');
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-5 font-medium text-zinc-600 hover:text-brand-blue transition-colors border-b border-zinc-50 last:border-0 block w-full active:bg-zinc-50"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => (
  <footer className="py-12 px-6 sm:px-12 lg:px-24 bg-white border-t border-zinc-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-4">
        <img 
          src={logoUrl} 
          alt="Shaykh Hisham Al-Sun Avatar" 
          className="w-12 h-12 rounded-full object-cover shadow-sm" 
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-display font-bold text-lg">MioShaykh</h4>
          <p className="text-xs text-zinc-500 uppercase tracking-widest">IL TUO SAPIENTE MUSULMANO DI FIDUCIA</p>
        </div>
      </div>
      
      <div className="flex items-center gap-8 font-medium text-sm text-zinc-600">
        <a href={SKOOL_URL} className="hover:text-brand-blue transition-colors">Community Skool</a>
      </div>
      
      <p className="text-sm text-zinc-400">© {new Date().getFullYear()} MioShaykh. Tutti i diritti riservati.</p>
    </div>
  </footer>
);

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen pt-20">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
