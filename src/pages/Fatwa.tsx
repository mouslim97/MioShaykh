import { Layout, Section } from "../components/Layout";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SKOOL_URL } from "../constants";

export default function FatwaPage() {
  return (
    <Layout>
      <Section className="bg-white">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-blue mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </Link>
        
        <div className="max-w-4xl">
          <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">MioShaykh Fatwa</h1>
          <p className="text-2xl text-zinc-600 mb-12 leading-tight">Le tue domande islamiche, con risposte qualificate</p>
          
          <div className="prose prose-lg text-zinc-600 max-w-none space-y-6">
            <p>
              MioShaykh Fatwa è il dipartimento dedicato alle domande giurisprudenziali. Ogni domanda — pubblica o privata — viene raccolta, tradotta in arabo e girata personalmente allo Shaykh Hisham Al-Sun, presidente del comitato della fatwa a Kilis.
            </p>
            <p>
              La risposta viene poi tradotta in italiano e restituita all'utente. Le domande pubbliche sono visibili a tutta la community: spesso la domanda di uno diventa la risposta di molti. Le domande private sono riservate e trattate con la cura e la discrezione che ogni situazione personale merita.
            </p>
            <p>
              Lo Shaykh risponde in media entro 4 giorni — non per velocità, ma per accuratezza.
            </p>
          </div>
          
          <div className="mt-16">
            <a 
              href={SKOOL_URL}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center sm:inline-flex gap-3 transition-all shadow-xl shadow-brand-blue/20 group"
            >
              Inizia la prova gratuita
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
