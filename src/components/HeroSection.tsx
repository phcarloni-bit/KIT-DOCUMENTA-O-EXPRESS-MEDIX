import { AlertCircle, ArrowRight, Calendar, CheckCircle2, Clock, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

type HeroSectionProps = {
  onPrimaryCtaClick: () => void;
};

export function HeroSection({ onPrimaryCtaClick }: HeroSectionProps) {
  return (
    <section className="bg-teal-950 text-white pt-16 pb-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500 blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-teal-500 blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold tracking-widest mb-6 shadow-sm uppercase">
            <AlertCircle className="w-4 h-4" />
            Atenção: Médicas e Gestoras de Clínicas
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white">
            Descubra exatamente o que é obrigatório na sua clínica, o que está faltando e por onde começar
          </h1>
          <p className="text-xl md:text-2xl text-emerald-400 mb-10 font-medium max-w-4xl mx-auto">
            — sem pânico, sem terrorismo e sem promessas perigosas.
          </p>

          <div className="max-w-4xl mx-auto mb-10 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-800/50 aspect-video bg-black flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-white text-xs font-bold bg-black/50 px-2 py-1 rounded">AULA LIBERADA</span>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-emerald-500/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(16,185,129,0.6)] group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300">
                <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-bold tracking-wide text-sm md:text-base uppercase bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                Clique para assistir ao vídeo
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/20">
              <div className="h-full bg-emerald-500 w-1/3"></div>
            </div>
          </div>

          <motion.button
            onClick={onPrimaryCtaClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-black py-5 px-8 rounded-xl text-xl md:text-2xl transition-colors shadow-[0_0_40px_rgba(16,185,129,0.3)] flex flex-col items-center justify-center mx-auto gap-1 w-full max-w-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>

            <span className="flex items-center gap-2 relative z-10">
              QUERO TER CLAREZA AGORA <ArrowRight className="w-6 h-6" />
            </span>
            <span className="text-sm font-semibold opacity-90 relative z-10">Acesso imediato • Compra 100% segura</span>
          </motion.button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-teal-200/80 font-mono bg-teal-900/50 px-6 py-2 rounded-full border border-teal-800/50 mt-6 max-w-fit mx-auto">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" /> Aplicação em 30 min
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 hidden sm:block"></span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> Resultados no Dia 1
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-teal-300/80 text-sm font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Compra Segura
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Acesso Imediato
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" /> 7 Dias de Garantia
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-teal-200/60 text-sm font-medium mt-12">
            <span className="uppercase tracking-widest text-xs opacity-80 w-full md:w-auto mb-2 md:mb-0">Baseado nas normas de:</span>
            <div className="flex items-center gap-2 bg-teal-900/50 px-4 py-2 rounded-lg border border-teal-800/50">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>ANVISA</span>
            </div>
            <div className="flex items-center gap-2 bg-teal-900/50 px-4 py-2 rounded-lg border border-teal-800/50">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>CFM</span>
            </div>
            <div className="flex items-center gap-2 bg-teal-900/50 px-4 py-2 rounded-lg border border-teal-800/50">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Vigilância Sanitária</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
