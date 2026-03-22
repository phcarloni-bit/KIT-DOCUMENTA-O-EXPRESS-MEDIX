import { Check, CheckCircle2, X, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function BeforeAfterSection() {
  return (
    <section className="py-24 px-4 bg-teal-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-16">A transformação na sua rotina</h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-red-100 opacity-90 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-red-400"></div>
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <X className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Antes do Kit</h3>
            <ul className="space-y-5 text-left">
              {[
                'Confusão e excesso de informações',
                'Medo difuso de multas e fiscalização',
                'Documentos espalhados e desorganizados',
                'Ansiedade jurídica constante',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-600 text-lg">
                  <XCircle className="w-6 h-6 text-red-300 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border-2 border-emerald-500 relative transform md:scale-105 z-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-50/30 pointer-events-none"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-md z-20">
              O SEU FUTURO
            </div>
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative z-10">
              <Check className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-teal-900 mb-8 relative z-10">Depois do Kit</h3>
            <ul className="space-y-5 text-left relative z-10">
              {[
                'Clareza absoluta sobre o cenário',
                'Organização inicial estruturada',
                'Visão real e mapeada dos riscos',
                'Direção segura para decidir o próximo passo',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-800 font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
