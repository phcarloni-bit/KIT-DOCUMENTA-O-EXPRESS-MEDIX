import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

type FuturePacingSectionProps = {
  year: number;
  onCtaClick: () => void;
};

export function FuturePacingSection({ year, onCtaClick }: FuturePacingSectionProps) {
  return (
    <section className="py-24 px-4 bg-teal-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500 blur-[100px]"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Qual nível de profissionalismo você quer ter na sua clínica em {year}?</h2>
        <p className="text-xl md:text-2xl text-teal-200 mb-12 font-light leading-relaxed">
          Você tem uma chance agora que vai te fazer chegar em outro nível de gestão. Quero te mostrar o que a maioria não está vendo e evitar que você pague o preço do amadorismo.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-teal-900/50 p-8 rounded-2xl border border-teal-800/50">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-lg text-teal-50">Uma operação que roda de forma previsível e segura, sem depender de você o tempo todo.</p>
          </div>
          <div className="bg-teal-900/50 p-8 rounded-2xl border border-teal-800/50">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-lg text-teal-50">Sabendo exatamente quais documentos estão em dia e quais precisam da sua atenção.</p>
          </div>
          <div className="bg-teal-900/50 p-8 rounded-2xl border border-teal-800/50">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-lg text-teal-50">Com tempo e energia mental liberados para focar no que realmente importa: seus pacientes e o crescimento da clínica.</p>
          </div>
        </div>
        <div className="mt-16">
          <motion.button
            onClick={onCtaClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-black py-4 px-10 rounded-full text-xl transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)] inline-flex items-center gap-2"
          >
            EU QUERO ESSA TRANQUILIDADE <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
