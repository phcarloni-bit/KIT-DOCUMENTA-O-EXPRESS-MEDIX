import { Check, CheckCircle2, X, XCircle } from 'lucide-react';

export function WhoIsThisForSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-900 mb-16">
          Para quem é (e para quem NÃO é) o Kit Documentação Express?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-emerald-50/50 p-8 md:p-10 rounded-3xl border border-emerald-100 relative">
            <div className="absolute -top-5 left-8 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider shadow-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> É PRA VOCÊ SE...
            </div>
            <ul className="space-y-6 mt-4">
              {[
                'Você é médica ou gestora e sente que a clínica "funciona", mas vive com uma insegurança silenciosa sobre a documentação.',
                'Você já tentou se organizar, mas não sabe por onde começar e acaba procrastinando.',
                'Você quer ter clareza absoluta do que é obrigatório para o seu negócio específico.',
                'Você prefere prevenir problemas do que remediar multas e dores de cabeça com a fiscalização.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-700 text-lg leading-relaxed">
                  <Check className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50/50 p-8 md:p-10 rounded-3xl border border-red-100 relative">
            <div className="absolute -top-5 left-8 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider shadow-sm flex items-center gap-2">
              <XCircle className="w-4 h-4" /> NÃO É PRA VOCÊ SE...
            </div>
            <ul className="space-y-6 mt-4">
              {[
                'Você acha que "nunca vai dar nada" e prefere contar com a sorte em relação à fiscalização.',
                'Você está procurando um serviço de consultoria jurídica completa (este é um kit de auto-implementação e clareza).',
                'Você não está disposta a dedicar algumas horas para organizar a base do seu negócio.',
                'Você já tem um departamento jurídico interno cuidando de 100% da sua conformidade.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-700 text-lg leading-relaxed">
                  <X className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-16 bg-teal-50 p-8 rounded-2xl border border-teal-100 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold text-teal-900">
            O problema não é falta de esforço.
            <br />
            <span className="text-emerald-600 mt-2 inline-block font-black">É falta de clareza. E clareza é o que este Kit entrega.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
