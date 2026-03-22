export function MarketChangeSection() {
  return (
    <section className="py-16 px-4 bg-red-600 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-6">O MERCADO JÁ MUDOU.</h2>
        <p className="text-xl md:text-2xl font-medium text-red-100 leading-relaxed">
          Pacientes estão mais exigentes e as fiscalizações mais rigorosas. O amadorismo na gestão não tem mais espaço.
          Quem não se adequar agora, ficará para trás.
        </p>
      </div>
    </section>
  );
}
