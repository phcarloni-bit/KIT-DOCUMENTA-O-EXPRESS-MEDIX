import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function PricingSection() {
  return (
    <section className="py-24 px-4 bg-teal-950 text-white relative" id="oferta">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500 blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Tudo o que você precisa para ter clareza regulatória</h2>
        <p className="text-xl text-teal-200 mb-16">Veja tudo o que você vai receber ao garantir seu acesso hoje:</p>

        <div className="bg-white text-gray-900 rounded-3xl p-1 max-w-3xl mx-auto shadow-2xl relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-teal-950 px-8 py-2.5 rounded-full font-black shadow-lg flex items-center gap-2 whitespace-nowrap uppercase tracking-wide border-2 border-white">
            <ShieldCheck className="w-5 h-5" />
            OFERTA ESPECIAL LIBERADA
          </div>

          <div className="bg-gray-50 rounded-[1.4rem] p-8 md:p-12 border border-gray-100">
            <div className="space-y-4 mb-10 text-left">
              {[
                { title: 'Checklist Mestre de Documentação Obrigatória', value: 'R$ 197' },
                { title: 'Guia prático "Por onde começar em 7 dias"', value: 'R$ 97' },
                { title: 'Modelo de controle de vencimentos', value: 'R$ 47' },
                { title: 'Aula: "Por que clínicas são multadas mesmo achando que estão certas"', value: 'R$ 97' },
                { title: 'BÔNUS: Mapa de Prioridades Regulatórias MEDIX', value: 'R$ 147' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between gap-4 py-3 border-b border-gray-200 last:border-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-gray-800 text-lg">{item.title}</span>
                  </div>
                  <span className="text-gray-400 line-through font-mono hidden sm:block">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 rounded-2xl p-6 mb-10 border border-teal-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-1.5 text-xs font-black tracking-widest uppercase shadow-sm">
                O Lote 1 se encerra em breve
              </div>
              <p className="text-teal-800 font-medium mb-2 mt-6">
                Valor total dos materiais: <span className="line-through">R$ 585,00</span>
              </p>
              <p className="text-gray-600 uppercase tracking-widest font-bold text-sm mb-4">Mas hoje, você leva tudo por apenas:</p>
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-2xl font-medium text-gray-500">12x de</span>
                <span className="text-7xl font-black text-teal-900 tracking-tighter">R$ 9,74</span>
              </div>
              <p className="text-gray-500 mt-2 font-medium">ou R$ 97,00 à vista</p>
              <div className="inline-block bg-emerald-100 text-emerald-800 font-bold mt-4 px-6 py-2 rounded-full text-sm">
                🧮 Menos de R$ 0,33 por dia
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-black py-6 px-8 rounded-xl text-2xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] flex flex-col items-center justify-center gap-1 mb-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>

              <span className="relative z-10">QUERO GARANTIR MEU KIT AGORA</span>
              <span className="text-sm font-semibold opacity-90 relative z-10">Acesso imediato e seguro</span>
            </motion.button>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Compra 100% Segura • Acesso enviado por e-mail
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
