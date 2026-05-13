import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
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
  Scale,
  CircleHelp,
  RefreshCw,
  Compass,
  Puzzle,
  ChevronDown,
  Search,
  GitCompare,
  UserX,
  Flag,
  TrendingDown,
  Clock,
  Map,
  MessageSquare,
  Quote,
  Lightbulb,
  Languages,
  UserCircle,
  FileCheck,
  TrendingUp
} from "lucide-react";
import { Layout, Section } from "../components/Layout";
import { SKOOL_URL, gridUrl, profileUrl, founderUrl } from "../constants";

const departments = [
  { 
    name: "MioShaykh Fatwa", 
    tagline: "Le tue domande, con risposte qualificate e affidabili",
    status: "Attivo", 
    icon: Scale,
    path: "/fatwa"
  },
  { 
    name: "MioShaykh Education", 
    tagline: "Oltre 20 percorsi strutturati per imparare l'Islam correttamente",
    status: "Attivo", 
    icon: BookOpen,
    path: "/education"
  },
  { 
    name: "MioShaykh Edizioni", 
    tagline: "Guide islamiche in italiano, scritte con rigore",
    status: "Attivo", 
    icon: BookMarked,
    path: "/edizioni"
  },
  { 
    name: "MioShaykh Studios", 
    tagline: "Produzione di contenuti audiovisivi islamici in italiano",
    status: "In Sviluppo", 
    icon: Video,
    path: "/studios"
  },
  { 
    name: "MioShaykh Kids", 
    tagline: "Contenuti islamici di qualità per i più piccoli",
    status: "In Sviluppo", 
    icon: Baby,
    path: "/kids"
  },
];

