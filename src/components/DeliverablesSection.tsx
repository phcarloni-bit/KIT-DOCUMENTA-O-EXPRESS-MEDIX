import { Calendar, FileText, Map as MapIcon, Video } from 'lucide-react';

export function DeliverablesSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">Tudo que você SAI com — bloco por bloco</h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Não é teoria. Cada bloco tem um entregável concreto que você leva para a sua clínica.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
              <span className="bg-emerald-100 text-emerald-800 py-1.5 px-4 rounded-full text-sm font-bold tracking-wide w-fit">ENTREGA IMEDIATA (DIA 0)</span>
              <h3 className="text-2xl md:text-3xl font-bold text-teal-900">O Arsenal Base</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                  <FileText className="w-7 h-7 text-teal-700 group-hover:text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">1. Checklist Mestre</h4>
                <p className="text-gray-600 leading-relaxed">
                  Seu Raio-X. Um diagnóstico visual com status, riscos e classificações de toda a documentação obrigatória.
                </p>
              </div>
              <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                  <MapIcon className="w-7 h-7 text-teal-700 group-hover:text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">2. Guia Prático de 7 Dias</h4>
                <p className="text-gray-600 leading-relaxed">
                  O plano de ação. Uma sequência simples e direta de "por onde começar" para evitar travamento e procrastinação.
                </p>
              </div>
              <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                  <Calendar className="w-7 h-7 text-teal-700 group-hover:text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">3. Controle de Vencimentos</h4>
                <p className="text-gray-600 leading-relaxed">
                  A ferramenta. Um modelo prático e pronto para usar para organizar vencimentos e nunca mais perder prazos.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
              <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-xs font-bold tracking-wide mb-4 inline-block">DIA 3</span>
              <h3 className="text-xl font-bold text-teal-900 mb-6">A Virada de Chave</h3>
              <div className="flex gap-5 items-start">
                <div className="bg-blue-50 p-3 rounded-xl shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Video className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">4. Aula de Conscientização</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Descubra "Por que clínicas são multadas mesmo achando que estão certas". O conhecimento que separa amadores de profissionais.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all group">
              <span className="bg-purple-100 text-purple-800 py-1 px-3 rounded-full text-xs font-bold tracking-wide mb-4 inline-block">DIA 8</span>
              <h3 className="text-xl font-bold text-teal-900 mb-6">O Acelerador</h3>
              <div className="flex gap-5 items-start">
                <div className="bg-purple-50 p-3 rounded-xl shrink-0 group-hover:bg-purple-100 transition-colors">
                  <MapIcon className="w-8 h-8 text-purple-600 group-hover:text-purple-700" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">5. Mapa de Prioridades MEDIX</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Identifique exatamente o que é crítico e o que pode esperar na sua regularização. Pare de apagar incêndios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
