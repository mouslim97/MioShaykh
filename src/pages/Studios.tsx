import { Layout, Section } from "../components/Layout";
import { ArrowLeft, ArrowRight, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { SKOOL_URL } from "../constants";

export default function StudiosPage() {
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
              <Video className="w-8 h-8" />
            </div>
            <span className="bg-zinc-100 text-zinc-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              In sviluppo
            </span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 tracking-tight">MioShaykh Studios</h1>
          
          <div className="prose prose-lg text-zinc-600 max-w-none space-y-6 mt-12">
            <p>
              MioShaykh Studios è il dipartimento dedicato alla produzione di contenuti audiovisivi islamici in italiano — documentari, cortometraggi e contenuti per un pubblico adulto tra i 20 e i 35 anni.
            </p>
            <p>
              La base di contenuti costruita da MioShaykh Education diventerà il punto di partenza per produzioni che portino la conoscenza islamica in formati nuovi, capaci di raggiungere chi non frequenta moschee o community online.
            </p>
            <p>
              È un progetto in costruzione. Chi si iscrive oggi sta contribuendo a renderlo possibile.
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
