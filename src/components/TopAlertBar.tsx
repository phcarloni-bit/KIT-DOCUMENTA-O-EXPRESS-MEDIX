import { AlertCircle } from 'lucide-react';

export function TopAlertBar() {
  return (
    <div className="bg-amber-500 text-amber-950 text-center py-2 px-4 text-sm font-bold tracking-wide flex items-center justify-center gap-2 z-50 relative">
      <AlertCircle className="w-4 h-4" />
      <span>OFERTA ESPECIAL: ACESSO IMEDIATO AO KIT POR TEMPO LIMITADO</span>
    </div>
  );
}
