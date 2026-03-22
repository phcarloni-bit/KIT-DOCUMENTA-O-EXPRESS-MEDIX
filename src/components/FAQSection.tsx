import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const faqItems: FAQItemProps[] = [
  {
    question: '1. O Kit regulariza minha clínica?',
    answer:
      'Não. Ele traz clareza sobre o que é obrigatório, o que está faltando e por onde começar. É o passo fundamental antes de qualquer regularização.',
  },
  {
    question: '2. É um curso?',
    answer:
      'Não. É um kit prático com diagnóstico e guias simples para você aplicar imediatamente, sem precisar assistir horas de aulas teóricas.',
  },
  {
    question: '3. E se eu precisar de ajuda depois?',
    answer:
      'Você pode seguir para a Consultoria MEDIX IA ou usar nosso produto de suporte avançado para acompanhamento personalizado.',
  },
  {
    question: '4. Como recebo o Kit?',
    answer:
      'Imediatamente por email, logo após a confirmação do pagamento. Você receberá os dados de acesso à plataforma.',
  },
  {
    question: '5. Tem garantia?',
    answer:
      'Sim. Você tem 7 dias de garantia incondicional com 100% de reembolso caso o material não atenda suas expectativas. Risco zero.',
  },
  {
    question: '6. Tenho suporte?',
    answer:
      'Sim. Se você tiver alguma dúvida sobre a compra do Kit, é só chamar nossa equipe no botão de WhatsApp aqui no canto da tela!',
  },
];

function FAQItem({ question, answer }: FAQItemProps) {
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-900 mb-16">Dúvidas Frequentes</h2>
        <div className="space-y-2">
          {faqItems.map((item) => (
            <div key={item.question}>
              <FAQItem question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
