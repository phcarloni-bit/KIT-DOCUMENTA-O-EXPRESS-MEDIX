import { ShieldCheck } from 'lucide-react';

type GuaranteeSectionProps = {
  onCtaClick: () => void;
};

export function GuaranteeSection({ onCtaClick }: GuaranteeSectionProps) {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
            <ShieldCheck className="w-96 h-96 text-amber-900" />
          </div>

          <div className="shrink-0 relative">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10">
              <ShieldCheck className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-teal-900 text-emerald-400 font-black text-xs px-6 py-1.5 rounded-full shadow-md whitespace-nowrap z-20 border border-teal-700">
              RISCO ZERO
            </div>
          </div>

          <div className="text-center md:text-left relative z-10">
            <h2 className="text-3xl font-extrabold text-teal-900 mb-4">Garantia Incondicional de 7 Dias</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Eu confio tanto que este Kit vai te trazer a clareza que você precisa, que assumo todo o risco. Se você
              acessar o material e achar que não te ajudou a entender o que falta na sua clínica, basta enviar um
              único e-mail e <strong className="text-teal-900 bg-amber-200/50 px-1 rounded">devolvemos 100% do seu dinheiro</strong>. Sem
              perguntas, sem burocracia.
            </p>
            <button
              onClick={onCtaClick}
              className="text-teal-900 font-bold underline decoration-2 underline-offset-4 hover:text-emerald-600 transition-colors"
            >
              Acessar agora sem riscos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
