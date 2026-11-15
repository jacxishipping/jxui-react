// @jxui/react v3.0.0 — ProductCard (JXUI v3.0 Unified Component Suite)
import React, { useState } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Heart, ShoppingCart, Minus, Plus, Check } from 'lucide-react';

// 15. ProductCard — a product card with a quantity stepper, a favourite
// toggle and a working add-to-cart button with a cart count.
export const ProductCard: React.FC = () => {
  const { palette } = useJXTheme();
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const [cart, setCart] = useState(0);
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    setCart((c) => c + qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="w-52 p-3 border rounded-xl bg-white dark:bg-slate-900 flex flex-col gap-2 text-xs">
      <div className={`relative w-full h-24 rounded-lg flex items-center justify-center bg-gradient-to-br ${palette.gradient} text-white`}>
        <span className="font-bold text-sm">JXUI Pro</span>
        <span className="absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/25">-20%</span>
        <button
          type="button"
          onClick={() => setLiked((l) => !l)}
          aria-pressed={liked}
          aria-label={liked ? 'Remove from favourites' : 'Add to favourites'}
          className="absolute top-2 right-2 min-h-[32px] min-w-[32px] rounded-full bg-white/90 text-slate-700 flex items-center justify-center cursor-pointer"
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>
      </div>
      <div className="flex justify-between items-baseline font-bold">
        <span className="text-slate-900 dark:text-white">JXUI Pro</span>
        <span className={palette.text}>${199 * qty}</span>
      </div>
      <p className="text-[11px] text-slate-500">Full library licence · $199 each · lifetime updates.</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="min-w-6 text-center font-mono font-bold" aria-live="polite">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(9, q + 1))}
            aria-label="Increase quantity"
            className="min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <button
          type="button"
          onClick={addToCart}
          className={`min-h-[36px] flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold text-white cursor-pointer ${added ? 'bg-emerald-600' : palette.bg}`}
        >
          {added ? <Check className="w-3.5 h-3.5" /> : <ShoppingCart className="w-3.5 h-3.5" />}
          {added ? 'Added!' : 'Add to cart'}
        </button>
      </div>
      <span className="text-[11px] text-slate-400" aria-live="polite">
        {cart > 0 ? `${cart} item${cart > 1 ? 's' : ''} in cart` : 'Cart is empty'}
      </span>
    </div>
  );
};
