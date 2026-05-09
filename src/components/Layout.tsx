import { type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { logoUrl } from "../constants";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 sm:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logoUrl} 
            alt="MioShaykh Logo" 
            className="h-10 w-10 rounded-full shadow-sm object-cover" 
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">MioShaykh</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-600">
          {isHome ? (
            <>
              <a href="#progetto" className="hover:text-brand-blue transition-colors">Il Progetto</a>
              <a href="#shaykh" className="hover:text-brand-blue transition-colors">Lo Shaykh</a>
              <a href="#vision" className="hover:text-brand-blue transition-colors">Ecosistema</a>
            </>
          ) : (
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
          )}
        </div>

        <a 
          href={SKOOL_URL}
          className="bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20"
        >
          Inizia gratis
        </a>
      </div>
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
          <p className="text-xs text-zinc-500 uppercase tracking-widest">Ecosistema Culturale Islamico</p>
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
