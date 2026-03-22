import { CheckCircle2 } from 'lucide-react';

export function SneakPeekSection() {
  return (
    <section className="py-24 px-4 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">Por dentro do Kit: O que você vai acessar hoje</h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Chega de teorias complexas. Veja como as ferramentas são simples, visuais e prontas para uso imediato.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 shadow-inner relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border border-gray-300 bg-emerald-500 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Alvará Sanitário</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-700 rounded">EM DIA</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border border-gray-300"></div>
                      <span className="text-sm font-medium text-gray-700">PGRSS</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-700 rounded">VENCIDO</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded border border-gray-300"></div>
                      <span className="text-sm font-medium text-gray-700">LTCAT</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-amber-100 text-amber-700 rounded">FALTANDO</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-900 mb-2">Checklist Visual (Semaforo)</h3>
              <p className="text-gray-600 leading-relaxed">
                Bateu o olho, você sabe o que está certo (Verde), o que precisa de atenção (Amarelo) e o que é risco imediato (Vermelho). Sem jargões jurídicos.
              </p>
            </div>
          </div>

          <div className="space-y-6 md:order-last">
            <div className="bg-teal-50 p-6 rounded-3xl border border-teal-100 shadow-inner relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-6">
                <div className="w-1/3 h-4 bg-teal-100 rounded mb-6"></div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center shrink-0 text-sm">1</div>
                    <div className="space-y-2 flex-1">
                      <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                      <div className="w-full h-2 bg-gray-100 rounded"></div>
                      <div className="w-5/6 h-2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="flex gap-4 opacity-50">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 font-bold flex items-center justify-center shrink-0 text-sm">2</div>
                    <div className="space-y-2 flex-1">
                      <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                      <div className="w-full h-2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-teal-900 mb-2">Plano de Ação 7 Dias</h3>
              <p className="text-gray-600 leading-relaxed">
                Um passo a passo à prova de falhas. Você saberá exatamente qual documento pedir primeiro, para quem pedir e como organizar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
