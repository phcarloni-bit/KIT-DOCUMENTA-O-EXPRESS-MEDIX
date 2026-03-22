import { XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function BeliefBreakSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6 leading-tight">
          A maioria das clínicas <span className="text-red-500 relative inline-block">não é multada
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-200" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
            </svg>
          </span> por falta de documentos.
        </h2>
        <p className="text-xl text-gray-600 mb-12 font-medium">E sim por:</p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16 text-left">
          {[
            'Ter documentos desatualizados',
            'Guardar documentos errados',
            'Priorizar o que não é urgente',
            'Agir sem saber os riscos',
          ].map((item, i) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors"
            >
              <div className="bg-red-50 p-2 rounded-full">
                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
              </div>
              <span className="text-gray-800 font-medium text-lg">{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-200">
          <p className="text-2xl font-bold text-teal-800">Antes de regularizar tudo, você precisa enxergar o cenário real.</p>
        </div>
      </div>
    </section>
  );
}