const faqs = [
  {
    question: "Come posso inviare le mie domande al sapiente?",
    answer: "Iscrivendoti alla piattaforma, avrai subito la possibilità di chattare privatamente con lo Shaykh. Puoi anche fare le tue domande nelle sessioni live."
  },
  {
    question: "Lo Shaykh parla italiano?",
    answer: "Per adesso no. Ma grazie all'intelligenza artificiale sarà possibile chattare e capirsi lo stesso. La chat con lui sarà tutta in italiano. Nelle live invece ci sarà una traduzione simultanea."
  },
  {
    question: "Quanto dura il percorso?",
    answer: "È pensato per essere un percorso continuo, dato che il Profeta ﷺ ci raccomandò di rinnovare e lavorare sulla nostra fede continuamente e per tutta la vita."
  },
  {
    question: "Posso cancellare l'abbonamento mensile?",
    answer: "Sì, quando vuoi. Puoi sempre lasciare il tuo abbonamento come supporto per il progetto in modo che sia una elemosina per il bene dei musulmani italiani. Con poco puoi fare tanto."
  },
  {
    question: "C'è una scadenza per iscriversi?",
    answer: "No, ma è meglio iniziare subito per stare al passo con le brevi live giornaliere. L'obiettivo non è solo acquisire informazioni, bensì creare un'abitudine costante e sostenibile nel lungo termine."
  },
  {
    question: "Cosa mi perdo se non mi iscrivo subito?",
    answer: "L'occasione di far subito parte di una community di musulmani e musulmane dediti alla sapienza. Un posto dove il beneficio individuale e collettivo è immenso."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
  key?: string | number;
}) => {
  return (
    <div className="border-b border-zinc-100 last:border-0 overflow-hidden">
      <button 
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand-blue transition-colors group"
      >
        <span className="text-lg sm:text-xl font-medium pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-brand-blue/30 group-hover:bg-brand-blue/5 transition-colors ${isOpen ? 'bg-brand-blue/5 border-brand-blue/30 text-brand-blue' : 'text-zinc-400'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="pb-8 text-zinc-600 text-lg leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
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
              Il tuo sapiente musulmano di fiducia, per un <span className="text-brand-blue">percorso islamico</span> serio e guidato.
            </h1>
            <p className="text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
              Un <a href="#vision" className="text-zinc-800 font-medium underline underline-offset-4 decoration-zinc-300 hover:text-brand-blue hover:decoration-brand-blue transition-colors">ecosistema culturale</a> affidabile per imparare, porre domande con serenità e rafforzare la tua fede, guidato da Shaykh Hisham Al-Sun.
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
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            { text: "Hai un dubbio ma non sai a chi chiedere — e ogni volta che cerchi online finisci per avere più confusione di prima.", icon: Search },
            { text: "Trovi pareri contrastanti ovunque: c'è chi dice halal, chi dice haram, e non sai mai cosa valga per la tua situazione specifica.", icon: GitCompare },
            { text: "Hai provato a chiedere in gruppi o a persone online — ma non erano sapienti, e le risposte non ti hanno mai convinto davvero.", icon: UserX },
            { text: "Ti sei convertito all'Islam e non sai da dove iniziare, cosa studiare, a chi rivolgerti.", icon: Flag },
            { text: "La tua fede sale e scende — e nei momenti bassi non hai nessuno che ti aiuti a rialzarti.", icon: TrendingDown },
            { text: "Guardi chi si dedica all'Islam con ammirazione, ma ti senti in difetto perché gli impegni della vita non ti lasciano spazio.", icon: Clock },
            { text: "Vorresti un percorso serio e strutturato — non video sparsi su YouTube o post sui social — ma non sai da dove iniziare.", icon: Map },
            { text: "Hai domande profonde sull'Islam a cui non hai mai ricevuto risposte esaurienti, soddisfacenti e complete.", icon: MessageSquare }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-1">
                <item.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <p className="text-zinc-700 text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center max-w-2xl mx-auto">
          <Quote className="w-10 h-10 text-zinc-200 mx-auto mb-6" />
          <p className="text-zinc-500 italic text-xl lg:text-2xl leading-relaxed">
            "La fede nel cuore necessita di un lavoro continuo. Ma quando si è da soli, questo lavoro diventa ancora più difficile."
          </p>
          <div className="mt-6 flex flex-col items-center">
            <div className="h-px w-12 bg-zinc-200 mb-6" />
            <p className="text-zinc-400 text-sm uppercase tracking-[0.2em] font-medium">
              Ispirato all'insegnamento del Profeta Muhammad ﷺ
            </p>
          </div>
        </div>
      </Section>

      {/* Shaykh Box */}
      <Section id="shaykh" className="bg-zinc-900 text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h2 className="text-4xl mb-8">Chi è Shaykh <span className="text-brand-blue">Hisham Al-Sun</span></h2>
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
              <p>
                Nato in Siria nel 1982, Shaykh Hisham è un sapiente sunnita specializzato in giurisprudenza islamica (<span className="text-white italic">fiqh</span>) e fondamenti della giurisprudenza (<span className="text-white italic">uṣūl al-fiqh</span>).
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

      {/* Founder Section */}
      <Section id="fondatore" className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl mb-8">Chi c'è dietro MioShaykh</h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                Mi chiamo Amir Fallaha. Ho fondato MioShaykh insieme allo Shaykh Hisham Al-Sun.
              </p>
              <p>
                Negli anni ho cercato di contribuire alla comunità musulmana italiana in diversi modi: ho fondato Il Credente Production, un canale YouTube di traduzione di contenuti islamici con oltre 7.500 iscritti; ho guidato la traduzione della serie OMAR, l'unica serie islamica tradotta in italiano; ho divulgato su Instagram contenuti da cui centinaia di migliaia di persone hanno tratto beneficio; ho tradotto opere di sapienti classici e sono stato invitato come relatore in eventi e convegni in tutta Italia.
              </p>
              <p>
                Tutto questo mi ha messo in contatto con moltissimi musulmani — e mi ha fatto capire quanto fosse grande il numero di chi fatica a trovare qualcuno di affidabile a cui chiedere, a sentirsi al sicuro nell'esternare i propri dubbi, a mantenere un percorso spirituale costante e non solo episodico.
              </p>
              <p>
                La più grande sfida era sempre questa: non qualche ricarica spirituale di qualche giorno che poi svanisce non appena si torna al lavoro o all'università, ma qualcosa di continuo, radicato, vivo.
              </p>
              <p>
                Due anni fa, all'interno di una rete di sapienti musulmani, mi fu fatto il nome di Shaykh Hisham Al-Sun. Decisi di iniziare alcune sessioni con lui — e quello fu l'inizio di una serie di incontri che hanno migliorato profondamente la mia comprensione dell'Islam e elevato il mio percorso spirituale.
              </p>
              <p>
                Il suo modo di spiegare i precetti islamici, di presentare il ragionamento dietro ogni questione, la sua capacità di rispondere con elasticità, empatia e comprensione dei diversi contesti — mi ha fatto capire che era un dono di Allah per la nostra comunità.
              </p>
              <p>
                MioShaykh nasce da questa convinzione: i musulmani in Italia meritano una guida qualificata, continua, accessibile. Non informazioni sparse su internet. Un percorso vero.
              </p>
              <div className="mt-10 p-8 bg-brand-blue/5 border-l-4 border-brand-blue rounded-r-2xl">
                <p className="text-zinc-800 italic text-lg leading-relaxed mb-4">
                  "Trovare lo Shaykh Hisham è stato come trovare un medico in grado di curare il tuo dolore in un giorno, dopo mesi passati a cercare un rimedio senza riuscirci — o tamponando il problema con un antidolorifico."
                </p>
                <p className="text-zinc-500 text-sm">
                  — Amir Fallaha, fondatore di MioShaykh
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] rounded-[3rem] bg-zinc-50 overflow-hidden shadow-2xl border border-zinc-100 flex items-center justify-center relative"
            >
              <img 
                src={founderUrl} 
                alt="Amir Fallaha" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform group-hover:-translate-y-2 transition-transform duration-500">
                <p className="text-white font-display font-bold text-xl mb-1">Amir Fallaha</p>
                <p className="text-white/80 text-sm font-medium">Fondatore di MioShaykh</p>
              </div>
            </motion.div>
            {/* Decorative bloom */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] -z-10 group-hover:bg-brand-blue/10 transition-colors duration-700" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-zinc-200/20 rounded-full blur-[60px] -z-10" />
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section id="servizi" className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Cosa offre MioShaykh</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">Tutto ciò di cui hai bisogno per la tua crescita spirituale in un unico posto.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              title: "Chiarezza",
              desc: "Smetti di cercare ogni volta da dove iniziare. MioShaykh ti offre un percorso strutturato e progressivo, senza dispersione."
            },
            {
              icon: Languages,
              title: "In italiano",
              desc: "Non dovrai più affidarti a contenuti in arabo o in altre lingue. Tutto è pensato per chi vive e studia in italiano."
            },
            {
              icon: ShieldCheck,
              title: "Affidabilità",
              desc: "Niente risposte prese da Google o da siti ignoti. Ogni risposta viene da uno Shaykh qualificato, con una formazione verificata e riconosciuta."
            },
            {
              icon: UserCircle,
              title: "Personalizzazione",
              desc: "Le tue domande ricevono risposte calibrate sulla tua situazione specifica. Come avere un medico personale per la tua salute spirituale."
            },
            {
              icon: FileCheck,
              title: "Fonti verificate",
              desc: "Avrai la certezza di ricevere risposte radicate nelle fonti islamiche autentiche, trasmesse con onestà intellettuale e senza fanatismi."
            },
            {
              icon: TrendingUp,
              title: "Crescita continua",
              desc: "La fede sale e scende per tutti — ma ciò che cambia nel lungo termine è la tendenza. MioShaykh ti accompagna ogni giorno, non solo nei momenti di crisi."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              className="p-10 rounded-[2.5rem] bg-[#FAFAFA] border border-zinc-100 flex flex-col h-full group hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4 tracking-tight font-bold text-zinc-900">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed flex-grow text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Vision / Departments Section */}
      <Section id="vision" className="bg-[#FAFAFA]">
        {/* Header & Investment Card */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-8 leading-[1.1] tracking-tight">Stiamo costruendo il futuro dei musulmani in Italia.</h2>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-xl">
              MioShaykh non è solo una piattaforma di corsi. È un <span className="text-zinc-900 font-semibold italic uppercase text-lg tracking-wide">ecosistema culturale</span> in costruzione. Chi si iscrive oggi non è un semplice utente, ma un costruttore della comunità.
            </p>
          </div>
          
          <div className="bg-brand-blue p-10 rounded-[2.5rem] text-white shadow-2xl shadow-brand-blue/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-2xl mb-6 font-bold">Investi nel domani.</h3>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              La tua quota mensile è una <span className="font-bold underline decoration-white/30 italic">sadaqa jāriya</span>: sostiene la creazione di contenuti per le nuove generazioni.
            </p>
            <div className="p-5 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
              <p className="text-xs font-medium mb-3 italic opacity-80 leading-relaxed">"Quando l'essere umano muore, le sue opere si interrompono, tranne in tre casi: una sadaqa jāriya, una conoscenza di cui si trae beneficio o un figlio pio che prega per lui."</p>
              <p className="text-right text-[10px] font-bold tracking-widest uppercase">— Sahih Muslim</p>
            </div>
          </div>
        </div>

        {/* Large Department Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <Link 
              key={i} 
              to={dept.path}
              className={`group relative flex flex-col p-10 bg-white rounded-[3rem] border border-zinc-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                i === 0 || i === 1 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <dept.icon className="w-8 h-8" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${
                  dept.status === "Attivo" ? "bg-emerald-100 text-emerald-700" : "bg-zinc-100 text-zinc-500"
                }`}>
                  {dept.status}
                </span>
              </div>
              
              <div className="flex-grow">
                <h4 className="text-2xl font-bold text-zinc-900 group-hover:text-brand-blue transition-colors mb-4">{dept.name}</h4>
                <p className="text-zinc-500 text-lg leading-relaxed mb-10">{dept.tagline}</p>
              </div>

              <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                Scopri di più
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>

              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl group-hover:bg-brand-blue/10 transition-colors" />
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4">Domande frequenti</h2>
            <p className="text-zinc-600 text-lg">Tutto quello che c'è da sapere sul percorso MioShaykh.</p>
          </div>
          
          <div className="bg-white p-8 sm:p-12 rounded-[3rem] border border-zinc-100 shadow-sm">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === i}
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              />
            ))}
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
    </Layout>
  );
}
