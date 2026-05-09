import { type ReactNode } from "react";
import { motion } from "motion/react";
// Using placeholders for now as image generation quota is temporarily exhausted
const gridUrl = "https://drive.google.com/thumbnail?id=1d_XyIbSI8E1Ryj2ALGslHXDdeYzjKh8f&sz=w1200";
const logoUrl = "https://drive.google.com/thumbnail?id=19yL3SEHVFVArrPpzqrhaeLmEXxkjvjIQ&sz=w500";
const profileUrl = "https://drive.google.com/thumbnail?id=1TpDSa61nZ8vwUR6nNWxb-oFhvKohNGWy&sz=w1000";
import { 
  CheckCircle2, 
  BookOpen, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  Heart,
  BookMarked,
  Video,
  Baby,
  Scale
} from "lucide-react";

// Direct links to assets were moved to imports above
const SKOOL_URL = "https://www.skool.com/mioshaykh";

const Section = ({ children, className = "", id = "" }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 sm:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-6 sm:px-12 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img 
          src={logoUrl} 
          alt="MioShaykh Logo" 
          className="h-10 w-10 rounded-full shadow-sm object-cover" 
          referrerPolicy="no-referrer"
        />
        <span className="font-display font-bold text-xl tracking-tight hidden sm:block">MioShaykh</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-600">
        <a href="#progetto" className="hover:text-brand-blue transition-colors">Il Progetto</a>
        <a href="#shaykh" className="hover:text-brand-blue transition-colors">Lo Shaykh</a>
        <a href="#vision" className="hover:text-brand-blue transition-colors">Ecosistema</a>
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

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              Conoscenza Islamica Autentica
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-zinc-900 leading-[1.1]">
              La tua guida sicura per vivere <span className="text-brand-blue">l'Islam</span> in Italia.
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
              Un ecosistema culturale affidabile per imparare, porre domande con serenità e rafforzare la tua fede, guidato dallo Shaykh Hisham Al-Sun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={SKOOL_URL}
                className="bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-blue/20 group"
              >
                Inizia la prova gratuita di 7 giorni
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-400">13$ al mese dopo la prova. Cancella quando vuoi.</p>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <Section id="progetto" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl mb-6">Il percorso spirituale non dovrebbe essere vissuto in solitudine.</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Oggi è facile sentirsi confusi tra mille opinioni contrastanti online e la mancanza di riferimenti autorevoli in lingua italiana. MioShaykh nasce per colmare questo vuoto, offrendo una guida sicura e un percorso di studi organico.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue/5 rounded-2xl -rotate-2" />
            <img 
              src={gridUrl} 
              alt="Il Progetto MioShaykh - Percorsi" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-lg object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Confusione Online", 
              desc: "Troppe opinioni contrastanti che generano dubbi invece di certezze." 
            },
            { 
              title: "Mancanza di Guide", 
              desc: "Risposte improvvisate o non qualificate a domande profonde sulla fede." 
            },
            { 
              title: "Solitudine", 
              desc: "Sentirsi soli nel proprio percorso di crescita senza una community di supporto." 
            },
            { 
              title: "Fede Frammentata", 
              desc: "Una conoscenza basata su post social invece che su percorsi strutturati." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#FAFAFA] border border-zinc-100"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-blue mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Shaykh Box */}
      <Section id="shaykh" className="bg-zinc-900 text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="text-4xl mb-8">Chi è lo Shaykh <span className="text-brand-blue">Hisham Al-Sun</span></h2>
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                Nato in Siria nel 1982, lo Shaykh Hisham è un sapiente sunnita specializzato in giurisprudenza islamica (<span className="text-white italic">fiqh</span>) e fondamenti della giurisprudenza (<span className="text-white italic">uṣūl al-fiqh</span>).
              </p>
              <p>
                Nel 2005 ha conseguito la laurea presso la prestigiosa università di <span className="font-semibold text-white">Al-Azhar</span>. Dal 2018 ricopre il ruolo di presidente del comitato della fatwa nella città di Kilis.
              </p>
              <p>
                Lo Shaykh è profondamente apprezzato per la sua capacità di comprendere le sfide specifiche dei musulmani in Occidente, proponendo una visione che unisce il rigore giuridico alla misericordia profetica.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                Laureato Al-Azhar 2005
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                Presidente Comitato Fatwa
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-brand-blue blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img 
                src={profileUrl} 
                alt="Shaykh Hisham Al-Sun Profile" 
                className="relative z-10 w-full h-full min-h-[500px] rounded-3xl object-cover shadow-2xl border border-white/10" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Cosa offre MioShaykh</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">Tutto ciò di cui hai bisogno per la tua crescita spirituale in un unico posto.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: BookOpen,
              title: "Oltre 20 percorsi strutturati",
              desc: "Scienze islamiche complete: Aqidah, Fiqh, Corano, Sirah, Spiritualità e molto altro."
            },
            {
              icon: MessageCircle,
              title: "Domande alla Community",
              desc: "Poni le tue domande pubblicamente; lo Shaykh risponde personalmente a tutti i dubbi."
            },
            {
              icon: ShieldCheck,
              title: "Consulenze Private",
              desc: "Domande private allo Shaykh con risposta entro 4 giorni, riservata e ponderata."
            },
            {
              icon: BookMarked,
              title: "Guide & Ebook Esclusivi",
              desc: "Materiale didattico approfondito creato appositamente per i membri della community."
            },
            {
              icon: Users,
              title: "Ambiente Moderato",
              desc: "Uno spazio privo di polemiche, futilità e improvvisazione. Solo crescita reale."
            },
            {
              icon: Heart,
              title: "Supporto Continuo",
              desc: "Non sei un numero. Sei parte di una famiglia che cresce insieme nella luce."
            }
          ].map((feature, i) => (
            <div key={i} className="group p-2">
              <feature.icon className="w-10 h-10 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vision / Departments Section */}
      <Section id="vision" className="bg-[#FAFAFA]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 leading-[1.1]">Stiamo costruendo il futuro dei musulmani in Italia.</h2>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
              MioShaykh non è solo una piattaforma di corsi. È un <span className="text-zinc-900 font-semibold italic uppercase text-lg tracking-wide">ecosistema culturale</span> in costruzione. Chi si iscrive oggi non è un semplice utente, ma un costruttore della comunità.
            </p>
            
            <div className="space-y-4">
              {[
                { name: "MioShaykh Fatwa", status: "Attivo", icon: Scale },
                { name: "MioShaykh Education", status: "Attivo", icon: BookOpen },
                { name: "MioShaykh Edizioni", status: "Attivo", icon: BookMarked },
                { name: "MioShaykh Studios", status: "In Sviluppo", icon: Video },
                { name: "MioShaykh Kids", status: "In Sviluppo", icon: Baby },
              ].map((dept, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-blue/5 text-brand-blue rounded-lg flex items-center justify-center">
                      <dept.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-zinc-800">{dept.name}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                    dept.status === "Attivo" ? "bg-emerald-100 text-emerald-700" : "bg-zinc-100 text-zinc-500"
                  }`}>
                    {dept.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-brand-blue p-12 rounded-[2rem] text-white shadow-2xl shadow-brand-blue/30">
            <h3 className="text-3xl mb-6">Investi nel domani.</h3>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              La tua quota mensile non serve solo a ripagare il tempo dello Shaykh. Ogni abbonamento è considerato una <span className="font-bold underline decoration-white/30 italic">sadaqa jāriya</span> — un contributo continuativo che sostiene la creazione di contenuti per le nuove generazioni.
            </p>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/20">
              <p className="text-sm font-medium mb-4 italic opacity-80">"Quando l'essere umano muore, le sue opere si interrompono, tranne in tre casi: una sadaqa jāriya, una conoscenza di cui si trae beneficio o un figlio pio che prega per lui."</p>
              <p className="text-right text-xs font-bold">— Sahih Muslim</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing / Final CTA */}
      <Section className="bg-white text-center">
        <div className="max-w-4xl mx-auto p-12 lg:p-20 rounded-[3rem] bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">Unisciti all'Ecosistema</h2>
            <div className="flex items-baseline justify-center gap-2 mb-10">
              <span className="text-7xl font-display font-bold">13$</span>
              <span className="text-zinc-400 text-xl">/ mese</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-xl mx-auto mb-12">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="text-zinc-300">7 giorni di prova gratuita</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="text-zinc-300">Ogni quota è Sadaqa Jariya</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="text-zinc-300">Accesso illimitato ai corsi</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-blue/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="text-zinc-300">Contatto diretto con lo Shaykh</span>
              </div>
            </div>
            
            <a 
              href={SKOOL_URL}
              className="inline-flex items-center gap-3 bg-white text-zinc-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-blue hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95 group"
            >
              Unisciti a MioShaykh
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-all" />
            </a>
            <p className="mt-8 text-zinc-500 text-sm">Nessuna commissione occulta. Cancella quando vuoi dalla tua area riservata.</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
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
            <a href="#" className="hover:text-brand-blue transition-colors">Contatti</a>
          </div>
          
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} MioShaykh. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
