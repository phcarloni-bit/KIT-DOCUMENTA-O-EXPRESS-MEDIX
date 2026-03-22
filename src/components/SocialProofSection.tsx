export function SocialProofSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-16">O que dizem sobre o método</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-left relative hover:shadow-lg transition-shadow">
            <div className="text-6xl text-teal-100 absolute top-6 right-8 font-serif">"</div>
            <div className="flex text-amber-400 mb-6 gap-1">{'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}</div>
            <p className="text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10">
              "O kit me ajudou a entender exatamente o que estava faltando. A clareza que eu precisava para parar de me
              preocupar à toa e começar a agir de forma estruturada."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">G</div>
              <div>
                <p className="font-bold text-teal-900">Gestora de Clínica</p>
                <p className="text-sm text-gray-500">Aluna do Método MEDIX</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-left relative hover:shadow-lg transition-shadow">
            <div className="text-6xl text-teal-100 absolute top-6 right-8 font-serif">"</div>
            <div className="flex text-amber-400 mb-6 gap-1">{'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}</div>
            <p className="text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10">
              "Parei de adiar e comecei com segurança. O checklist visual é perfeito para quem não tem tempo a perder e
              precisa de direcionamento rápido."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">M</div>
              <div>
                <p className="font-bold text-teal-900">Médica Proprietária</p>
                <p className="text-sm text-gray-500">Aluna do Método MEDIX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
