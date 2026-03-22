import { AnimatePresence, motion } from 'motion/react';

type StickyMobileCTAProps = {
  show: boolean;
  onClick: () => void;
};

export function StickyMobileCTA({ show, onClick }: StickyMobileCTAProps) {
  return (
    <AnimatePresence>
      {show && (
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
            onClick={onClick}
            className="bg-emerald-500 hover:bg-emerald-400 text-teal-950 font-black py-3 px-6 rounded-xl text-sm transition-colors shadow-lg flex-1 text-center"
          >
            GARANTIR KIT
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
