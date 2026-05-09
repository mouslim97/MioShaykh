import { Layout, Section } from "../components/Layout";
import { ArrowLeft, ArrowRight, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import { SKOOL_URL } from "../constants";

export default function KidsPage() {
  return (
    <Layout>
      <Section className="bg-white">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-blue mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </Link>
        
        <div className="max-w-4xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-zinc-100 text-zinc-400 rounded-2xl flex items-center justify-center">
              <Baby className="w-8 h-8" />
            </div>
            <span className="bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              In sviluppo
            </span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 tracking-tight">MioShaykh Kids</h1>
          
          <div className="prose prose-lg text-zinc-600 max-w-none space-y-6 mt-12">
            <p>
              In Italia non esistono contenuti islamici di qualità per bambini — in italiano, pensati per chi cresce in occidente, radicati nella tradizione autentica. MioShaykh Kids nasce per colmare questo vuoto.
            </p>
            <p>
              Libri illustrati, esercizi, cartoni animati, attività — contenuti che prendono la conoscenza islamica prodotta da MioShaykh Education e la rielaborano per i più piccoli.
            </p>
            <p>
              Se hai figli, questo dipartimento è pensato anche per loro. È un progetto in costruzione. Chi si iscrive oggi sta contribuendo a renderlo possibile.
            </p>
          </div>
          
          <div className="mt-16">
            <a 
              href={SKOOL_URL}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center sm:inline-flex gap-3 transition-all shadow-xl shadow-brand-blue/20 group"
            >
              Unisciti al progetto
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
