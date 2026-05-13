import { Layout, Section } from "../components/Layout";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen,
  UserCheck,
  Layers,
  Sparkles,
  Key,
  Globe,
  Droplets,
  Clock,
  Users,
  Book,
  MessageCircle,
  History,
  Lightbulb,
  Home,
  Star,
  Coins,
  Gem,
  Brain,
  Heart,
  Hourglass,
  Compass
} from "lucide-react";
import { Link } from "react-router-dom";
import { SKOOL_URL, gridUrl } from "../constants";

const paths = [
  { icon: UserCheck, name: "Ritornati all'Islam", description: "Per chi vuole ricominciare il proprio percorso con basi solide e senza giudizio" },
  { icon: Layers, name: "L'Islam a fondo", description: "Una comprensione olistica e sistematica della religione islamica" },
  { icon: Sparkles, name: "Allah", description: "Conoscere Allah attraverso i Suoi nomi, attributi e la teologia islamica autentica" },
  { icon: Key, name: "Shahada — il 1° pilastro", description: "Il significato profondo della testimonianza di fede" },
  { icon: Globe, name: "Musulmani in Europa", description: "L'Islam vissuto nel contesto occidentale, con le sue sfide specifiche" },
  { icon: Droplets, name: "Wudu — reso facile", description: "Il fiqh della purificazione spiegato in modo chiaro e accessibile" },
  { icon: Clock, name: "Salah — resa facile", description: "Il fiqh della preghiera, dalla teoria alla pratica quotidiana" },
  { icon: Users, name: "Questioni femminili", description: "Regole islamiche per la donna rese facili: mestruo, maternità e altro" },
  { icon: Book, name: "Corano", description: "Lezioni di tafsir su sure selezionate, per leggere il Corano con comprensione" },
  { icon: MessageCircle, name: "Hadith", description: "Le scienze del hadith e i testi profetici fondamentali" },
  { icon: History, name: "Biografia profetica", description: "La vita del Profeta ﷺ raccontata in profondità" },
  { icon: Lightbulb, name: "Luci della sapienza", description: "Opere sapienziali classiche adattate in pillole spirituali" },
  { icon: Home, name: "Ahl Al-Bayt — la famiglia profetica", description: "La famiglia del Profeta ﷺ, la sua storia e il suo ruolo" },
  { icon: Star, name: "Vite straordinarie", description: "Biografie di Compagni, sapienti e figure islamiche che cambiano la prospettiva" },
  { icon: Coins, name: "Zakat — il 3° pilastro", description: "Il fiqh della zakat e il suo significato spirituale e sociale" },
  { icon: Gem, name: "Migliori donne", description: "Le grandi figure femminili dell'Islam e i loro insegnamenti" },
  { icon: Brain, name: "Ideologie", description: "Come affrontare le questioni ideologiche e i dibattiti con i non musulmani" },
  { icon: Heart, name: "Spiritualità", description: "Il lavoro interiore, la purificazione del cuore e il legame con Allah" },
  { icon: Hourglass, name: "Fine dei tempi", description: "I grandi segni del Giorno del Giudizio e come prepararsi" },
  { icon: Compass, name: "Adab — la prima stazione", description: "L'etica e la morale islamica come fondamento del percorso" },
];

export default function EducationPage() {
  return (
    <Layout>
      <Section className="bg-white">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-blue mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-5xl font-bold mb-4 tracking-tight">MioShaykh Education</h1>
            <p className="text-2xl text-zinc-600 mb-12 leading-tight">Oltre 20 percorsi strutturati per imparare l'Islam correttamente</p>
            
            <div className="prose prose-lg text-zinc-600 max-w-none space-y-6">
              <p>
                MioShaykh Education è il nucleo del progetto — la prima cosa da costruire, la più importante da custodire.
              </p>
              <p>
                Non lezioni sparse, ma percorsi organizzati in sequenza progressiva, ciascuno con video integrale, approfondimento scritto e infografica riassuntiva. I percorsi coprono le principali scienze islamiche: Aqidah, Fiqh, Corano, Sirah, Spiritualità, Adab, Zakat e molti altri.
              </p>
              <p>
                Sotto trovi l'elenco dei percorsi attualmente disponibili e in fase di organizzazione. Stiamo lavorando costantemente per organizzare tutti i contenuti in oltre 20 percorsi strutturati.
              </p>
              <p>
                Ogni abbonamento sostiene questo lavoro e permette di continuare a produrre contenuti di qualità.
              </p>
            </div>
            
            <div className="mt-16">
              <a 
                href={SKOOL_URL}
                className="bg-brand-blue hover:bg-brand-blue-dark text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center sm:inline-flex gap-3 transition-all shadow-xl shadow-brand-blue/20 group"
              >
                Esplora i percorsi
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="sticky top-32">
            <img 
              src={gridUrl} 
              alt="MioShaykh Education Courses Grid" 
              className="w-full h-auto rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>
      <Section className="bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {paths.map((path, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <path.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-zinc-900 mb-1">{path.name}</h3>
                <p className="text-zinc-500 text-sm leading-tight">{path.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-zinc-500 italic mb-12 max-w-3xl mx-auto text-lg">
              Se non trovi il percorso che cerchi, puoi richiederlo direttamente allo Shaykh. Lui lo tratterà con una risposta dedicata o iniziando un percorso completo — accessibile poi a tutta la community.
            </p>

            <a 
              href={SKOOL_URL}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-12 py-6 rounded-full font-bold text-xl inline-flex items-center gap-3 transition-all shadow-xl shadow-brand-blue/20 transform hover:-translate-y-1"
            >
              Inizia la prova gratuita
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
