import { Check, CheckCircle2, X, XCircle } from 'lucide-react';

export function TargetAudienceSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="bg-emerald-50/50 p-8 md:p-10 rounded-3xl border border-emerald-100">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-8 flex items-center gap-4">
            <div className="bg-emerald-100 p-2 rounded-full">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>
            Este kit é para você, se:
          </h2>
          <ul className="space-y-6">
            {[
              'É médica ou gestora de clínica',
              'Quer organizar sua clínica, mas não sabe por onde começar',
              'Já está cansada de informação solta e promessas vazias',
              'Quer tomar decisões com base, não por impulso',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50/50 p-8 md:p-10 rounded-3xl border border-red-100">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-8 flex items-center gap-4">
            <div className="bg-red-100 p-2 rounded-full">
              <X className="w-8 h-8 text-red-600" />
            </div>
            Este kit NÃO é para:
          </h2>
          <ul className="space-y-6">
            {[
              'Quem espera regularização completa com um clique',
              'Quem busca assessoria jurídica',
              'Quem não está disposta a se envolver minimamente no processo',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
