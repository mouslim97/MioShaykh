import { Layout, Section } from "../components/Layout";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { SKOOL_URL, gridUrl } from "../constants";

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
                Tra i percorsi attivi: Visitare Medina, Corano, La fine dei tempi, Ramadan. Stiamo lavorando costantemente per organizzare tutti i contenuti in oltre 20 percorsi strutturati.
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
    </Layout>
  );
}
