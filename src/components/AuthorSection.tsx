export function AuthorSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-64 h-64 md:w-96 md:h-96 shrink-0 bg-teal-100 rounded-full overflow-hidden relative shadow-xl border-8 border-teal-50">
          <img
            src="/juliana.jpg"
            alt="Juliana - Especialista em Gestão de Clínicas"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">Quem criou o Kit?</h2>
          <h3 className="text-xl text-emerald-600 mb-8 font-semibold">Juliana — Especialista em Gestão de Clínicas</h3>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Criado por quem vive a gestão de clínicas na prática. Juliana entende a realidade da saúde e acredita que <strong className="text-teal-900">clareza vem antes da solução</strong>.
            </p>
            <p>
              Com experiência real em gestão, regulação e vivência prática no campo, ela criou o método <strong className="text-teal-900">MEDIX IA</strong> para transformar caos em tranquilidade.
            </p>
            <p>
              Sua especialidade é transformar o caos regulatório em clareza estratégica, com foco em clínicas de pequeno e médio porte, garantindo que você tome decisões com base em dados reais e não no medo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
