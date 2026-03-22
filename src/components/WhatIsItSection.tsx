import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatIsItSection() {
  return (
    <section className="py-24 px-4 bg-teal-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">O que é o Kit Documentação Express MEDIX?</h2>
          <p className="text-xl md:text-2xl text-teal-200 max-w-2xl mx-auto font-light">
            É um diagnóstico guiado, criado para te mostrar:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            'O que é realmente obrigatório',
            'O que está faltando',
            'O que está vencido',
            'O que é prioridade',
            'Por onde começar com tranquilidade',
          ].map((item, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-teal-800/40 p-6 rounded-2xl border border-teal-700/50 flex items-center gap-4 hover:bg-teal-800/60 transition-colors"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
              <span className="text-lg font-medium">{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-3xl text-center max-w-3xl mx-auto">
          <p className="text-amber-100 text-lg md:text-xl leading-relaxed">
            <strong className="text-amber-400 block mb-2 text-xl">📌 Importante:</strong>
            Este kit não regulariza sua clínica. Ele te devolve clareza, direção e tranquilidade para decidir o próximo passo com segurança.
          </p>
        </div>
      </div>
    </section>
  );
}
