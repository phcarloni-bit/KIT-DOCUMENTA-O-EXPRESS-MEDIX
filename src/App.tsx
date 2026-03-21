import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  XCircle,
  ArrowRight,
  FileText,
  Calendar,
  Video,
  Map as MapIcon,
  ShieldCheck,
  ChevronDown,
  Check,
  X,
  Clock,
  Zap,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-teal-100/20 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left font-medium text-teal-900 hover:text-teal-700 focus:outline-none"
      >
        <span className="text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-teal-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the hero section (approx 600px)
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-emerald-200 selection:text-teal-900 pb-20 md:pb-0">
      
      {/* TOP ALERT BAR */}
      <div className="bg-amber-500 text-amber-950 text-center py-2 px-4 text-sm font-bold tracking-wide flex items-center justify-center gap-2 z-50 relative">
        <AlertCircle className="w-4 h-4" />
        <span>OFERTA ESPECIAL: ACESSO IMEDIATO AO KIT POR TEMPO LIMITADO</span>
      </div>

      {/* STICKY MOBILE CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 md:hidden shadow-[0_-10px_20px_rgba(0,0,0,0.05)] flex items-center justify-between gap-4"
          >
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Acesso Imediato</p>
              <p className="text-teal-900 font-black text-lg">12x R$ 9,74</p>
            </div>
            <button 
              onClick={scrollToOffer}
              className="bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-black py-3 px-6 rounded-xl text-sm transition-colors shadow-lg flex-1 text-center"
            >
              GARANTIR KIT
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="bg-teal-950 text-white pt-16 pb-24 px-4 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500 blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-teal-500 blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold tracking-widest mb-6 shadow-sm uppercase">
              <AlertCircle className="w-4 h-4" />
              Atenção: Médicas e Gestoras de Clínicas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white">
              Descubra exatamente o que é obrigatório na sua clínica, o que está faltando e por onde começar
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 mb-10 font-medium max-w-4xl mx-auto">
              — sem pânico, sem terrorismo e sem promessas perigosas.
            </p>

            {/* VSL / Video Placeholder */}
            <div className="max-w-4xl mx-auto mb-10 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-800/50 aspect-video bg-black flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Fake Video UI */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-white text-xs font-bold bg-black/50 px-2 py-1 rounded">AULA LIBERADA</span>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-emerald-500/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(16,185,129,0.6)] group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300">
                  <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <p className="text-white font-bold tracking-wide text-sm md:text-base uppercase bg-black/40 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  Clique para assistir ao vídeo
                </p>
              </div>

              {/* Fake Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/20">
                <div className="h-full bg-emerald-500 w-1/3"></div>
              </div>
            </div>

            <motion.button 
              onClick={scrollToOffer}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-black py-5 px-8 rounded-xl text-xl md:text-2xl transition-colors shadow-[0_0_40px_rgba(16,185,129,0.3)] flex flex-col items-center justify-center mx-auto gap-1 w-full max-w-2xl relative overflow-hidden group"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
              
              <span className="flex items-center gap-2 relative z-10">
                QUERO TER CLAREZA AGORA <ArrowRight className="w-6 h-6" />
              </span>
              <span className="text-sm font-semibold opacity-90 relative z-10">Acesso imediato • Compra 100% segura</span>
            </motion.button>

            {/* Speed of implementation micro-copy */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-teal-200/80 font-mono bg-teal-900/50 px-6 py-2 rounded-full border border-teal-800/50 mt-6 max-w-fit mx-auto">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-400" /> Aplicação em 30 min</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 hidden sm:block"></span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-400" /> Resultados no Dia 1</span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-teal-300/80 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Compra Segura
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Acesso Imediato
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> 7 Dias de Garantia
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-teal-200/60 text-sm font-medium mt-12">
              <span className="uppercase tracking-widest text-xs opacity-80 w-full md:w-auto mb-2 md:mb-0">Baseado nas normas de:</span>
              <div className="flex items-center gap-2 bg-teal-900/50 px-4 py-2 rounded-lg border border-teal-800/50">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>ANVISA</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-900/50 px-4 py-2 rounded-lg border border-teal-800/50">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>CFM</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-900/50 px-4 py-2 rounded-lg border border-teal-800/50">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Vigilância Sanitária</span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* MARKET CHANGE SECTION */}
      <section className="py-16 px-4 bg-red-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest mb-6">
            O MERCADO JÁ MUDOU.
          </h2>
          <p className="text-xl md:text-2xl font-medium text-red-100 leading-relaxed">
            Pacientes estão mais exigentes e as fiscalizações mais rigorosas. O amadorismo na gestão não tem mais espaço. Quem não se adequar agora, ficará para trás.
          </p>
        </div>
      </section>

      {/* WHO IS THIS FOR SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-900 mb-16">
            Para quem é (e para quem NÃO é) o Kit Documentação Express?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* É PRA VOCÊ */}
            <div className="bg-emerald-50/50 p-8 md:p-10 rounded-3xl border border-emerald-100 relative">
              <div className="absolute -top-5 left-8 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> É PRA VOCÊ SE...
              </div>
              <ul className="space-y-6 mt-4">
                {[
                  'Você é médica ou gestora e sente que a clínica "funciona", mas vive com uma insegurança silenciosa sobre a documentação.',
                  'Você já tentou se organizar, mas não sabe por onde começar e acaba procrastinando.',
                  'Você quer ter clareza absoluta do que é obrigatório para o seu negócio específico.',
                  'Você prefere prevenir problemas do que remediar multas e dores de cabeça com a fiscalização.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 text-lg leading-relaxed">
                    <Check className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NÃO É PRA VOCÊ */}
            <div className="bg-red-50/50 p-8 md:p-10 rounded-3xl border border-red-100 relative">
              <div className="absolute -top-5 left-8 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider shadow-sm flex items-center gap-2">
                <XCircle className="w-4 h-4" /> NÃO É PRA VOCÊ SE...
              </div>
              <ul className="space-y-6 mt-4">
                {[
                  'Você acha que "nunca vai dar nada" e prefere contar com a sorte em relação à fiscalização.',
                  'Você está procurando um serviço de consultoria jurídica completa (este é um kit de auto-implementação e clareza).',
                  'Você não está disposta a dedicar algumas horas para organizar a base do seu negócio.',
                  'Você já tem um departamento jurídico interno cuidando de 100% da sua conformidade.'
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
              O problema não é falta de esforço.<br/>
              <span className="text-emerald-600 mt-2 inline-block font-black">É falta de clareza. E clareza é o que este Kit entrega.</span>
            </p>
          </div>
        </div>
      </section>

      {/* BELIEF BREAK SECTION */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6 leading-tight">
            A maioria das clínicas <span className="text-red-500 relative inline-block">
              não é multada
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-200" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
            </span> por falta de documentos.
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-medium">E sim por:</p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16 text-left">
            {[
              'Ter documentos desatualizados',
              'Guardar documentos errados',
              'Priorizar o que não é urgente',
              'Agir sem saber os riscos'
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors"
              >
                <div className="bg-red-50 p-2 rounded-full">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                </div>
                <span className="text-gray-800 font-medium text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="inline-block bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-200">
            <p className="text-2xl font-bold text-teal-800">
              Antes de regularizar tudo, você precisa enxergar o cenário real.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS IT SECTION */}
      <section className="py-24 px-4 bg-teal-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O que é o Kit Documentação Express MEDIX?
            </h2>
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
              'Por onde começar com tranquilidade'
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

      {/* DELIVERABLES SECTION */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              Tudo que você SAI com — bloco por bloco
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Não é teoria. Cada bloco tem um entregável concreto que você leva para a sua clínica.
            </p>
          </div>

          <div className="space-y-8">
            {/* Dia 0 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
                <span className="bg-emerald-100 text-emerald-800 py-1.5 px-4 rounded-full text-sm font-bold tracking-wide w-fit">ENTREGA IMEDIATA (DIA 0)</span>
                <h3 className="text-2xl md:text-3xl font-bold text-teal-900">
                  O Arsenal Base
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                    <FileText className="w-7 h-7 text-teal-700 group-hover:text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">1. Checklist Mestre</h4>
                  <p className="text-gray-600 leading-relaxed">Seu Raio-X. Um diagnóstico visual com status, riscos e classificações de toda a documentação obrigatória.</p>
                </div>
                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                    <MapIcon className="w-7 h-7 text-teal-700 group-hover:text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">2. Guia Prático de 7 Dias</h4>
                  <p className="text-gray-600 leading-relaxed">O plano de ação. Uma sequência simples e direta de "por onde começar" para evitar travamento e procrastinação.</p>
                </div>
                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-2 group-hover:bg-emerald-100 transition-colors">
                    <Calendar className="w-7 h-7 text-teal-700 group-hover:text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">3. Controle de Vencimentos</h4>
                  <p className="text-gray-600 leading-relaxed">A ferramenta. Um modelo prático e pronto para usar para organizar vencimentos e nunca mais perder prazos.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Dia 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
                <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-xs font-bold tracking-wide mb-4 inline-block">DIA 3</span>
                <h3 className="text-xl font-bold text-teal-900 mb-6">
                  A Virada de Chave
                </h3>
                <div className="flex gap-5 items-start">
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Video className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">4. Aula de Conscientização</h4>
                    <p className="text-gray-600 leading-relaxed">Descubra "Por que clínicas são multadas mesmo achando que estão certas". O conhecimento que separa amadores de profissionais.</p>
                  </div>
                </div>
              </div>

              {/* Dia 8 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all group">
                <span className="bg-purple-100 text-purple-800 py-1 px-3 rounded-full text-xs font-bold tracking-wide mb-4 inline-block">DIA 8</span>
                <h3 className="text-xl font-bold text-teal-900 mb-6">
                  O Acelerador
                </h3>
                <div className="flex gap-5 items-start">
                  <div className="bg-purple-50 p-3 rounded-xl shrink-0 group-hover:bg-purple-100 transition-colors">
                    <MapIcon className="w-8 h-8 text-purple-600 group-hover:text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">5. Mapa de Prioridades MEDIX</h4>
                    <p className="text-gray-600 leading-relaxed">Identifique exatamente o que é crítico e o que pode esperar na sua regularização. Pare de apagar incêndios.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE SECTION */}
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
                'Quer tomar decisões com base, não por impulso'
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
                'Quem não está disposta a se envolver minimamente no processo'
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

      {/* BEFORE AND AFTER SECTION */}
      <section className="py-24 px-4 bg-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-16">A transformação na sua rotina</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-red-100 opacity-90 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-red-400"></div>
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <X className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Antes do Kit</h3>
              <ul className="space-y-5 text-left">
                {['Confusão e excesso de informações', 'Medo difuso de multas e fiscalização', 'Documentos espalhados e desorganizados', 'Ansiedade jurídica constante'].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600 text-lg">
                    <XCircle className="w-6 h-6 text-red-300 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl border-2 border-emerald-500 relative transform md:scale-105 z-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-emerald-50/30 pointer-events-none"></div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-md z-20">
                O SEU FUTURO
              </div>
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative z-10">
                <Check className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-teal-900 mb-8 relative z-10">Depois do Kit</h3>
              <ul className="space-y-5 text-left relative z-10">
                {['Clareza absoluta sobre o cenário', 'Organização inicial estruturada', 'Visão real e mapeada dos riscos', 'Direção segura para decidir o próximo passo'].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-800 font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SNEAK PEEK / INSIDE THE KIT SECTION */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              Por dentro do Kit: O que você vai acessar hoje
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Chega de teorias complexas. Veja como as ferramentas são simples, visuais e prontas para uso imediato.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mockup 1: Checklist */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                {/* Fake UI for Spreadsheet/Checklist */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-50">
                      <div className="flex items-center gap-3"><div className="w-4 h-4 rounded border border-gray-300 bg-emerald-500 flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-white" /></div><span className="text-sm font-medium text-gray-700">Alvará Sanitário</span></div>
                      <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-700 rounded">EM DIA</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-gray-50">
                      <div className="flex items-center gap-3"><div className="w-4 h-4 rounded border border-gray-300"></div><span className="text-sm font-medium text-gray-700">PGRSS</span></div>
                      <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-700 rounded">VENCIDO</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-gray-50">
                      <div className="flex items-center gap-3"><div className="w-4 h-4 rounded border border-gray-300"></div><span className="text-sm font-medium text-gray-700">LTCAT</span></div>
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

            {/* Mockup 2: Guia Prático */}
            <div className="space-y-6 md:order-last">
              <div className="bg-teal-50 p-6 rounded-3xl border border-teal-100 shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
                {/* Fake UI for Document */}
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

      {/* AUTHOR SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="w-64 h-64 md:w-96 md:h-96 shrink-0 bg-teal-100 rounded-full overflow-hidden relative shadow-xl border-8 border-teal-50">
            {/* Foto da Juliana */}
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

      {/* WHY SO CHEAP SECTION */}
      <section className="py-24 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 text-center">
            "Se o Kit é tão completo, por que custa apenas R$ 97?"
          </h2>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              Eu sei que o valor de <strong className="text-teal-900">R$ 97</strong> (ou 12x de R$ 9,74) parece baixo demais para o nível de clareza e segurança que este material entrega. E eu tenho <strong className="text-emerald-600">dois motivos muito transparentes</strong> para fazer isso:
            </p>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 mt-1">1</div>
              <p>
                <strong>Acessibilidade imediata:</strong> Eu quero que o preço não seja um obstáculo. Quero que qualquer médica ou gestora possa ter acesso a essa base de organização hoje mesmo, sem precisar pensar duas vezes.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0 mt-1">2</div>
              <p>
                <strong>O primeiro passo:</strong> Eu sei que, ao aplicar o Kit e ver a transformação na sua clínica, você vai confiar no meu trabalho. E no futuro, quando precisar de soluções mais avançadas de gestão, você lembrará de mim.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mt-8">
              <p className="text-amber-900 font-medium text-center">
                Não há pegadinhas. Não há mensalidades ocultas. É um pagamento único por um material que pode salvar sua clínica de multas de milhares de reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & CTA SECTION (THE STACK) */}
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
              {/* The Stack */}
              <div className="space-y-4 mb-10 text-left">
                {[
                  { title: 'Checklist Mestre de Documentação Obrigatória', value: 'R$ 197' },
                  { title: 'Guia prático "Por onde começar em 7 dias"', value: 'R$ 97' },
                  { title: 'Modelo de controle de vencimentos', value: 'R$ 47' },
                  { title: 'Aula: "Por que clínicas são multadas mesmo achando que estão certas"', value: 'R$ 97' },
                  { title: 'BÔNUS: Mapa de Prioridades Regulatórias MEDIX', value: 'R$ 147' }
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
                <p className="text-teal-800 font-medium mb-2 mt-6">Valor total dos materiais: <span className="line-through">R$ 585,00</span></p>
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
                {/* Shine effect */}
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

      {/* GUARANTEE SECTION (ENHANCED) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg relative overflow-hidden">
            {/* Decorative background seal */}
            <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
              <ShieldCheck className="w-96 h-96 text-amber-900" />
            </div>
            
            <div className="shrink-0 relative">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white relative z-10">
                <ShieldCheck className="w-16 h-16 text-white" />
              </div>
              {/* Ribbon effect */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-teal-900 text-emerald-400 font-black text-xs px-6 py-1.5 rounded-full shadow-md whitespace-nowrap z-20 border border-teal-700">
                RISCO ZERO
              </div>
            </div>
            
            <div className="text-center md:text-left relative z-10">
              <h2 className="text-3xl font-extrabold text-teal-900 mb-4">Garantia Incondicional de 7 Dias</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Eu confio tanto que este Kit vai te trazer a clareza que você precisa, que assumo todo o risco. 
                Se você acessar o material e achar que não te ajudou a entender o que falta na sua clínica, 
                basta enviar um único e-mail e <strong className="text-teal-900 bg-amber-200/50 px-1 rounded">devolvemos 100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
              </p>
              <button 
                onClick={scrollToOffer}
                className="text-teal-900 font-bold underline decoration-2 underline-offset-4 hover:text-emerald-600 transition-colors"
              >
                Acessar agora sem riscos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-16">O que dizem sobre o método</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-left relative hover:shadow-lg transition-shadow">
              <div className="text-6xl text-teal-100 absolute top-6 right-8 font-serif">"</div>
              <div className="flex text-amber-400 mb-6 gap-1">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10">
                "O kit me ajudou a entender exatamente o que estava faltando. A clareza que eu precisava para parar de me preocupar à toa e começar a agir de forma estruturada."
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
              <div className="flex text-amber-400 mb-6 gap-1">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10">
                "Parei de adiar e comecei com segurança. O checklist visual é perfeito para quem não tem tempo a perder e precisa de direcionamento rápido."
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

      {/* FUTURE PACING SECTION */}
      <section className="py-24 px-4 bg-teal-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500 blur-[100px]"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Qual nível de profissionalismo você quer ter na sua clínica em {new Date().getFullYear()}?
          </h2>
          <p className="text-xl md:text-2xl text-teal-200 mb-12 font-light leading-relaxed">
            Você tem uma chance agora que vai te fazer chegar em outro nível de gestão. Quero te mostrar o que a maioria não está vendo e evitar que você pague o preço do amadorismo.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-teal-900/50 p-8 rounded-2xl border border-teal-800/50">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-lg text-teal-50">Uma operação que roda de forma previsível e segura, sem depender de você o tempo todo.</p>
            </div>
            <div className="bg-teal-900/50 p-8 rounded-2xl border border-teal-800/50">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-lg text-teal-50">Sabendo exatamente quais documentos estão em dia e quais precisam da sua atenção.</p>
            </div>
            <div className="bg-teal-900/50 p-8 rounded-2xl border border-teal-800/50">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-lg text-teal-50">Com tempo e energia mental liberados para focar no que realmente importa: seus pacientes e o crescimento da clínica.</p>
            </div>
          </div>
          <div className="mt-16">
            <motion.button 
              onClick={scrollToOffer}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-black py-4 px-10 rounded-full text-xl transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)] inline-flex items-center gap-2"
            >
              EU QUERO ESSA TRANQUILIDADE <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-900 mb-16">Dúvidas Frequentes</h2>
          <div className="space-y-2">
            <FAQItem 
              question="1. O Kit regulariza minha clínica?" 
              answer="Não. Ele traz clareza sobre o que é obrigatório, o que está faltando e por onde começar. É o passo fundamental antes de qualquer regularização." 
            />
            <FAQItem 
              question="2. É um curso?" 
              answer="Não. É um kit prático com diagnóstico e guias simples para você aplicar imediatamente, sem precisar assistir horas de aulas teóricas." 
            />
            <FAQItem 
              question="3. E se eu precisar de ajuda depois?" 
              answer="Você pode seguir para a Consultoria MEDIX IA ou usar nosso produto de suporte avançado para acompanhamento personalizado." 
            />
            <FAQItem 
              question="4. Como recebo o Kit?" 
              answer="Imediatamente por email, logo após a confirmação do pagamento. Você receberá os dados de acesso à plataforma." 
            />
            <FAQItem 
              question="5. Tem garantia?" 
              answer="Sim. Você tem 7 dias de garantia incondicional com 100% de reembolso caso o material não atenda suas expectativas. Risco zero." 
            />
            <FAQItem 
              question="6. Tenho suporte?" 
              answer="Sim. Se você tiver alguma dúvida sobre a compra do Kit, é só chamar nossa equipe no botão de WhatsApp aqui no canto da tela!" 
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-teal-950 text-teal-400 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 font-bold text-2xl text-teal-700 tracking-widest">
            MEDIX IA
          </div>
          <p className="mb-8 text-sm leading-relaxed max-w-3xl mx-auto text-teal-600">
            <strong className="text-teal-500">Aviso Legal:</strong> O Kit Documentação Express MEDIX é um produto educacional e informativo. Ele não substitui consultoria jurídica, assessoria contábil ou técnica. Não promete nem garante regularização ou aprovação por órgãos fiscalizadores.
          </p>
          <div className="h-px w-full bg-teal-900/50 mb-8"></div>
          <p className="text-sm text-teal-700">© {new Date().getFullYear()} MEDIX IA. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/5511999999999?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20Kit%20Documentação%20Express." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20bd5a] transition-all z-50 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale com a nossa equipe
        </span>
      </a>

    </div>
  );
}
