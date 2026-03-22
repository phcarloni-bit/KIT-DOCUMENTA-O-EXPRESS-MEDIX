export function FooterSection() {
  return (
    <footer className="bg-teal-950 text-teal-400 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 font-bold text-2xl text-teal-700 tracking-widest">MEDIX IA</div>
        <p className="mb-8 text-sm leading-relaxed max-w-3xl mx-auto text-teal-600">
          <strong className="text-teal-500">Aviso Legal:</strong> O Kit Documentação Express MEDIX é um produto educacional e informativo. Ele não substitui consultoria jurídica, assessoria contábil ou técnica. Não promete nem garante regularização ou aprovação por órgãos fiscalizadores.
        </p>
        <div className="h-px w-full bg-teal-900/50 mb-8"></div>
        <p className="text-sm text-teal-700">© {new Date().getFullYear()} MEDIX IA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
