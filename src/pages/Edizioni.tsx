import { Layout, Section } from "../components/Layout";
import { ArrowLeft, ArrowRight, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";
import { SKOOL_URL, bookImages } from "../constants";

export default function EdizioniPage() {
  const books = [
    {
      title: "Laylat al-Qadr — La Notte che può cambiare il tuo destino",
      subtitle: "Una guida pratica per preparare il cuore e cogliere la notte più preziosa dell'anno",
      desc: "Ogni anno Ramadan ci porta verso un momento unico: Laylat al-Qadr, la Notte del Destino. Una notte che può cambiare completamente la vita di una persona. Molti però vi arrivano senza preparazione. Questa guida nasce con un obiettivo preciso: aiutarti a preparare il cuore, comprendere la grandezza di questa notte e viverla nel modo migliore possibile. Non è una guida teorica — è un percorso spirituale pratico, in cinque capitoli.",
      image: bookImages.laylat,
      cta: "Accedi alla guida"
    },
    {
      title: "Dalla Guida al Consolidamento — Il percorso profetico dal legame con Allah alla trasformazione nella realtà",
      desc: "Esiste una legge divina nel modo in cui il cambiamento si realizza — tanto nella vita del singolo quanto nella storia delle comunità. Quella legge attraversa tre stadi: la guida che orienta, la vittoria che conferma, il consolidamento che stabilizza. Questa guida segue il modello profetico per aiutarti a riconoscere in quale punto ti trovi nel tuo percorso — e come avanzare. Include un protocollo pratico di 21 giorni.",
      image: bookImages.guida,
      cta: "Accedi alla guida"
    },
    {
      title: "Surat Al-Kahf — Una guida per capire le sfide del nostro tempo",
      subtitle: "Otto capitoli per leggere il presente con gli occhi della fede",
      desc: "Il Profeta ﷺ ha indicato Surat Al-Kahf come protezione dalla fitna più grande. Ma uno strumento funziona solo se viene usato, non solo tenuto in mano. Questa guida in otto capitoli racconta le quattro storie coraniche nella loro forza originale — la gioventù, la ricchezza, la conoscenza, il potere — e le legge alla luce di ciò che ci riguarda oggi. Non un commento accademico: un addestramento della vista.",
      image: bookImages.kahf,
      cta: "Accedi alla guida"
    }
  ];

  return (
    <Layout>
      <Section className="bg-white">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-blue mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </Link>
        
        <div className="max-w-4xl mb-20">
          <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
            <BookMarked className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">MioShaykh Edizioni</h1>
          <p className="text-2xl text-zinc-600 mb-8 leading-tight">Guide islamiche in italiano, scritte con rigore e profondità</p>
          <p className="text-xl text-zinc-600 leading-relaxed">
            MioShaykh Edizioni nasce dalla convinzione che la conoscenza islamica meriti di essere trasmessa anche attraverso la parola scritta — con cura, precisione e uno stile accessibile a chi non ha una formazione religiosa formale. Le guide sono prodotte a partire dalle lezioni di Shaykh Hisham Al-Sun e sono riservate ai membri della community. Ne arriveranno altre nel tempo.
          </p>
        </div>

        <div className="grid gap-12">
          {books.map((book, i) => (
            <div key={i} className="group bg-[#FAFAFA] rounded-[2.5rem] border border-zinc-100 p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">{book.title}</h3>
                {book.subtitle && <p className="text-brand-blue font-medium mb-6">{book.subtitle}</p>}
                <p className="text-lg text-zinc-600 mb-10 leading-relaxed">{book.desc}</p>
                <a 
                  href={SKOOL_URL}
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-all group/btn"
                >
                  {book.cta}
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
